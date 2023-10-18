require('dotenv').config();
const mongoose = require("mongoose");
const Topic = require('../src/models/topic');
const Question = require('../src/models/questions')


const connectMongoDb = ()=>{
        mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('====================================');
        console.log("mongoDB is sucessfully connected!");
        console.log('====================================');

                    /*Debugging Purpose*/
        // const sample  = async ()=>{
        // const title = "What are the ways to apply License?"
        // const no = 3
        // const videoUrl = "videourl"
        // const script = '<h1 >This is an script</h1>'
        // const questions = [
        //     {
        //       ques: "Question 1",
        //       answer: "Answer 1",
        //       posFeedback: "Correct!",
        //       negativeFeedback: "Sorry, wrong answer.",
        //       options: ["Option A", "Option B", "Option C"],
        //       correctOption: "Option B"
        //     },
        //     {
        //       ques: "Question 2",
        //       answer: "Answer 2",
        //       posFeedback: "Good job!",
        //       negativeFeedback: "Try again.",
        //       options: ["Option X", "Option Y", "Option Z"],
        //       correctOption:"Option X"
        //     }
        //     // Add more questions as needed
        //   ]


        // const topic = new Topic({title,no,videoUrl,  script, questions })

        //  await topic.save()
        // }

        // sample()
        




    }).catch((error)=>{
        console.log('====================================');
        console.log("mongoDB configration error\n",error);
        console.log('====================================');
    })
}

module.exports = connectMongoDb;