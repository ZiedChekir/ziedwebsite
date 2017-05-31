var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/profil', function(req, res, next) {
  res.render('profil');
});





module.exports = router;
