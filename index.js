const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose .connect(process.env.MONGO_URI).then(() => {
    console.log("database connected successfully!!");
  }).catch((err) => {
    console.error(`an error occured:${err.message}`);
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', userRoutes);

app.get("/info", (req, res) => {
  console.log(`made a ${req.method} to ${req.url}`);
  res.send("this is information page!!");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
