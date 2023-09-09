const mongoose = require("mongoose")


const connectMongoDb = ()=>{
        mongoose.connect("mongodb+srv://sldrivesmart:driveSmart890@cluster0.arb0qln.mongodb.net/drivesmart?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('====================================');
        console.log("mongoDB is sucessfully connected!");
        console.log('====================================');
    }).catch((error)=>{
        console.log('====================================');
        console.log("mongoDB configration error\n",error);
        console.log('====================================');
    })
}

module.exports = connectMongoDb;