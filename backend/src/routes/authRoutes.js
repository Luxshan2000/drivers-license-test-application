const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const authController = require('../controllers/authController');



const  verifyUser = (req,res,next) => {
    const token = req.cookies.token
    if(!token){
      res.json({msg:"provide token!"})
    }
    else{
      jwt.verify(token,process.env.SECURITY_KEY, (err,decoded)=>{
        if(err){
            try {
                res.clearCookie('token')
                res.json({ msg: "Done" })
              }
              catch (err) {
                res.status(404).json({error:err})
              }
        }
        else{
          req.email = decoded.email
          next()
        }
      })
    }
  }



router.post('/signup', authController.signUpWeb);
router.post('/signUpApp',authController.signUpApp);

router.post('/login', authController.loginWeb);
router.post('/loginApp', authController.loginApp);

router.post('/googleLogin',authController.googleLogin)
router.post('/googleLoginApp',authController.googleLoginApp);

router.post('/facebooklogin',authController.facebooklogin);

router.post('/logout', authController.logout);

router.post('/verifyotp', authController.verificationWeb);
router.post('/verifyOtpApp',authController.verificationApp)

router.post('/resend', verifyUser ,authController.resendOTP )

module.exports = router;
