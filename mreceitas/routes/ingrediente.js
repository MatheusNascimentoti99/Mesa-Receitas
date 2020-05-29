var express = require('express');
var Ingrediente = require('../model/Ingrediente')
var router = express.Router();
const ingrediente = new Ingrediente();

/* GET users listing. */
router.get('/:id_receita', function(req, res, next) {
  ingrediente.getAll(req.params, res);
});

router.get('/receita/:id_receita/ingrediente/:nome', (req, res, next) => {
  ingrediente.get(req.params,res);
});

//Exemplo of JSON's body
// {
// 	"nickname": "zoro",
// 	"nome": "Adoilson Freitas",
// 	"nascimento": "05/05/2000"
// }
// router.post('/insert', (req, res, next) => {
//   ingrediente.insert(req.body, res);
// });

router.delete('/delete/:nome/receita/:id_receita', (req, res, next) => {
  ingrediente.delete(req.params, res);
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
// router.put('/update', (req, res, next) => {
//   ingrediente.update(req.body, res);
// });

module.exports = router;
