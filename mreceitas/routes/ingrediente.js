var express = require('express');
var Ingrediente = require('../model/Ingrediente')
var router = express.Router();
const ingrediente = new Ingrediente();

/* GET ingrediente listing. */
// {
//   "code": "ok",
//   "results": [
//     {
//       "nome": "Ovo",
//       "quantidade": 2,
//       "unidade_medida": "ovos",
//       "detalhes": "muito bom, quase toda casa tem",
//       "id_receita": "Ovo frito",
//       "composto": null
//     }
//   ]
// }
router.get('/:id_receita', function(req, res, next) {
  ingrediente.getAll(req.params, res);
});
//Exemplo of JSON's return

// {
//   "code": "ok",
//   "results": {
//     "nome": "Ovo",
//     "quantidade": 2,
//     "unidade_medida": "ovos",
//     "detalhes": "muito bom, quase toda casa tem",
//     "id_receita": "Ovo frito",
//     "composicao": [
//       {
//         "composto": null,
//         "nomec": "Clara",
//         "quantidadec": 1,
//         "unidade_medidac": "",
//         "detalhesc": null
//       }
//     ]
//   }
// }
router.get('/receita/:id_receita/ingrediente/:nome', (req, res, next) => {
  ingrediente.get(req.params,res);
});

//Exemplo of JSON's body
// {
//   "nome": "Ovo",
//   "quantidade": 2,
//   "unidade_medida": "ovos",
//   "detalhes": "muito bom, quase toda casa tem",
//   "id_receita": "Ovo frito",
//   "composicao": [
//     {
//       "composto": null,
//       "nomec": "Clara",
//       "quantidadec": 1,
//       "unidade_medidac": "",
//       "detalhesc": null
//     }
//   ]
// }
router.post('/insert', (req, res, next) => {
  ingrediente.insert(req.body, res);
});

router.delete('/delete/:nome/receita/:id_receita', (req, res, next) => {
  ingrediente.delete(req.params, res);
});

router.delete('/delete/:nome/receita/:id_receita/composto/:composto', (req, res, next) => {
  ingrediente.deleteComposicao(req.params, res);
});

//Exemplo of JSON's body
// {
//   "nome": "Ovo",
//   "quantidade": 2,
//   "unidade_medida": "ovos",
//   "detalhes": "muito bom, quase toda casa tem",
//   "id_receita": "Ovo frito",
//   "composicao": [
//     {
//       "composto": null,
//       "nomec": "Clara",
//       "quantidadec": 1,
//       "unidade_medidac": "",
//       "detalhesc": null
//     }
//   ]
// }
router.put('/update', (req, res, next) => {
  ingrediente.update(req.body, res);
});

module.exports = router;
