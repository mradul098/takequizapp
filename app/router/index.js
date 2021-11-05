const express = require("express");
const router = express.Router();

// import
const DBConnection = require("../../database/DBConnection");
const auth = require("./auth");
const quizzer = require("./quizzer");
const quiz = require("./quiz");
//const result = require("./result");
// {base API URL}
const api_uri = process.env.API_URI;

console.log(process.env.API_URI);

router.get("/", (req, res) => {
  res.send("Hello ");
});

router.get("/result", (req, res) => {
 
res.sendFile(__dirname, '../router', 'result.html ')

  //res.sendFile("result.html");
});
// connect to database
DBConnection.dbconnect();

// route middleware
router.use(api_uri + "/auth", auth);
router.use(api_uri + "/quizzers", quizzer);
router.use(api_uri + "/quizzes", quiz);
//router.use(api_uri + "/result", result);
module.exports = router;
