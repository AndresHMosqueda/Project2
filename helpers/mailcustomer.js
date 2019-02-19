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

exports.sendCustomerEmail = function (name, email, confirmation) {

  return transport.sendMail({
    from: "⚽️",
    bcc: email,
    subject: "Hola " + name,
    text: `Hola ${name}!. Tu reservacion se ha completado exitosamente! `
  })
    .then(resp => resp)
    .catch(e => console.log(e))

}