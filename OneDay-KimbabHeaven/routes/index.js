var express = require('express');
var router = express.Router();

const {tbl_product} = require("../models/index");
const {tbl_oders} = require("../models/index");
const {tbl_num} = require("../models/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
