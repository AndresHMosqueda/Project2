const mongoose = require('mongoose')
const Cars = require('../models/Car')

mongoose.connect(`mongodb://andres9:123pingui@cluster0-shard-00-00-mbwni.mongodb.net:27017,cluster0-shard-00-01-mbwni.mongodb.net:27017,cluster0-shard-00-02-mbwni.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`)

const cars = [
    {
      carmodel : "Mercedez Benz C200",
      owner: "Ava DuVernay",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://acs2.blob.core.windows.net/imgcatalogo/l/VA_64fae487668145188297dfa6a868d254.jpg",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705",
      startDate: "February 17th 2019, 4:30:26 pm", 
      endDate: "February 24th 2019, 4:30:26 pm",
      email: "andreshm94@gmail.com"
    },
    {
      carmodel : "Mazda 3",
      owner: "Roberts John",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_06e3e9496f9b437ab874d961ff2a431b.jpg",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705",
      startDate: "February 16th 2019, 4:30:26 pm", 
      endDate: "February 20th 2019, 4:30:26 pm",
      email: "aandres827@gmail.com",
    },
    {
      carmodel : "Sienna XLE Limited 2019",
      owner: "Rob Colin",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://toyota.mx/sites/default/files/modelos/galeria/SIENNA1200.jpg",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705",
      startDate: "December 20th 2018, 4:30:26 pm",
      endDate: "February 29th 2019, 4:30:26 pm"
    },
    {
      carmodel : "Nissan Versa",
      owner: "Shawn Mendez",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://14794cb074070f2635be-909c741dfbd93d74800510af85411879.ssl.cf1.rackcdn.com/3N1CN7APXHL888311/ed958007365366df2e73ac0b6294206f.jpg",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705",
      startDate: "February 23th 2019, 4:30:26 pm", 
      endDate: "February 24th 2019, 4:30:26 pm"
    },
    {
      carmodel : "Toyota Prius 2019",
      owner: "Brad Pitt",
      features: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
      imagecar: "https://www.topgear.es/sites/topgear.es/public/styles/main_element/public/dc/fotos/Toyota-Prius_2016_C01.jpg?itok=fM2k_rlY",
      description: "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
      priceperday: "705",
      startDate: "February 17th 2019, 4:30:26 pm", 
      endDate: "February 24th 2019, 4:30:26 pm",
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