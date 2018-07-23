var express = require("express");
var router = express.Router();


router.use('/', require('../controller/index')); 
router.use('/stuWebservice', require('../controller/stuWebService')); 

router.use("*", function(req, res){
	res.send("<h1>Page Not Found</h1>");
});

module.exports=router;