// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the car controller
let carController = require("../controllers/car");

/* GET cars List page. READ  */
router.get('/',carController.list);

//  GET the Car Details page in order to add a new Car
router.get("/add",carController.showCarForm);

// POST process the Car  Details page and create a new Car  - CREATE
router.post("/add", carController.add);

// PUT process the Car  Details page and create a new Car  - UPDATE
router.post("/update", carController.update);

// GET the Car Details page in order to edit an existing Car
router.get("/:id", carController.getById);

// GET - process the delete
router.post("/delete", carController.delete);

module.exports = router;
