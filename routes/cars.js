const express = require("express");
const router = express.Router();
const Car = require("../models/Car")
const mongoose = require('mongoose')
const moment = require('moment');

router.post("/cars", (req, res) => {

  let month = `${moment(req.body.startDate).format('MMMM DD YYYY')}`;
  const StartDate = `${month}, ${req.body.startTime}`;
  
  // 1- Buscar coche con formulario StartDate mayor al endDate de la base de datos
  // 2- Si no hay disponibles mandar mensaje en pantalla

// BUSCAR CARROS DISPONIBLES
  Car.find({endDate: {$gte: StartDate}})
    .then(cars => {

      let message;

      if(cars.length <= 0){
        message = "No vehicles available"
      }

      if(cars.length >= 1){
        message = `There are ${cars.length} cars`
      }
      res.render('car/cars', { cars,message })
    })
})

router.get("/cars/detail/:id", (req, res) => {
  console.log("OK")
  Car.findById(req.params.id)
    .then(cars => {
      // res.locals.detail = movies;
      res.render("car/detail", cars);
    })
    .catch(e => res.send(e))
});

module.exports = router;