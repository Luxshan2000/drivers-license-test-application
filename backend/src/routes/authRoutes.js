const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const authController = require('../controllers/authController');
const { verifyUser } = require('../middleware')






router.post('/signup', authController.signUpWeb);
router.post('/signUpApp', authController.signUpApp);

router.post('/login', authController.loginWeb);
router.post('/loginApp', authController.loginApp);

router.post('/googleLogin', authController.googleLogin)
router.post('/googleLoginApp', authController.googleLoginApp);

router.post('/facebooklogin', authController.facebooklogin);

router.post('/logout', authController.logout);

router.post('/verifyotp', authController.verificationWeb);
router.post('/verifyOtpApp', authController.verificationApp)

router.post('/resend', verifyUser, authController.resendOTP)

module.exports = router;
