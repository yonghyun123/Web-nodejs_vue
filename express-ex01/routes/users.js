var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index2', {title:'fucking node.js'});
});

module.exports = router;
