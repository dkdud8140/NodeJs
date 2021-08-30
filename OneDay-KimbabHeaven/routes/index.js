var express = require('express');
var router = express.Router();

const {tbl_product, tbl_orders, tbl_num} = require("../models/index");

/* GET home page. */
router.get('/', function(req, res, next) {
	// const tnum = req.body.tnum

	// tbl_orders.findAndCountAll  ({
	// 	where : {o_table : tnum}
	// }).then((result)=>{
	// 	console.log("index : ", result.count)
	// 	res.render('index', { title: 'Express', COUNT : result.count });
	// })	

	res.render('index', { title: 'Express',});
});


router.post("/pay", (req,res)=>{

	res.redirect(`/`)
})

module.exports = router;
