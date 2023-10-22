const Topic = require('../models/topic')
const User  = require('../models/user')
const jwt = require("jsonwebtoken");
const { ObjectId } = require('mongodb');

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
        const email = req.email
        const topicData = await Topic.findOne({no}).select("title questions no")
        const user = await User.findOne({ email })


        if (!user) {
            return res.status(404).json({ message: "User not found" });
          }
      
          // Access the last 'completed' object and update the 'data' field
          let lastCompletedIndex;
    
          (user.completed).forEach((element, index) => {
            if(element.status == 0 && element.quizNo == no){
                lastCompletedIndex = index
            }
          });
    
          const startOn = user.completed[lastCompletedIndex].startOn




        res.status(200).json({ array: topicData,startOn:startOn })
    }
    catch(err){
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
    const no = req.params.id
    console.log(email);
  
    try {
      const topicData = await Topic.findOne({no}).select("title questions no")
      const user = await User.findOne({ email })

      // const obid =( topicData.questions[0]._id).toString()
      

      let grade = 0
      data.forEach((userQues,index)=>{
        for(let i=0; i< topicData.questions.length ; i++){
            // console.log(topicData.questions[i]._id.toString())
            if(userQues.quesId == topicData.questions[i]._id.toString() ){
                if(userQues.ans == topicData.questions[i].answer ){
                    grade +=1
                }else{
                    break
                }
            }
        }
      })

      

      grade = grade*100/data.length

      console.log(grade)
      

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Access the last 'completed' object and update the 'data' field
      let lastCompletedIndex;

      (user.completed).forEach((element, index) => {
        if(element.status == 0 && element.quizNo == no){
            lastCompletedIndex = index
        }
      });

      user.completed[lastCompletedIndex].grade = grade

      user.completed[lastCompletedIndex].submitOn = new Date()

      user.completed[lastCompletedIndex].data = data;

      user.completed[lastCompletedIndex].status = 1;
  
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

exports.getTopicQuizReview = async (req,res)=>{
    try{
        const email = req.email
        const rid = req.params.rid
        const user = await User.findOne({email}).select("completed")
        const continueArray = user.completed.filter((item)=> (item._id == rid ) )

        const sendData = continueArray[0]


        const no = sendData.quizNo

        const topicData = await Topic.findOne({no}).select("title questions no")
        

        const sendObj = (sendData.data).map((item,index)=>{
            for(let i=0; i<(topicData.questions).length; i++ ){
                // console.log(topicData.questions[0]._id)
                if(item.quesId === topicData.questions[i]._id.toString()){
                    
                    const obj = {
                        _id: topicData.questions[i]._id,
                        ques: topicData.questions[i].ques,
                        answer:  topicData.questions[i].answer,
                        posFeedback: topicData.questions[i].posFeedback,
                        negativeFeedback: topicData.questions[i].negativeFeedback,
                        options: topicData.questions[i].options,
                        userAns: item.ans
                    }

                    // console.log(obj)

                    return obj
                    
                }

            }
        })

        // console.log(topicData);

        

        res.status(200).json({data: sendObj, grade: sendData.grade, startOn: sendData.startOn,submitOn: sendData.submitOn , title: topicData.title })



    } catch(err){
        res.status(500).json({error:err})
    }
    


    


    

    // console.log((topicData.questions).length)


}
  




