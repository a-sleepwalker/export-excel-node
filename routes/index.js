var express = require('express');
var router = express.Router();

const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/export', function (req, res, next) {
  const source = path.resolve('public/images/exp.xlsx');
  const readStream = fs.createReadStream(source);

  res.setHeader('Content-disposition', 'attachment; filename=exp.xlsx');
  res.setHeader('Content-Type', 'application/octet-stream');

  readStream.pipe(res);
});

module.exports = router;
