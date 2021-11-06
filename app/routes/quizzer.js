const express = require("express");
const router = express.Router();
const AuthController = require("../controller/AuthController");
const TakequizController = require("../controller/TakequizController");

router.get("/data", AuthController.verifyToken, async (req, res, next) => {
  await TakequizController.findAll(req, res, next);
});

// get quizzer profile
router.get("/:id", AuthController.verifyToken, async (req, res, next) => {
  await TakequizController.get(req, res, next);
});

module.exports = router;
