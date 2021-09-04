const express = require("express");
const router = express.Router();

const { tbl_product } = require("../models/index")

router.get("/order/:table_id",(req,res)=>{
	const table_id = req.params.table_id;

	tbl_product.findAll (
		{ order: ["p_name", "ASC"] }
	).then(result=>{
		res.render("order_view", {table_id, MENU:result.row});
	});
	
}) 

router.get("/order/:table_id/input/:menu_id",(req,res)=>{
	const menu_id = req.params.menu_id;
	const table_id = req.params.table_id;

	const menu = { 
		table_id,
		menu_id,
		menu_name: "1000원김밥",
		menu_price: 1000,
	};
	res.json(menu);
})

module.exports = router;