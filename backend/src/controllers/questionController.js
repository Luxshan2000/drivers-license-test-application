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

exports.submitPracticeQuiz = async (req, res) => {
    try{
        // const {userPracticePaper} = req.body; 
        const { practiceQuiz } = req.body
        const { email } = req.email

        console.log(email)

        console.log( practiceQuiz )
        res.status(200).json({success : true , message : "Submitted successfully"})
    }catch(err){
        res.status(500).json({error : err})
    }
}

exports.getReview = async (req, res) => {
    try{
        res.status(200).json({success : true , message : "Submitted successfully"})
    }catch{
        res.status(500).json({error : err})
    }
}