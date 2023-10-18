const mongoose = require("mongoose")

const Question = mongoose.model("questions",{
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
})

module.exports =  Question