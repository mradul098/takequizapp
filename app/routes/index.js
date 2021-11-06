const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
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

router.post('/send', (req, res) => {
  

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'mail.YOURDOMAIN.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'mcqappmail@gmail.com',
      pass: process.env.password_mail
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'mradul098@gmail.com', // sender address
      to: 'mradul098@gmail.com', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
  });
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
