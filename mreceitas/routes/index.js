var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/teste', function (req, res, next) {
  res.render('index', { title: 'Legal' });
});
router.get('/clientes', (req, res) => {
  conectBD('SELECT * FROM receita', res);
});

module.exports = router;
