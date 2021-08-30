const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op;

const status = 'tview';
const { tbl_product, tbl_orders, tbl_num } = require("../models/index");


router.get("/",async function (req,res){
	const tnum = req.query.tnum ;
	const tmenu = req.query.tmenu ;
	let total = 0;
	let ocount = 0;
	
	let product = await tbl_product.findAll({
		where : { p_code : {[Op.like]: tmenu + "%"} 
		},
	}).then((result)=>{
		return result;
	})

	tbl_orders.findAll ({
		where : {o_table : tnum},
		include : [{model : tbl_product}],
	}).then((result)=> {
		for(let i = 0 ; i <result.length ; i ++ ) {
			total += result[i].o_tatal;
			ocount += result[i].o_count;
		}
		res.render('index',{ status : status, PRODUCT : product, ORDERS : result, TOTAL : total, OCOUNT : ocount});
	})
})

router.post("/", async function (req,res){
	const pcode = req.body.p_code;
	const tnum = req.query.tnum ;
	const tmenu = req.query.tmenu ;

	let ordernum = await tbl_num.findOne ({
		where : { n_table : tnum, n_pay : false },
	}).then((result)=>{ return result })

	if(!ordernum) {
		ordernum = await tbl_num.create({
					n_table : tnum, n_pway : 0,n_pay : false})
					.then((result)=>{return result})
	}
	tbl_product.findOne({
			where : {p_code : pcode}
		}).then((result)=>{
			tbl_orders.create({
				o_num : ordernum.n_seq,o_table : tnum,o_pcode : result.p_code,o_price : result.p_price,
				o_count : 1,o_tatal : result.p_price,o_buyer : false,tblProductPCode : result.p_code
			}).then(()=>{
				res.redirect(`/pos/tview/?tnum=${tnum}&tmenu=${tmenu}`)
			})
		});
})


module.exports = router;