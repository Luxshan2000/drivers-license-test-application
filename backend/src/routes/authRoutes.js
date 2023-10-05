const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/googleLogin',authController.googleLogin)
router.post('/loginApp', authController.loginApp);
router.post('/signUpApp',authController.signUpApp)
router.post('/facebooklogin',authController.facebooklogin);
router.post('/logout', authController.logout);



module.exports = router;
