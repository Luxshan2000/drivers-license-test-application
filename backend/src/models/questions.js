const mongoose = require("mongoose")

const PracticeQuizPapers = mongoose.model("questions",{
    quizNumber : {
        type : String,
        required : true
    },
    time : {
        type : Number
    },
    questions : [
        {
            question : {
                type : String,
                required : true,
                unique : true
            },
            options : [{
                type : String,
                trim : true
            }],
            answer : {
                type : String,
                trim : true
            },
            positiveFeedback : {
                type : String,
                trim : true
            },
            negativeFeedback : {
                type : String,
                trim : true
            }
        }
    ]
    
})

module.exports =  PracticeQuizPapers