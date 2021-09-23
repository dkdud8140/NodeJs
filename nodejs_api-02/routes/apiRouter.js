const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
	res.send("OK");
})

router.get("/text",(req,res)=>{
	res.send("AAAA");
})

const mJSON ={
	j_name :"aaa",
	j_addr :"bbb",
	j_tel : "0100000"
}

router.get("/json",(req,res)=>{
	mJSON.j_age = 33; 
	res.json(mJSON);
})


module.exports = router; 