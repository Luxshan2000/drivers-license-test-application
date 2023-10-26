const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const topicController = require('../controllers/topicController');
const questionController = require('../controllers/questionController');
require('dotenv').config();


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

router.get('/topics',verifyUser,topicController.getAllTopics)
router.get('/topic/:id',verifyUser,topicController.getTopicScript)
router.get('/topic/quiz/:id',verifyUser,topicController.getTopicQuiz)
router.post('/startexam/:id', verifyUser, topicController.startQuiz )
router.post('/topic/quiz/answer/:id', verifyUser, topicController.saveQuizAns )
router.get('/topic/quiz/review/:id', verifyUser, topicController.getTopicQuizReviewView )
router.get('/topic/quiz/get/review/:rid', verifyUser, topicController.getTopicQuizReview )



// router.post('/submitPracticeQuiz',verifyUser, questionController.submitPracticeQuiz)
// router.get('/getPracticeQuiz',questionController.getPracticeQuiz)
// router.get('/getReview',questionController.getReview)
router.get('/getMarks',verifyUser,questionController.getMark)


module.exports = router;