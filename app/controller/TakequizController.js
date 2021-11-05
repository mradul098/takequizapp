const Joi = require("@hapi/joi");

const Takequiz = require("../model/Takequiz");

const TakequizController = {
  createTakequiz: async (req, res, next) => {
    // console.log("From Takequiz", req.body);
    const { _id, name, email } = req.body;
    const quizzerSchema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    });
    // console.log("User", { _id, name, email });
    // console.log("Schema", quizzerSchema);

    try {
      // validating given data
      // const { error } = quizzerSchema.validate({ _id, name, email });
      // if (error)
      //   return res.status(400).send("[validation error] Invalid data given.");

      // create Takequiz
      const quizzer = new Takequiz({
        _id: _id,
        name: name,
        email: email,
      });
      const savedTakequiz = await quizzer.save();
      return res.status(200).send(savedTakequiz);
    } catch (err) {
      console.log("Error", err);
      return res.status(400).send("Does not exist.");
    }
  },

  get: async (req, res, next) => {
    try {
      const quizzer = await Takequiz.findOne({ _id: req.params.id });
      if (quizzer) {
        const {
          _id,
          name,
          email,
          quizCreated,
          quizAttended,
          quizFlawless,
        } = quizzer;

        return res.status(200).send({
          _id,
          name,
          email,
          quizCreated,
          quizAttended,
          quizFlawless,
        });
      }
      return res.status(400).send("Invalid data given.");
    } catch (err) {
      console.log("Error", err);
      return res.status(400).send("Invalid data given.");
    }
  },
  findAll: async (req, res, next) => {
    try {
      const quizzers = await Takequiz.find();
      return res.status(200).send(quizzers);
    } catch (err) {
      console.log("Error", err);
      return res.status(400).send("DB Query failed.");
    }
  },
  incrementCreatedCount: async (user_id) => {
    try {
      const quzzier = await Takequiz.findByIdAndUpdate(user_id, {
        $inc: { quizCreated: 1 },
      });
      return quzzier;
    } catch (err) {
      console.log("Error", err);
      return false;
    }
  },
  incrementParticipationCount: async (user_id, flawless) => {
    try {
      const quizzer = await Takequiz.findById(user_id);

      quizzer.quizAttended++;
      quizzer.quizFlawless += flawless; // + 0 or 1

      const updatedTakequiz = await Takequiz.findByIdAndUpdate(user_id, quizzer);
      // const result1 = await Takequiz.findByIdAndUpdate(user_id, {
      //   $inc: { quizAttended: 1 },
      // });
      // const result2 = await Takequiz.findByIdAndUpdate(user_id, {
      //   $inc: { quizFlawless: flawless },
      // });
      return updatedTakequiz;
    } catch (err) {
      console.log("Error", err);
      return false;
    }
  },
};
module.exports = TakequizController;