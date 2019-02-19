const express = require("express");
const router = express.Router();
const Car = require("../models/Car")
const mongoose = require('mongoose')
const moment = require('moment');
const multer  = require('multer');
const Picture = require('../models/picture');
const upload = multer({ dest: './public/uploads/' });

router.post("/cars", (req, res) => {
  let month = `${moment(req.body.startDate).format('MMMM DD YYYY')}`;
  const StartDate = `${month}, ${req.body.startTime}`;
  // 1- Buscar coche con formulario StartDate mayor al endDate de la base de datos
  // 2- Si no hay disponibles mandar mensaje en pantalla
  // BUSCAR CARROS DISPONIBLES
  Car.find({ endDate: { $gte: StartDate } })
    .then(cars => {
      let message;
      if (cars.length <= 0) {
        message = "No vehicles available"
      }

      if (cars.length >= 1) {
        message = `There are ${cars.length} cars available`
      }
      res.render('car/cars', { cars, message })
    })
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

// mostrar mensaje de pago y redireccionar para que cobre
res.send("Booked! We will send you an email with the car details")

// Enviar correos al owner del coche y al cliente que realizo la reservacion



//enviar la informacion a la base de datos



  // console.log("OK")
  // Car.findById(req.params.id)
  //   .then(cars => {
  //     res.render("car/checkout", cars);
  //   })
  //   .catch(e => res.send(e))
});

router.get("/cars/listcar", function (req, res, next)  {
  Picture.find((err,pictures) =>{
    res.render("customer-list/listcar");
  });
  })

router.post("/cars/listcar", function (req, res, next)  {
  Car.create(req.body)
    .then(auto => {
      res.render('', {message: "Tu post se creo"})
    })
    .catch(e => res.render('error', e))


  console.log(req.body)
  // Car.save();
  // Picture.find((err,pictures) =>{
  //   res.render("customer-list/listcar");
  // });
})

router.post("/upload", upload.single('photo'), (req, res) => {
  const pic = new Picture({
    name: req.body.name,
    path: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname
  });
  pic.save((err)=>{
    res.redirect("customer-list/listcar")
  })
});

module.exports = router;