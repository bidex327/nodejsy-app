const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const cors = require ('cors')
app.use(cors());
require("dotenv").config();




app.use(function(req, res, next) {
  res.header("Access-Control-Alloww-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin-x-requested-with, Content-Type,Accept, Authorization;"
  )
  next()
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose .connect(process.env.MONGO_URI).then(() => {
  console.log("database connected successfully!!");
  }).catch((err) => {
    console.error(`an error occured:${err.message}`);
  });
  
  app.use('/api', userRoutes);
  
app.get('/', (req, res)=>{
  res.send('welcome to my Api')
})


const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`);
  });
}

module.exports = app
