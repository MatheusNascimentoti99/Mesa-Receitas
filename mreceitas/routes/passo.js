var express = require('express');
var router = express.Router();
var Passo = require('../model/Passo');
const passo = new Passo();

//Exemplo of JSON's body
// {
// 	"id_modo": 2,
// 	"id_receita": "Ovo frito",
// 	"texto": "botar na panela"
// }
router.post('/insert', (req, res, next) => {
  passo.insert(req.body, res);
});

router.delete('/delete/:numero/modoPreparo/:id_modo/receita/:id_receita', (req, res, next) => {
  passo.delete(req.params, res);
});

module.exports = router;
