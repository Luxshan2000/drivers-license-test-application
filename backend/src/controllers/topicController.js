const Topic = require('../models/topic')
const User  = require('../models/user')
const jwt = require("jsonwebtoken");


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





