const mongoose = require("mongoose")

const User= mongoose.model("users",{
    email:{
        type:String,
        required:true,
        unique:true
    },
    hashedPassword:{
        type:String,
        required:true
    },
    name:{
        type: String,
        required: true
    },
    isVerified: {
        type:Boolean,
        default:false 
    },
    preLanguage:{
        type:String,
        default:"English",
        required: true,
        enum :["Sinhala", "Tamil", "English"] 
    },
    otp: {
        type : String,
        default:null 
    },
    payments:[
        {
            amount:{
                type: Number,
                required: true,
                default: 400
            },
            subcriDate:{
                type: Date,
                required: true,
                default: Date.now
            }
        }
    ],
    refundRequests:[
        {
            reqDate:{
                type: Date,
                trim : true,
                required : true
            },
            resDate:{
                type: Date,
                trim : true
            },
            Status: {
                type: String,
                trim : true,
                default: "Open",
                enum :["Opened", "Accepted", "Rejected"]
            }
        }
    ],
    isAdmin:{
        type: Boolean,
        required: true
    }, 
    query:[
        {
           req:{
            type: String,
            required: true,
            trim: true
           },
           res:{
            type: String,
            trim: true
           },
           reqDate:{
            type: Date,
            required: true
           },
           resDate:{
            type: Date,
            required: true
           },
           status:{
            type: String,
            default: "Open",
            required: true,
            enum:["Open","Closed"]
           }
        }
    ],
    completed:[
        {
            quizNo:{
                type:Number,
                required: true
            },
            grade:{
                type: Number,
                default:0
            },
            status: {
                type: Number,
                default: 1
            },
            startOn:{
                type: Date,
                required: true,
                default: Date.now
            },
            submitOn:{
                type: Date,
            },
            data:[{
                quesId:{
                    type:String,
                    required: true
                },
                ans:{
                    type:String,
                    default:"NULL",
                    required: true
                }
            }]
        }
    ],
    practiceQuiz : [
        {
            quizID:{
                type:Number,
                required: true
            },
            grade:{
                type: Number,
                default:0
            },
            status: {
                type: Number,
                default: 1
            },
            startOn:{
                type: String,
                required: true,
                // default: Date.now
            },
            submitOn:{
                type: String,
            },
            data:[{
                quesId:{
                    type:String,
                    required: true
                },
                ans:{
                    type:String,
                    default:"NULL",
                    required: true
                }
            }]
        }
    ]
})

//practiceQuiz = [{ quizID : 1 , },]
module.exports = User