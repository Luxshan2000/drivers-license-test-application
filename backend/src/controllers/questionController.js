const Question = require('../models/questions')
const jwt = require("jsonwebtoken")
const User = require('../models/user')

var tests = [
    {
        no:'01',
        completed:false,
        premuim:true,
        courseFinished:true,
        grade:'',
        time: '20 minutes'
    },
    {
        no:'02',
        completed:false,
        premuim:true,
        courseFinished:true,
        grade:'',
        time: '20 minutes'
    },
    {
        no:'03',
        completed:false,
        premuim:true,
        courseFinished:true,
        grade:'',
        time: '20 minutes'
    },
    {
        no:'04',
        completed:false,
        courseFinished:true,
        grade:'',
        time: '20 minutes'
    }
]

exports.getPracticeQuiz = async (req, res) => {
    try{
        res.status(200).json(tests)
    }catch (err){

    }
}
exports.getQuestions = async (req, res) => {
    try{
        // const email = req.email
        // const user = await User.findOne({ email })
        const questions = await Question.find()
        // console.log({questions})
        res.status(200).json(questions)
    }
    catch{
        res.status(500).json({error : err})
    }
}

let userAnswers;

exports.submitPracticeQuiz = async (req, res) => {
    try{
        // const {userPracticePaper} = req.body; 
        // practiceQuiz type = {<quizId>:<ans>} => [{quizId: <quiId>, ans: <ans>}]
        // const _practiceQuiz = Object.keys().map(k => ({quizId: k, ans:practiceQuiz[k]}) )
        tests[0].completed = true
        const { practiceQuiz } = req.body
        userAnswers = practiceQuiz
        console.log(practiceQuiz)



        res.status(200).json({success : true , message : "Submitted successfully"})
    }catch(err){
        res.status(500).json({error : err})
    }
}

// const userAnswers = {
//     '652f92ee72fd7e90eea0fa1b': 'White colour with Red background',
//     '652f92ee72fd7e90eea0fa1c': 'Let the other vehicle to overtake you without increasing the speed',
//     '652f92ee72fd7e90eea0fa1d': 'Give away the road to the vehicles coming from left or close to the vehicle',
//     '652f92ee72fd7e90eea0fa1e': 'Middle lane of the road',
//     '652f92ee72fd7e90eea0fa20': 'When a vehicle drive straight in an intersection',
//     '652f92ee72fd7e90eea0fa1f': 'Because the front vehicle receives much space to overtake'
//   }

const correctAnswers = [
    {
      _id: "652f92ee72fd7e90eea0fa1b",
      question: 'According the Sri Lankan motor traffic law, accidental warning signals are in,',
      options: ["White colour with Red background",
                "Black colour with Yellow background",
                "Red colour with White background",
                "White colour with Blue background"],
      answer: 'Red colour with White background',
      positiveFeedback: 'You have selected the correct answer.',
      negativeFeedback: 'You have selected the wrong answer. The correct answer is Red colour with White background',
      __v: 0
    },
    {
      _id: "652f92ee72fd7e90eea0fa1c",
      question: 'When another vehicle overtakes your vehicle,',
      options: [
        "Ready to stop by lowering the gears",
        "Let the other vehicle to overtake you without increasing the speed",
        "If you are not willing to let him to overtake, you can increase the speed",
        "If you are not willing to let him to overtake, right hand signal can be shown"],
      answer: 'Let the other vehicle to overtake you without increasing the speed',
      positiveFeedback: 'You have selected the correct answer.',
      negativeFeedback: 'You have selected the wrong answer. The correct answer is Let the other vehicle to overtake you without increasing the speed',
      __v: 0
    },
    {
      _id: "652f92ee72fd7e90eea0fa1d",
      question: 'The primary rule of a roundabout is?',
      options: [
        "Give away the road to the vehicles coming from left or close to the vehicle" ,
        "Give away the road to the vehicles coming from the most jammed direction" ,
        "Give away the road to the vehicles coming from right or closely by right side", 
        "Give away the road to the vehicles coming from the right"],
      answer: 'Give away the road to the vehicles coming from right or closely by right side',
      positiveFeedback: 'You have selected the correct answer.',
      negativeFeedback: 'You have selected the wrong answer. The correct answer is Give away the road to the vehicles coming from right or closely by right side',
      __v: 0
    },
    {
      _id: "652f92ee72fd7e90eea0fa1e",
      question: 'When you drive forward on a road with three lanes, what you should select is,',
      options: [
        "Right lane of the road",
        "Left lane of the road",
        "Middle lane of the road", 
        "Middle lane or the right lane of the road"],
      answer: 'Middle lane of the road',
      positiveFeedback: 'You have selected the correct answer.',
      negativeFeedback: 'You have selected the wrong answer. The correct answer is Middle lane of the road',
      __v: 0
    },
    {
      _id: "652f92ee72fd7e90eea0fa20",
      question: 'Hazard lamps of a vehicle should use,',
      options: [ 
        "To indicate the vehicle is having an emergency situation",
        "When a vehicle drive straight in an intersection",
        "To get the priority" ,
        "Only when a vehicle is disabled and stopped."],
      answer: 'Only when a vehicle is disabled and stopped.',
      positiveFeedback: 'You have selected the correct answer.',
      negativeFeedback: 'You have selected the wrong answer. The correct answer is Only when a vehicle is disabled and stopped.',
      __v: 0
    },
    {
      _id: "652f92ee72fd7e90eea0fa1f",
      question: 'You should keep an adequate distance with the front vehicle,',
      options: [
        "Because if the front vehicle driver suddenly stops, you can safely control your vehicle",
        "Because the front vehicle receives much space to overtake" ,
        "Because it is easy drive behind the front vehicle" ,
        "Because if the front vehicle driver suddenly stops, you have more time to overtake"],
      answer: 'Because if the front vehicle driver suddenly stops, you can safely control your vehicle',
      positiveFeedback: 'You have selected the correct answer.',
      negativeFeedback: 'You have selected the wrong answer. The correct answer is Because if the front vehicle driver suddenly stops, you can safely control your vehicle',
      __v: 0
    }
  ]







exports.getReview = async (req, res) => {
    try{
        var grade = 0
        var reviewAnswers = {}
    for (const [question, userAnswer] of Object.entries(userAnswers)) {
        const result = correctAnswers.find(item => item._id === question)
        if (result.answer == userAnswer) {
            grade = grade + 1
            reviewAnswers[result._id] = {
                'question' : result.question,
                'options' : result.options,
                'userAnswer':userAnswer,
                'feedback' : result.positiveFeedback,
            }    
        }else {
            reviewAnswers[result._id] = {
                'question' : result.question,
                'options' : result.options,
                'userAnswer':userAnswer,
                'feedback' : result.negativeFeedback,
            }   
        }   
    }
    grade = Math.round(grade/Object.keys(correctAnswers).length)*100
    tests[0].grade = grade
    res.status(200).json({success : true ,message : "Successful", grade : grade, review : reviewAnswers})
    }catch{
        res.status(500).json({error : err})
    }
}