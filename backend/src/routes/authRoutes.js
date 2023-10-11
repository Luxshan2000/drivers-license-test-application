const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
router.post('/signup', authController.signUpWeb);
router.post('/signUpApp',authController.signUpApp);

router.post('/login', authController.loginWeb);
router.post('/loginApp', authController.loginApp);

router.post('/googleLogin',authController.googleLoginApp);

router.post('/facebooklogin',authController.facebooklogin);

router.post('/logout', authController.logout);

router.post('/verifyotp', authController.verificationWeb);
router.post('/verifyOtpApp',authController.verificationApp)

module.exports = router;
