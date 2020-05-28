var express = require('express');
var router = express.Router();
var Autor = require('../model/Autor');
const autor = new Autor();
/* GET users listing. */
router.get('/:nickname', function(req, res, next) {
  autor.get(req.params, res);
});

router.get('/', (req, res, next) => {
  autor.getAll(res);
});

//Exemplo of JSON's body
// {
// 	"nickname": "zoro",
// 	"nome": "Adoilson Freitas",
// 	"nascimento": "05/05/2000"
// }
router.post('/insert', (req, res, next) => {
  autor.insert(req.body, res);
});

router.delete('/delete/:nickname', (req, res, next) => {
  autor.delete(req.params, res);
});

//Exemplo of JSON's body
// {
//  "oldNickname": "zoro",
// 	"nickname": "zoro",
// 	"nome": "Adoilson Freitas",
// 	"nascimento": "05/05/2000"
// }
router.put('/update', (req, res, next) => {
  autor.update(req.body, res);
});

module.exports = router;
