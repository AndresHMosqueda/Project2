const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')


router.get('/careers', (req, res) => {
  res.render('Aboutus/careers')
})

router.get('/Makemoney', (req, res) => {
  res.render('Aboutus/Makemoney')
})

router.get('/Assistance', (req, res) => {
  res.render('FAQs/Assistance')
})

router.get('/trustAndSafety', (req, res) => {
  res.render('FAQs/trustAndSafety')
})

router.get('/economyCar', (req, res) => {
  res.render('Rent a car/economyCar')
})

router.get('/luxuryCar', (req, res) => {
  res.render('Rent a car/luxuryCar')
})

router.get('/policies', (req, res) => {
  res.render('Terms and Conditions/policies')
})

router.get('/termsOfUse', (req, res) => {
  res.render('Terms and Conditions/termsOfUse')
})

router.get('/caRentalMiami', (req, res) => {
  res.render('Top Destinations/caRentalMiami')
})

router.get('/caRentalSF', (req, res) => {
  res.render('Top Destinations/caRentalSF')
})

module.exports = router;
