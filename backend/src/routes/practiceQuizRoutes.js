const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const questionController = require('../controllers/questionController');
const { verifyUser } = require('../middleware');


// const  verifyUser = (req,res,next) => {
//     const token = req.cookies.token
//     if(!token){
//       res.json({msg:"provide token!"})
//     }
//     else{
//       jwt.verify(token,process.env.SECURITY_KEY, (err,decoded)=>{
//         if(err){
//             try {
//                 res.clearCookie('token')
//                 res.json({ msg: "Done" })
//               }
//               catch (err) {
//                 res.status(404).json({error:err})
//               }
//         }
//         else{
//           req.email = decoded.email
//           next()
//         }
//       })
//     }
//   }

router.get('/getPracticeQuizPapers',verifyUser,questionController.getPracticeTests)
router.post('/submitPracticeQuiz',verifyUser,questionController.submitPracticeQuiz)


module.exports = router