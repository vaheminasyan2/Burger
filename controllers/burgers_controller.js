// import express
var express = require("express");

// import burger.js
var burger = require("../models/burger.js")

// create router
var router = express.Router();

// setup routes
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        //console.log(burgerObject);
        res.render("index", burgerObject)
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", "devoured", req.body.name, req.body.devoured, function (data) {
        res.json(data)
    });
});

router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne("devoured", req.body.devoured, req.params.id, function (data) {
        res.json(data)
    })
})


// export router
module.exports = router;