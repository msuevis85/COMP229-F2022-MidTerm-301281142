// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    cars: "",
  });
});

module.exports = router;
