var express = require("express");
var router = express.Router(); 

var student = require("../model/student");
var mongo = require("mongodb");

router.get("/", function(req,res){

	student.find(function(err, result){
		res.send(result);
	});	
	
});

router.post("/", function(req,res){

	student.insert(req.body, function(err, result){
		res.send(result.ops[0]);
	});	
	
});

router.put("/", function(req,res){

	var id = req.body._id;
	delete req.body._id;
	student.updateWhere({_id : mongo.ObjectId(id)}, req.body, function(err, result){
		res.send(result);
	});	
	
});


router.delete("/", function(req,res){

	
	student.remove({ _id : mongo.ObjectId(req.query.id)}, function(err, result){
		res.send(result);
	});	
	
});





module.exports=router;