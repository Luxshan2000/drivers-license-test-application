const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')

const connectMongoDb = require("./config/database")
const authRoutes = require('./src/routes/authRoutes');


const app = express()
app.use(cookieParser())
const PORT = process.env.PORT || 5000

app.use(cors({
  origin:["http://localhost:3000"],
  methods:["POST","GET"],
  credentials:true
}))  // add orgin, ....
app.use(bodyParser.json())

connectMongoDb()




app.use('/api/auth', authRoutes); 





app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {
  app
}
