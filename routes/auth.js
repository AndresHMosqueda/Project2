const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
let {sendWelcomeMail} = require('../helpers/mailer')
const Car = require("../models/Car")

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

function isLogged(req, res, next) {
  if (req.isAuthenticated()) return next()
  return res.redirect('/login')
}

router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username",  (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    const hashUser = bcrypt.hashSync(username, salt);
    const confirmationArr = hashUser.split('/')
    const confirmationCode = confirmationArr.join('')

    const newUser = new User({
      username,
      password: hashPass,
      email,
      confirmationCode
    });

    newUser.save()
      .then(() => {
        sendWelcomeMail(username, email, confirmationCode)
        res.redirect("/");
      })
      .catch(err => {
        res.render("auth/signup", { message: "Something went wrong" });
      })
  });
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.get('/confirmation', (req, res) => {
  res.render('/auth/confirmation')
})

router.get("/confirm/:confirmationCode", (req, res, next) => {
  const confirmationCode = req.params.confirmationCode;

  User.findOneAndUpdate({ confirmationCode }, { $set: { status: "Active" } }, { new: true })
    .then((confirmedUser) => {

      res.render('auth/confirmation', confirmedUser)
    })
    .catch(e => (e))
})

module.exports = router;
