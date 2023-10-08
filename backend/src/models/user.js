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
    otp: {
        type : String,
        default:null 
    }
})

module.exports = User