let mongoose = require("mongoose");

// create a model class
let Car = mongoose.Schema(
  {
    _id:String,
    name: String,
    category: String,
    model: String,
    price: Number,
  },
  {
    collection: "cars",
  }
);

module.exports = mongoose.model("Car", Car);
