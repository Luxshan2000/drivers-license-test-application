const nodemailer = require('nodemailer');
require('dotenv').config();
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
      user: 'luxluxshan2000@gmail.com',      // Your email address
      pass: process.env.EMAIL_KEY    // Your email password
    },
  });






async function  sendOTP(to, otp) {
  const html_email =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification Email</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">

    <div style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.2);">
        <h1 style="font-size: 24px; color: #333; text-align:center; text-decoration: underline;">DriveSmart</h1>
        <h2 style="font-size: 18px; color: #555; text-align:center">OTP Verification</h2>

        <p style="font-size: 20px;">Your OTP is: <strong style="font-size: 20px; color: #007bff;">${otp}</strong></p>

        <p>Please click the following link to complete the OTP verification process:</p>
        <a href="http://localhost:3000/passwordverify" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; font-size: 16px;">Verify OTP</a>

        <p style="font-size: 14px; color: #777;">Don't reply to this email.</p>
    </div>

</body>
</html>`

    try{

        const mailOptions = {
            from: 'luxluxshan2000@gmail.com',
            to: to,
            subject: 'OTP Verification',
            html: html_email
          };
    
        
        return await transporter.sendMail(mailOptions)
    }catch(err){
        console.log("Error while sending the email!")
    }


    

    
}

module.exports = {
    sendOTP,
};