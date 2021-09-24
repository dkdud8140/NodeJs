const express = require("express");
const router = express.Router();

const BBS = require("../models/tbl_bbs");

router.get("/push",(req,res)=>{
	const bbsVO = new BBS({
		b_date : "2021-09-23",
		b_time : "11:23:00",
		b_writer : "sk",
		b_subject : "no...",
		b_text : "mongDB Connect Study"
	})

	bbsVO.save((err)=>{
		if(err) {
			console.log(err);
		}
		res.send("OK");
	})
})

router.get("/push_find", async (req,res)=>{
	const bbsVO = {
		b_date : "2021-09-23",
		b_time : "12:23:00",
		b_writer : "sj",
		b_subject : "no...TT",
		b_text : "i hate this"
	};

	// await BBS.insertMany(bbsVO);
	await BBS.create(bbsVO);
	const result = await BBS.find({});
	await res.json(result);
})


router.post("/write", async (req,res)=>{
	await console.table(req.body);
	await BBS.create(req.body);
	const result = await BBS.find({});
	res.send(result);
});


module.exports = router;