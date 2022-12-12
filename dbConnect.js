const mongoose = require("mongoose");

const URL = "mongodb+srv://Hrushi:Hrushi@cluster0.saxpa3p.mongodb.net/POS";

mongoose.connect(URL);

let connectionObj = mongoose.connection;

connectionObj.on("connected", () => {
  console.log("Mongo DB connection established.");
});

connectionObj.on("error", () => {
  console.log("Mongo DB connection failed.");
});
