var express = require('express');
var router = express.Router();
var Autor = require('../model/Autor');
const autor = new Autor();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', (req, res, next) => {
  autor.getAll(res);
});
router.post('/insert', (req, res, next) => {
  autor.insert(req.body, res);
});

module.exports = router;
