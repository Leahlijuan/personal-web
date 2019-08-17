var express = require("express");
var app = express();
var path = require('path');
app.get('/', function (req, res) {
    res.render("homepage")
    // res.send('Hello World');
 });
 app.get('/resume', function(req, res) {
    res.render("resume")
 });
 app.get('/aboutme', function(req, res) {
    res.render("aboutme")
 })
 app.get('/myprojects', function(req, res) {
    res.render("myprojects")
 })
 app.get('/contact', function(req, res) {
    res.render("contact")
 })
 
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.listen('3000', process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
 });