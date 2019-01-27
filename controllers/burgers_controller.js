// import express
var express = require("express");

// import burger.js
var burger = require("../models/burger.js")

// create router
var router = express.Router();

// setup routes
router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject)
    });
});


// export router
module.exports = router;