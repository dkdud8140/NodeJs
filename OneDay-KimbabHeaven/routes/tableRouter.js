const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;

const status = 'tview';
const { tbl_product, tbl_orders, tbl_num } = require("../models/index");

router.get("/",(req,res)=>{
	const tnum = req.query.tnum ;
	const tmenu = req.query.tmenu ;

	tbl_product.findAll({
		where : { p_code : {
			[Op.like]: tmenu + "%"
		} }
	}).then((result)=>{
		res.render('index',{ status : status, PRODUCT : result });
	})
})

router.post("/",(req,res)=>{
	const pcode = req.body.p_code;
	const tnum = req.query.tnum ;
	const tmenu = req.query.tmenu ;

	tbl_product.findByPk(pcode).then((result)=>{
		tbl_num.findOrCreate
	})
	// tbl_orders.create(presult).then((result) => {
	// 	res.redirect("/") });
	
})



module.exports = router;