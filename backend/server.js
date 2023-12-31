const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const connectMongoDb = require("./config/database");
const authRoutes = require("./src/routes/authRoutes");
const materialRoutes = require("./src/routes/materialRoutes");
const practiceQuizRoutes = require("./src/routes/practiceQuizRoutes");

const userModel = require("./src/models/user");
const topicModel = require("./src/models/topic");

const app = express();
app.disable('etag');
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://18.61.20.118:3000", "http://18.61.20.118:3001","*","http://18.61.20.118", "https://drivesmart-w549.onrender.com","http://drivesmart.tracktechlk.com","http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
); // add orgin, ....
app.use(bodyParser.json())

connectMongoDb();

// get all users
app.get("/getUsers", async (req, res) => {
  await userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// get all topics
app.get("/getTopics", async (req, res) => {
  await topicModel
    .find()
    .then((topics) => res.json(topics))
    .catch((err) => res.json(err));
});



app.use("/api/auth", authRoutes);
app.use("/api/material", materialRoutes);
app.use("/api/practiceQuizzes", practiceQuizRoutes);

app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {
  app,
};
