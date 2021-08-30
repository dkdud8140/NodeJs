const express = require("express");
const router = express.Router();

// JS, nodejs에서 날짜 시간을 취급하는
// 가장 많이 사용되는 middleware 
const moment = require("moment");

const { tbl_bbs, tbl_reply } = require("../models/index");

// 설정된 /write get는
// URL에서 localhost:3000/bbs/write 요청할 때
// 응답할 함수
router.get("/write",(req, res)=>{
    const BBS = {
        b_date : moment().format("YYYY[-]MM[-]DD"),
        b_time : moment().format("HH:mm:ss"),
    }
    res.render("write",{ BBS } );
})

router.post("/write",(req,res)=>{
    //form 을 통해서 POST로 전송되어온 데이터는
    // req.body에 담겨서 온다
    tbl_bbs.create(req.body).then((result)=> res.redirect("/"));
})



router.get("/detail",(req,res)=>{
	const b_id = req.query.b_id;

	tbl_bbs.findOne({
		where:{b_id},
		include: {model: tbl_reply},
	}).then(result=>{
		res.render("detail", {BBS:result});
	});

});



router.get("/delete",(req,res)=>{
	const b_id = req.query.b_id;
	tbl_bbs.destroy({
		where : { b_id },
	}).then(()=>{
		res.redirect("/");
	});
});

router.get("/update",(req,res)=>{
	const b_id = req.query.b_id;
	
	tbl_bbs.findByPk(b_id).then((result)=> {
		res.render("write", { BBS : result});
	});
});

router.post("/update",(req,res)=>{
	const b_id = req.query.b_id;
	req.body.b_id = b_id;
	tbl_bbs.update(req.body, {where : { b_id }} ).then((result)=>{
		res.redirect("/");
	});
});

module.exports = router;