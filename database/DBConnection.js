const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

function connect() {
  mongoose.connect(
    // "mongodb+srv://admin-cja:abc@cluster0.n1dg8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     "mongodb+srv://cja:cja@TakeQuiz.c1hcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    process.env.MONGO_URI,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("Connected to Database.")
  );
}

const DBConnection = {
  dbconnect: () => {
    try {
      connect();
    } catch (err) {
      console.log("Error connecting database!");
    }
  },
};

module.exports = DBConnection;
