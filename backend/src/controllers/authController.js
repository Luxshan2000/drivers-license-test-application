const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { GenerateRandomPassword } = require('../utils/string');

require('dotenv').config();
exports.signup = async (req, res) => {
  try {
    // Extract user information
    const { email, password, name } = req.body;
    const saltRounds = 10; // Adjust
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Create a new user 
    const user = new User({ email, hashedPassword, name });
    await user.save();



    // Send the response
    res.json({ message: 'Signup successful' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Signup failed' });
  }
};



exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the username exists in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // If the username and password are correct, generate a JWT token
    const token = jwt.sign({ name: user.name, isVerified: user.isVerified }, process.env.SECURITY_KEY, { expiresIn: '5hour' });


    res.cookie("token", token);
    
    // Send the token in the response
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
};

exports.loginApp = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the username exists in the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
  
    if (passwordMatch) {
    
      const token = jwt.sign({ name: user.name, isVerified: user.isVerified }, process.env.SECURITY_KEY, { expiresIn: '5hour' });
      return res.header("x-auth-token", token).status(201).json({token});

    } else {
      console.log("Invalid credentials.", user.email);
      return res.status(401).json({ error: 'Incorrect password' });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({error: "An error occurred during login."});
  }
};


exports.googleLogin = async (req , res) => {
  return googleLoginBase(req,res, true)
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

      //create a new user
      const newUser = new User({ email, hashedPassword, name })
      await newUser.save()

      // Send the response
      const newToken = jwt.sign({ name: newUser.name, isVerified: newUser.isVerified }, process.env.SECURITY_KEY, { expiresIn: '5hour' });
      if(isWeb){
        res.cookie("token", newToken,{ maxAge: 900000, httpOnly: true });
        res.json({ message: 'Login successful' });
      }else{
        res.json({message  : 'Login Successful', token})
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
exports.facebooklogin = async ( req,res) => {
  
  const { token } = req.body
    console.log({ token })
    //verfication of user by fetching user information from google
    const facebookResponse = await fetch('https://graph.facebook.com/USER-ID?metadata=1', {
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

exports.googleLoginApp = async (req,res) => {
  const { token } = req.body

}