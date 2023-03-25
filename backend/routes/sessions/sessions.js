var express = require('express');
var router = express.Router();

/* GET sessions listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a session resource');
});

module.exports = router;
