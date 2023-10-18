const mongoose = require("mongoose")

const Topic= mongoose.model("topics",{
    title:{
        type:String,
        required:true,
        unique:true
    },
    no:{
        type:String,
        required:true,
        unique: true
    },
    videoUrl: {
        type:String
    },
    popQuiz:[
      {
        quizId: {
          type: Number,
          required: true
        },
        popTime:{
          type: Number, //in seconds
          required: true
        }
      }
    ],
    script:{
        type: String,
    },
    questions: [
        {
          ques: {
            type: String,
            required: true,
            trim: true
          },
          answer: {
            type: String,
            required: true,
            trim: true
          },
          posFeedback: {
            type: String,
            trim: true
          },
          negativeFeedback: {
            type: String,
            trim: true
          },
          options: [{
            type: String,
            trim: true
          }],
        }
      ]
})

module.exports = Topic