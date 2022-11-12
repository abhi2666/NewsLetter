// we are making a newsletter so as to collect user's email

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const app = express();

// In order to send Static file such as CSS, etc., you have to use a feature of express
app.use(express.static("Public")); //to send all static file inside public folder
app.use(bodyParser.urlencoded({extended : true}));
const PORT = 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + "/signup.html"); //this will deliver only HTML file (not CSS or BootStrap)
})

// to grab the data that user have enetered
app.post('/', function(req, res){
  //getting the data
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;
  console.log(firstName);
  console.log(lastName);
})

app.listen(3000, function(){
  console.log("Server started at port 3000");
})

//MailChimp APIKey --> fe541d2799895cd043adcf352e06210c-us21
//List ID --> 9052601520
