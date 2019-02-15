const mongoose = require('mongoose')
const Cars = require('../models/Car')

mongoose.connect(`mongodb://localhost:27017/carProject`)

const cars = [
    {
      carmodel : "Mercedez Benz C200",
      owner: "Ava DuVernay",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://acs2.blob.core.windows.net/imgcatalogo/l/VA_64fae487668145188297dfa6a868d254.jpg",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705"
    },
    {
      carmodel : "Mazda 3",
      owner: "Roberts John",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://car-imagecars.bauersecure.com/pagefiles/84977/new_mazda_3_24.jpg",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705"
    },
    {
      carmodel : "Sienna XLE Limited 2019",
      owner: "Rob Colin",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://toyota.mx/sites/default/files/modelos/galeria/SIENNA1200.jpg",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705"
    },
    {
      carmodel : "Nissan Versa",
      owner: "Shawn Mendez",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://imagecars-na.ssl-imagecars-amazon.com/imagecars/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705"
    },
    {
      carmodel : "Toyota Prius 2019",
      owner: "Brad Pitt",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://www.hibridosyelectricos.com/media/hibridos/imagecars/2018/04/17/2018041710074024910.jpg",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705"
    },
    {
      carmodel : "Volkswagen Vento",
      owner: "Angelina Jolie",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://www.vw.com.mx/content/dam/vw-ngw/vw_pkw/importers/mx/autos/2018/vento/accesorios/vw-vento-front-showroom.jpg/_jcr_content/renditions/original.transform/max/img.jpg",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705"
    },
    {
      carmodel : "Nissan March",
      owner: "Mark Zuckemberg",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://www.nissan-cdn.net/content/dam/Nissan/cl/vehicles/march-sports/product_code/product_version/overview/nissan_new_march_conforto_40.jpg.ximg.s_12_h.smart.jpg",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705"
    },
    {
      carmodel : "BMW Serie 2 Coupe",
      owner: "Mark Cuban",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://www.cocheando.es/wp-content/uploads/2017/07/BMW-Serie2Coup-2017-881-1.jpg",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705"
    }
  ];

  Cars.create(cars)
  .then(cars=>{
      console.log(`Created ${cars.length} cars`)
      mongoose.connection.close()
  })