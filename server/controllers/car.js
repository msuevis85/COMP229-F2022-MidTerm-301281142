const express = require("express");
let router = express.Router();
const crypto = require('crypto');
let Cars = require("../models/car");

module.exports = {

    /* List cars data bases*/
   list: async (req, res, next) => {
     try{
     const list = await Cars.find({});
     res.render("cars/list", { title: "list car", cars: list,});

     } catch(error) {
       console.log(error);
       res.redirect('/')
   }
    
   },

   add:(req, res, next) => {
       
       let name = req.body.name;
       let category = req.body.category;
       let model = req.body.model;
       let price = req.body.price;

      
      let car = new Cars({
           name: name,
           category:category,
           model: model,
           price:price,
       });

       car.save(function(err, data) {
        if(err) {
            console.log(err);
        }
        else {
            res.redirect("/cars");
        }
    });
        
   },

   getById:(req, res, next) => {

       let idFind = req.params.id;
       Cars.findOne({_id:idFind}, function (err, car) {
        if (err){
            console.log(err);
        }
        else{
            res.render("cars/details", { title: "Edit Car Form", car: car,});
        }

    });
     
   },

   update:(req, res, next) => {

    console.log(req.body);
    
    const id = req.body.id;
    let name = req.body.name;
    let category = req.body.category;
    let model = req.body.model;
    let price = req.body.price;

   
   const car =({
        name: name,
        category:category,
        model: model,
        price:price,
    }); 

    Cars.updateOne({_id:id},car,function(error, data) {
     if(error) {
         console.log(error);
     }
     else {
         res.redirect("/cars");
     }
 });
     
},

   showCarForm:(req, res, next) => { 
      res.render("cars/add", {
        title: "Car Registraction Form",  
        car: new Cars({
            id: "",
            name: "",
            category:"",
            model: "",
            price:"",
        }),
      });

   },


   delete: (req, res, next) => { 

    console.log(req.body)
    

    Cars.deleteMany({ "$or": [ 
                                {"name" : req.body.name},
                                { '$and' : [ {"price": {$gt: req.body.lessprice}}, {"price": {$lt: req.body.gtprice}} ] } 
                             ] 
                        } ,function(error, data) {
        if(error) {
            console.log(error);
        }
        else {
            res.redirect("/cars");
        }
    });

   }



 }