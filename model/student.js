var connect = require("../config/connect");
var config = require("../config/db");

module.exports.insert = function(obj,cb) {
	connect.init(function(err,client){
	var database = client.db(config.dbName);
	database.collection("student").insert(obj,cb);

	});
};

module.exports.find = function(cb){
	connect.init(function(err,client){
	var database = client.db(config.dbName);
	database.collection("student").find().toArray(cb);
	});
};

module.exports.remove = function(obj,cb){
connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection('student').remove(obj,cb);
});
};

module.exports.findWhere=function(obj, cb){
connect.init(function(err, client){
var db = client.db(config.dbName);
db.collection('student').find(obj).toArray(cb);
});
};

module.exports.updateWhere=function(where, obj, cb){
console.log("..........."+where);
console.log(".+++++++++"+obj);
connect.init(function(err, client){
var db = client.db(config.dbName);
db.collection('student').update(where, {$set : obj}, cb);
});
};












// var getAll=[
// 		{
// 			category:"clothing"	
// 		},

// 		{
// 			category:"accessories"	
// 		},

// 		{
// 			category:"watches"	
// 		},
					
// 		{
// 			category:"home decor"
// 		},

// 		{
// 			category:"footwear"
// 		}
// ]
// module.exports = getAll;
