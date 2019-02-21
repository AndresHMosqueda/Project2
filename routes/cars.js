const express = require("express");
const router = express.Router();
const Car = require("../models/Car")
const mongoose = require('mongoose')
const moment = require('moment');
const multer = require('multer');

const upload = multer({ dest: './public/uploads/' });
const bodyParser = require('body-parser')


router.get("/cars/mycars", (req, res) => {
      res.render("car/mycars");
});

router.post('/filter', (req, res, next) => {
  const {filter} = req.body
  Car.find({ cartype: { $regex: filter, $options: 'i' } })
  .then(cars => {
    res.render('car/cars', { cars })
  })
})
//nosrive
router.post('/sort', (req, res, next) => {
  const {sort} = req.body
  Car.find().sort({ priceperday: sort })
  .then(cars => {
    res.render('car/cars', {cars})
  })
})

router.post("/cars/listcar",  (req, res, next) => {
  console.log(req.body)
  const payload = {
    ...req.body,
    features: [
      req.body.BIKE,
      req.body.USB
    ]
  }
  const createCar = new Car({ ...payload });
  createCar.save()
    .then(auto => {
      res.render('car/new', {auto})
    })
    .catch(e => res.send(e))
})

router.post("/cars", async (req, res) => {
  let month = `${moment(req.body.startDate).format('MMMM DD YYYY')}`;
  const StartDate = `${month}, ${req.body.startTime}`;

  console.log(req.body.location)
  const carsByLocation = await Car.find({
    "location": { $regex: req.body.location, $options: 'i'},
    
    endDate: { $gte: StartDate }
  })
    .then(cars => {
      console.log(cars)
      try {
        if (carsByLocation.length <= 0) {
        }
        if (cars.length >= 1) {
        }
      } catch (error) {
      }
      return cars
    })
  if (carsByLocation.length <= 0) {
    res.render('car/nocars')
  } else {
    res.render('car/cars', { cars: { ...carsByLocation } })
  }

})

router.get("/cars/detail/:id", (req, res) => {
  console.log("OK")
  Car.findById(req.params.id)
    .then(cars => {
      res.render("car/detail", cars);
    })
    .catch(e => res.send(e))
});


router.get("/cars/detail/:id/checkout", (req, res) => {
  console.log("OK")
  Car.findById(req.params.id)
    .then(cars => {
      res.render("car/checkout", cars);
    })
    .catch(e => res.send(e))
});


router.post("/cars/detail/:id/checkout", (req, res) => {
  res.send("Booked! We will send you an email with the car details")
});

router.get("/cars/listcar", function (req, res, next) {
  Picture.find((err, pictures) => {
    res.render("customer-list/listcar");
  });
})



module.exports = router;
