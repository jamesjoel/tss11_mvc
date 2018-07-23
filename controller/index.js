var express = require("express");
var router = express.Router(); 



router.get("/", function(req,res){

	var pagedata={pagename:"index/index",title:"home page"};
	res.render("layout",pagedata);
});





module.exports=router;