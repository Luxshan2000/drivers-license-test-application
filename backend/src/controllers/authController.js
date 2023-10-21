const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { GenerateRandomPassword } = require('../utils/string');
const emailModule = require("../utils/email");
const { OTPGenerator } = require('../utils/otpgenerator');


require('dotenv').config();
const signup = async (req, res, isWeb) => {
  try {
    // Extract user information

    const otp = OTPGenerator()



    const { email, password, name } = req.body;
    const isAdmin = false


    

    const saltRounds = 10; // Adjust
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.findOne({ email });

    
    if (!user){

      
    // Create a new user 
    const user = new User({ email, hashedPassword, name, otp, isAdmin });
    await user.save();

    console.log("Start");
    await emailModule.sendOTP(email, otp)



    // Send the response
    const token = jwt.sign({ name: user.name, isVerified: user.isVerified, email: user.email }, process.env.SECURITY_KEY, { expiresIn: '7day' });
    if (isWeb) {
      const oneWeekInSeconds = 7 * 24 * 60 * 60; // 7 days * 24 hours * 60 minutes * 60 seconds
      const expirationDate = new Date(Date.now() + oneWeekInSeconds * 1000); // Convert seconds to milliseconds
      res.cookie('token', token, {
        expires: expirationDate,

      });
      res.json({ message: 'Signup successful' });
    }else{
      return res.header("x-auth-token", token).status(201).json({ token, success: true });

    }


  }else{
    return res.status(404).json({error : "User exists", success : false})
  }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Signup failed' });
  }
};
exports.signUpWeb = async (req, res) => {
  return signup(req, res, true)
}
exports.signUpApp = async (req, res) => {
  return signup(req, res, false)
}

const login = async (req, res, isWeb) => {
  try {
    const { email, password } = req.body;

    // Check if the username exists in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found', success: false });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password', success: false });
    } else {
      // If the username and password are correct, generate a JWT token
      const token = jwt.sign({ name: user.name, isVerified: user.isVerified, email: user.email }, process.env.SECURITY_KEY, { expiresIn: '5hour' });
      if (isWeb) {
        const oneWeekInSeconds = 7 * 24 * 60 * 60; // 7 days * 24 hours * 60 minutes * 60 seconds
        const expirationDate = new Date(Date.now() + oneWeekInSeconds * 1000); // Convert seconds to milliseconds
        res.cookie('token', token, {
          expires: expirationDate,

        });
        // Send the token in the response
        res.json({ message: 'Login successful' });
      } else {
        const isVerified = jwt.verify(token, process.env.SECURITY_KEY).isVerified
        return res.header("x-auth-token", token).status(201).json({ token, success: true, isVerified });

      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
};

exports.loginWeb = async (req, res) => {
  return login(req, res, true)
}

exports.loginApp = async (req, res) => {
  return login(req, res, false)
}

exports.googleLogin = async (req, res) => {
  return googleLoginBase(req, res, true)
}
const googleLoginBase = async (req, res, isWeb) => {
  try {
    const { token } = req.body
    console.log({ token })
    //verfication of user by fetching user information from google
    const googleResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      method: "GET", headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    }).then(res => res.json())

    console.log(googleResponse)
    const { email, name } = googleResponse
    //see if there is an user with that email already
    const user = await User.findOne({ email })
    console.log({ email, name })

    if (!user) {
      //Generate random password
      const password = GenerateRandomPassword
      const saltRounds = 10; // Adjust
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const isAdmin = false
      const isVerified = true
      //create a new user
      const newUser = new User({ email, hashedPassword, name, isAdmin, isVerified })
      
      await newUser.save()
      const newToken = jwt.sign({ name: newUser.name, isVerified: newUser.isVerified }, process.env.SECURITY_KEY, { expiresIn: '5hour' });
      if (isWeb) {
        res.cookie("token", newToken);
        res.json({ message: 'Login successful' });
        return
      } else {
        res.json({ message: 'Login Successful', token })
        return
      }




    }
    
    const newToken = jwt.sign({ name: user.name, isVerified: user.isVerified }, process.env.SECURITY_KEY, { expiresIn: '5hour' });


    res.cookie("token", newToken);

    // Send the token in the response
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }


}
exports.facebooklogin = async (req, res) => {

  const { token, userID } = req.body
  console.log({ token, userID })
  //verfication of user by fetching user information from google
  const facebookResponse = await fetch(`https://graph.facebook.com/${userID}?fields=id,name,email&access_token=${token}`, {
    method: "GET", headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json'
    }
  }).then(res => res.json())

  console.log(facebookResponse)
  // const { email, name } = googleResponse
  // //see if there is an user with that email already
  // const user = await User.findOne({ email })
  // console.log({ email, name })

  // if (!user) {
  //   //Generate random password
  //   const password = GenerateRandomPassword
  //   const saltRounds = 10; // Adjust
  //   const hashedPassword = await bcrypt.hash(password, saltRounds);

  //   //create a new user
  //   const newUser = new User({ email, hashedPassword, name })
  //   await newUser.save()

  //   // Send the response
  //   const newToken = jwt.sign({ name: newUser.name, isVerified: newUser.isVerified }, process.env.SECURITY_KEY, { expiresIn: '5hour' });
  //   res.cookie("token", newToken);
  //   res.json({ message: 'Login successful' });


  // }

  // const newToken = jwt.sign({ name: user.name, isVerified: user.isVerified }, process.env.SECURITY_KEY, { expiresIn: '5hour' });


  // res.cookie("token", newToken);

  // // Send the token in the response
  // res.json({ message: 'Login successful' });

}

exports.googleLoginApp = async (req, res) => {
  return googleLoginBase(req, res, false)

}



const verify = async (req, res, isWeb) => {
  try {
    const { token, otp } = req.body
    console.log({token , otp})
    jwt.verify(token, process.env.SECURITY_KEY, (err, decoded) => {
      if (err) {
        // Token is invalid or has expired
        console.error("JWT verification failed:", err);
      } else {
        // Token is valid, and 'decoded' contains the decoded payload
        final = decoded
      }
    });
    const email = final.email
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    if (user.otp === otp) {
      // Update isVerified as true and otp as null
      user.isVerified = true
      user.otp = null
      await user.save() // Save the changes to the user document

      const token = jwt.sign({ name: user.name, isVerified: user.isVerified, email: user.email }, process.env.SECURITY_KEY, { expiresIn: '7day' });

      if (isWeb) {
        const oneWeekInSeconds = 7 * 24 * 60 * 60; // 7 days * 24 hours * 60 minutes * 60 seconds
        const expirationDate = new Date(Date.now() + oneWeekInSeconds * 1000); // Convert seconds to milliseconds
        res.cookie('token', token, {
          expires: expirationDate
        })
        return res.status(200).json({ message: "User verified successfully" })
      } else {
        return res.header("x-auth-token", token).status(201).json({ token, success: true });
      }
    } else {
      return res.status(400).json({ message: "Invalid OTP" })
    }
  } catch (err) {
    //console.error(err);
    res.status(500).json({ message: "Internal Server Error" })
  }
}

exports.verificationWeb = async (req, res) => {
  return verify(req, res, true)
}
exports.verificationApp = async (req, res) => {
  return verify(req, res, false)
}
exports.logout = async (req, res) => {
  try {
    res.clearCookie('token')
    res.json({ msg: "Done" })
  }
  catch (err) {
    res.error(err)
  }

}

exports.resendOTP = async (req,res)=>{
  try {
    // Extract user information

    console.log("Came")
    const otp = OTPGenerator()
    const email = req.email;
    const user = await User.findOne({ email });
    if (user){
      // Create a new user 
      user.otp = otp 
      await user.save()
      await emailModule.sendOTP(email, otp)
      res.status(200).json({msg:"ok"})
    }

    else{
      res.status(404).json({msg:"user not found!"})
    }
  }
  catch (err){
    res.status(404).json({msg:"user not found!"})
  }
}


