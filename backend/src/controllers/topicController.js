const Topic = require('../models/topic')
const User  = require('../models/user')
const jwt = require("jsonwebtoken");


exports.getAllTopics = async (req, res) => {
//   console.log(req.email)

    try{
        const email = req.email
        const user = await User.findOne({ email })


        
        
        const topics = await Topic.find().select('title no videoUrl _id')

        const  newtopics = topics.map((item)=> {
            const newOb = {...item._doc, isCompleted: (user.completed).includes(item.no)}
            return newOb
        } )

        

        res.status(200).json(newtopics)
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

exports.getTopicScript = async (req,res) =>{
    try{
        const no = req.params.id
        const topicData = await Topic.findOne({no}).select("title script videoUrl no")
        res.status(200).json(topicData)
    }
    catch{
        res.status(500).json({error: err})
    }
}

exports.getTopicQuiz = async (req,res) =>{
    try{
        const no = req.params.id
        const topicData = await Topic.findOne({no}).select("title questions no")
        res.status(200).json(topicData)
    }
    catch{
        res.status(500).json({error: err})
    }
}




exports.startQuiz = async (req,res) =>{
    try{
        const no = req.params.id
        const email = req.email


        const newObj = {
            quizNo: no,
            status: 0,
            startOn: new Date(),
            submitOn: null,
            data: [
            ]
        }

        console.log(newObj);

        await User.findOneAndUpdate(
            { email: email }, // Replace with your criteria to find the user
            { $push: { completed: newObj } }, // Use $push to add the new element
            { new: true } // Return the updated user
        )
        // console.log(no, email)
        // const topicData = await Topic.findOne({no}).select("title questions no")
         res.status(200).json({msg:"ok"})
    }
    catch{
        res.status(500).json({error: err})
    }
}


exports.saveQuizAns = async (req, res) => {
    const email = req.email;
    const data = req.body;
    console.log(email);
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Access the last 'completed' object and update the 'data' field
      const lastCompletedIndex = user.completed.length - 1;
      user.completed[lastCompletedIndex].data = data;
  
      await user.save(); // Save the changes to the database
  
      res.status(200).json({ message: "Quiz answers saved successfully" });
    } catch (error) {
    //   console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

exports.getTopicQuizReviewView = async (req,res)=>{
    try{
        const email = req.email
        const no = req.params.id
        const user = await User.findOne({email}).select("completed")
        
        const reviewArray = user.completed.filter((item)=> (item.quizNo == no && item.status == 1 ) )
        const continueArray = user.completed.filter((item)=> (item.quizNo == no && item.status == 0 ) )


        res.status(200).json({review: reviewArray, continue: continueArray})
    }
    catch(err){
        res.status(500).json({message:"Internal server error"})
        console.log("Error")
    }
}
  




