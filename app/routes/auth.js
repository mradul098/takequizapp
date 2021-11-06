const express = require("express");
const router = express.Router();
const AuthController = require("../controller/AuthController");
const TakequizController = require("../controller/TakequizController");

// router.get("/", AuthController.verifyToken, (req, res, next) => {
//   res.send("Hello From AUTH!");
// });
router.get("/", (req, res,next) => {
  res.send("Hello form auth ");
});
// user login
router.post("/login", async (req, res, next) => {
  await AuthController.loginUser(req, res, next);
});

// register new user
router.post("/registration", async (req, res, next) => {
  console.log("resutration");
  req.body = await AuthController.registerUser(req, res, next);
  // creating the quizzer profile
  await TakequizController.createTakequiz(req, res, next);
});

module.exports = router;
