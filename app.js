const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv/config");
const nodemailer = require('nodemailer');

app.use(
  cors({
    exposedHeaders: ["auth-token"],
  })
);
app.use(express.json());

// serving static files from react
app.use(express.static(path.join(__dirname, "client", "build")));

// import routes
const routes = require("./app/routes");

// route middleware
app.use(routes);




// fallback for react routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "", "client", "build", "index.html"));
});
//const __dirname = path.resolve()
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '../client/build')))
}
var port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log("server is running at!",port)
);
