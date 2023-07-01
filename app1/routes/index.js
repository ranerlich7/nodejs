var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ran', function(req, res, next) {
  res.send('Ran is the king' );
});

module.exports = router;
