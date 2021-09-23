const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bbs = Schema({
	b_date : String,
	b_time : String,
	b_witer : String,
	b_subject : String,
	b_text : String,
	b_comment : {
		c_date : String,
		c_time : String,
		c_writer : String,
		c_text : String,
	}
})


module.exports = mongoose.model("tbl_bbs",bbs);