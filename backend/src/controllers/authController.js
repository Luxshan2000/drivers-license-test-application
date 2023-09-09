const User = require('../models/user')
const crypto = require('crypto');

exports.signup = async (req, res) => {
    try {
        // Extract user information
        const { email, password } = req.body
        const hash = crypto.createHash('sha256')
        hash.update(password)
        const hashedPassword = hash.digest('hex')
        console.log(hashedPassword)
        // Create a new user 
        const user = new User({ email, hashedPassword })
        await user.save()
    
        // message and jwt
        res.json({ message: 'Signup successful' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Signup failed' });
      }
};
  
exports.login = async (req, res) => {
    // Logic for user login
};