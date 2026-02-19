const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const cardsRoutes = require("./routes/cards")


const { dbConnect } = require("./lib/dbConnect");
const connectDB = async (req, res, next) => {
  try {
    await dbConnect();
    next();
  } catch (error) {
    console.error("Database connection failed:", error);
    res
    .status(503)
    .json({
      message: "Service Unavailable: Could not connect to the database.",
    });
  }
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-with Content-Type,Accept, Authorization;"
  );
  next();
});



app.use("/api", connectDB, userRoutes,);
app.use("/api", cardsRoutes)

// app.get("/api/cards", (req, res) => {

// res.status(200).json(cards);
// });
app.get("/", (req, res) => {
  res.send("welcome to my Api");
});

if (process.env.NODE_ENV !== "production") {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
