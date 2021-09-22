var express = require('express');
var router = express.Router();

const {tbl_table_orders , sequelize }=require("../models/index");

/* GET home page. */
router.get('/', async (req, res, next) =>{

	const TABLE_COUNT = 12 ;
	const tables_layout = []; 

	const table_order_count = await tbl_table_orders.findAll({
		attributes : [
			"to_table_id",
			[sequelize.fn("count",sequelize.col("to_table_id")),"count"]
		],
		where: {to_pay : null},
		group:"to_table_id"
	});

	for(let index = 0 ; index < TABLE_COUNT ; index ++ ) {
	// tables_layout = tables_layout.map((table,index)=>{
		const result = await table_order_count.find((order)=>{
			return order.dataValues.to_table_id == index +1 ;
		})
	
		const table_data = {
			id:index +1,
			table_name : (index+1) + "번 테이블",
		};

		if(result) {
			table_data.order_count = result.dataValues.count;
		} else { 
			table_data.order_count = 0 ;
		}
		console.log(table_data);
		tables_layout.push(table_data);
	}

  res.render('index', { TABLES : tables_layout });

});

module.exports = router;
