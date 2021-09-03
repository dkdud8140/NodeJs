/**
 * mongoose를 사용하여 mongoDB 핸들링 하기
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bbs = Schema({
	b_date : String,
	b_time : String,
	b_writer : String,
	b_subject : String,
	b_text : String,
	b_comment : {
		c_date : String,
		c_time : String,
		c_writer : String,
		c_text : String,
	}
})

// tbl_bbs라는 Collection을 생성할 준비를 하라
module.exports = mongoose.model("tbl_bbs",bbs)