// require expresss
var express = require ("express");

// setup port
var PORT = process.env.PORT || 3030

// setup exress app
var app = express();

// setup to serve css and images from public directory 
app.use(express.static("public"));

// setup data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// setup handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
    
// importing routes and gving the server accss to them
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Starting the server
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT)
});