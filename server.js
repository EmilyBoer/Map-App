
// We load the required packages
var express =require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = reauire("passport");

// Create our Express application
var app = express();

// connect to the mapit database

mongoose.connect('mongodb://localhost:27017/mapit');

// use the body-parser package in our application
// the body parser will let us parse the url-encoded http requests
// the "extended" syntax allows for rich objects and arrays to be encoded into the urlencoded format, allowing for a JSON-like experience with urlencoded

app.use(bodyParser.urlencoded({
extended:true
}));

// create our routers that will route the requests to the corresponding ressources
var router = express.Router();

//app use api
app.use('/api',router);

