const express = require("express");
const router = express.Router();
const Car = require("../models/Car")
const mongoose = require('mongoose')
const moment = require('moment');
const bodyParser = require('body-parser')

//delete car
router.get('/delete/:id', (req, res, next) => {
  const {id} = req.params
  console.log(id)
  Car.findByIdAndRemove(id)
    .then((car) => {
      res.redirect('car/cars', car)
    })
    .catch(err => {
      req.app.locals.error = err
    })
})

//edit car
router.get('/cars/mycars/edit/:id', (req, res, next) => {
  const {id} = req.params

  
  Car.findById(id)
  .then(cars => {
  
    const current = {
      action: `/cars/edit/${cars._id}`,
      submit: "Update",
      location: cars.location,
      cartype: cars.cartype,
    }    
    res.render("customer-list/update",  {current})
  })
  .catch(err => {
    res.send(err)
  })
})

//edit car
router.post('/cars/edit/:id', (req, res, next) => {
  const {id} = req.params
  // return res.json({ok:true, id})
  Car.findByIdAndUpdate(id, {...req.body}, {new: true})
  .then(() => {
  
    res.redirect(`/cars/detail/${id}`)
  })
  .catch(err => {
    res.send(err)
  })
})


//user list cars
router.get("/cars/mycars", (req, res) => {
  Car.find({user:req.user._id})
  .then(cars=>{
    console.log(cars)
    res.render("car/mycars", {cars});
  })
});

//filter by cartype
router.post('/filter', (req, res, next) => {
  const {filter} = req.body
  Car.find({ cartype: { $regex: filter, $options: 'i' } })
  .then(cars => {
    res.render('car/cars', { cars })
  })
})

//sort by price
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
      req.body.GPS,
      req.body.USB,
    ],
    user: req.user._id
  }
  const createCar = new Car(payload);
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
  Car.find((err, pictures) => {
    res.render("customer-list/listcar");
  });
})



module.exports = router;
