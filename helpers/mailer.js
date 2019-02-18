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

   transport.sendMail({
    from: "⚽️",
    bcc: email,
    subject: "Bienvenido " + name,
    text: `Hola ${name}! Bienvenido a nuestra ironApp. Confirma aquí: https://murmuring-refuge-64958.herokuapp.com/auth/confirm/${confirmation}`
  })
    .then(resp => resp)
    .catch(e => console.log(e))

}