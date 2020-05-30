var express = require('express');
var router = express.Router();
var ModoPreparo = require('../model/ModoPreparo');
const modoPreparo = new ModoPreparo();

/* GET modoPreparo listing. */
//Exemplo JSON getModoPreparo
// {
//   "code": "ok",
//   "results": {
//     "nome": "Quebrar ovo",
//     "descricao": "Muito fácil",
//     "numero": 1,
//     "id_receita": "Ovo frito",
//     "composicao": [
//       {
//         "numeroPasso": 1,
//         "texto": "Pegue uma colher"
//       },
//       {
//         "numeroPasso": 2,
//         "texto": "Divida o ovo no meio"
//       },
//       {
//         "numeroPasso": 3,
//         "texto": "Coloque na frijideira já com óleo"
//       }
//     ]
//   }
// }
router.get('/receita/:id_receita/numero/:numero', function(req, res, next) {
  modoPreparo.get(req.params, res);
});

//Exemplo JSON getAllModoPreparo
// {
//   "code": "ok",
//   "results": [
//     {
//       "id_receita": "Ovo frito",
//       "nome": "Quebrar ovo",
//       "descricao": "Muito fácil",
//       "numero": 1
//     },
//     {
//       "id_receita": "Ovo frito",
//       "nome": "Fritar ovo",
//       "descricao": "Cuitado para não se queimar",
//       "numero": 2
//     }
//   ]
// }
router.get('/receita/:id_receita', (req, res, next) => {
  modoPreparo.getAll(req.params, res);
});

//Exemplo of JSON's body
// {
// 	"nickname": "zoro",
// 	"nome": "Adoilson Freitas",
// 	"nascimento": "05/05/2000"
// }
router.post('/insert', (req, res, next) => {
  modoPreparo.insert(req.body, res);
});

// router.delete('/delete/:nickname', (req, res, next) => {
//   modoPreparo.delete(req.params, res);
// });

// //Exemplo of JSON's body
// // {
// //  "oldNickname": "zoro",
// // 	"nickname": "zoro",
// // 	"nome": "Adoilson Freitas",
// // 	"nascimento": "05/05/2000"
// // }
// router.put('/update', (req, res, next) => {
//   modoPreparo.update(req.body, res);
// });

module.exports = router;
