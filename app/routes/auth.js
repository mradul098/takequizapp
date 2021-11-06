const express = require("express");
const router = express.Router();
const AuthController = require("../controller/AuthController");
const TakequizController = require("../controller/TakequizController");
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mcqappmail@gmail.com',
    pass: process.env.password_mail
  }
});

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


router.post('/send', (req, res) => {

  console.log("ontp",req.body);
  var otp=req.body.otp;
  
console.log("isndie send")
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    host: 'test.de',
      port: 25,
      secure: false,
      name:'test',
    service: 'Gmail',
  
    auth: {
      user: 'mcqappmail@gmail.com',
      pass: process.env.password_mail
    }
  });

  var tomail=req.body.email;
  console.log(String( tomail));

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'mcqappmail@gmail.com', // sender address
      to: tomail, // list of receivers
      subject: 'otp ', // Subject line
      text: 'Hello your takequiz registration otp is '+req.body.otp, // plain text body
      // html: output // html body
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


router.post('/otp', (req, res) => {
  const data = req.body;
 console.log("inside router otp")
  // login(data.email).then(res1 => {
  //     res.json(res1);
  // });
  transporter.sendMail({
      from: 'mcqappmail@gmail.com',
      to: data.email,
      subject: 'Sending Email using Node.js',
      text: `Hi Your login otp is `+val
      // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
    }, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
  });
  res.json({"otp":val});
});

module.exports = router;
