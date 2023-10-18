const Question = require('../models/questions')
const jwt = require("jsonwebtoken")

exports.getQuestions = async (req, res) => {
    try{
        // const email = req.email
        // const user = await User.findOne({ email })
        const questions = await Question.find()
        console.log({questions})
        res.status(200).json(questions)
    }
    catch{
        res.status(500).json({error : err})
    }
}