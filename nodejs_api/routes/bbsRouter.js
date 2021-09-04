const express = require("express");
const router = express.Router();
const BBS = require("../models/tbl_bbs");

router.get("/push",(req,res)=>{
	const bbsVO = new BBS( {
		b_date : '2021-09-03',
		b_time : '11:28:00',
		b_writer : 'ff',
		b_subject : 'fffff',
		b_text : 'bbbbbbb',
	})

	bbsVO.save((err)=>{
		if(err){
			console.log(err);
		}
		res.send("OKKK")
	})

})

router.get("/push_find", async (req,res)=>{

	const bbsVO = {
		b_date : "2021-09-03",
		b_time : "11:43:00",
		b_writer : "ddd",
		b_subject : "ddd",
		b_text : "vvvvvv",

	}

	//await BBS.insertMany(bbsVO)
	await BBS.create(bbsVO)
	const result = await BBs.find({})
	await res.json(result);
})


module.exports = router;