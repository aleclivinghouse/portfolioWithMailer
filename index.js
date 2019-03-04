require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.post('/api/form', (req, res) => {
  console.log('this is the body');
  console.log(req.body);
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 25,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    })
    let mailOptions = {
      from: 'test@testaccount.com',
      to: process.env.EMAIL,
      replyTo: "test@testacount.com",
      subject: "New Message",
      text: req.body.message,
      html: htmlEmail
    }
    transporter.sendMail(mailOptions, (err, info) => {
      if(err){
        return console.log(err);
      }
      console.log('Message sent: %s', info.message)
      console.log('Message URL: %', nodemailer.getTestMessageUrl)
    })
  })
})

app.use(express.static('client/build'));
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
