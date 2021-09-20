const express = require("express");
const router = express.Router();

const { tbl_product } = require("../models/index")

router.get("/order/:table_id", (req,res)=>{
	const table_id = req.params.table_id;

	tbl_product.findAll ()
	.then({order : ["p_name","ASC"]})
	.then(result=>{
		console.log("왜 언디파인디드",result)
		res.render("order_view", {table_id, MENU:result});
	});
	
}) 

let menu_list = [];
router.get("/order/:table_id/input/:menu_id",(req,res)=>{
	const menu_id = req.params.menu_id;
	const table_id = req.params.table_id;

	tbl_product.findByPk(menu_id)
	.then(result =>{
		menu_list.push(result);
		res.json( { table_id, menu_list })
	})
})

module.exports = router;