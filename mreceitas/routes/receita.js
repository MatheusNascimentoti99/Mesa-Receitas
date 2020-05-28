var express = require('express');
var Receita = require('../model/Receita')
var router = express.Router();
const receita = new Receita();
/* GET users listing. */
router.get('/:titulo', function(req, res, next) {
  receita.get(req.params, res);
});

router.get('/', (req, res, next) => {
  receita.getAll(res);
});

//Exemplo of JSON's body
// {
// 	"nickname": "zoro",
// 	"nome": "Adoilson Freitas",
// 	"nascimento": "05/05/2000"
// }
router.post('/insert', (req, res, next) => {
  receita.insert(req.body, res);
});

router.delete('/delete/:titulo', (req, res, next) => {
  receita.delete(req.params, res);
});

//Exemplo of JSON's body
// {
//   "oldTitulo" : "Ovvo flito",
//   "titulo": "Ovo frito",
//   "imagem": "",
//   "id_autor": null,
//   "tempo": 2,
//   "unidadeMedida": "minutos"
// }
router.put('/update', (req, res, next) => {
  receita.update(req.body, res);
});

module.exports = router;


module.exports = router;
