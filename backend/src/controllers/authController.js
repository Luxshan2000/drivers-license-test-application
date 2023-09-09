const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
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