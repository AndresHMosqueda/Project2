let nodemailer = require('nodemailer')
let hbs = require('hbs')
let fs = require('fs')

let transport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.gmail,
    pass: process.env.gmailPass
  }
});

exports.sendWelcomeMail = function (name, email, confirmation) {

  return transport.sendMail({
    from: "⚽️",
    bcc: email,
    subject: "Hola " + name,
    text: `Hola ${name}! `
  })
    .then(resp => resp)
    .catch(e => console.log(e))

}