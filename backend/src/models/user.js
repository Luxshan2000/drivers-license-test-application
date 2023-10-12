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
            topicId:{
                type: Number,
                required: true
            },
            isVideoFinished:{
                type: Boolean,
                required: true,
                default: false
            },
            isQuizFinished:{
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
})

module.exports = User