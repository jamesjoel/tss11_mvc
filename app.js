var express=require("express");
var app=express();

var parser = require("body-parser");


//.....ALL SEETING CODES......
app.set("view engine" , "ejs");


//.....ALL USE CODES......
app.use(parser());

app.use(express.static(__dirname+"/public"));



app.use(require("./config/routes"));



app.listen(process.env.PORT || 3000,function(){
console.log("server running properly...");
});


