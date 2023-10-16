const Topic = require('../models/topic')
const jwt = require("jsonwebtoken");


exports.getAllTopics = async (req, res) => {
//   console.log(req.email)

try{
    const topics = await Topic.find().select('title no videoUrl _id')
    res.status(200).json(topics)
}
catch(err){
    res.status(500).json({error: err})
}
}





