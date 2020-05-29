const dataBase = require('../server/database');
module.exports = class Ingrediente {
    constructor() {

    }
    getAll(params, res) {
        let values = [];
        let sqlQry = 'SELECT * FROM ingrediente where id_receita = ? and composto is null';
        values.push(params.id_receita);
        var connection = dataBase.conectBD();
        connection.query(sqlQry, values, function (error, results, fields) {
            if (error) {
                res.json(error);
            }
            else {
                res.json({
                    code: 'ok',
                    results
                }
                );
            }
            connection.end();
            console.log('executou!');
        });
    }

    get(params, res) {
        let sqlQry = `SELECT composto.*, composicao.nome as nomec, composicao.quantidade as quantidadec, 
        composicao.unidade_medida as unidade_medidac, composicao.detalhes as detalhesc
         FROM ingrediente as composto join ingrediente as composicao
         on (composto.nome, composto.id_receita) = (composicao.composto, composicao.id_receita)
        where composto.nome = ? and composto.id_receita = ?`;
        let values = [params.nome, params.id_receita];
        var connection = dataBase.conectBD();
        connection.query(sqlQry, values, function (error, results, fields) {
            if (error) {
                res.json(error);
            }
            else {
                if (results != null) {
                    console.log('hehe aqui')
                    var object = {
                        nome: results[0].nome,
                        quantidade: results[0].quantidade,
                        unidade_medida: results[0].unidade_medida,
                        detalhes: results[0].detalhes,
                        id_receita: results[0].id_receita, composicao: []
                    }
                    results.forEach((element) => {
                        delete element.nome;
                        delete element.quantidade;
                        delete element.unidade_medida;
                        delete element.detalhes;
                        delete element.id_receita
                    });
                    object.composicao = results
                    results = object

                }
                res.json({
                    code: 'ok',
                    results
                }
                );
            }
            connection.end();
            console.log('executou!');
        });

    }
    // insert(object, res) {
    //     var { titulo, tempo, id_autor, imagem, unidadeMedida, oldTitulo } = object
    //     let sqlQry = `INSERT INTO receita (titulo, tempo, id_autor, imagem, unidadeMedida) values(?, ?, ?, ?, ?) `;
    //     console.log(sqlQry);
    //     let values = [];
    //     values.push(titulo, tempo, id_autor, imagem, unidadeMedida);
    //     var connection = dataBase.conectBD();
    //     connection.query(sqlQry, values, function (error, results, fields) {
    //         if (error) {
    //             res.json(error);
    //         }
    //         else {
    //             res.json({
    //                 code: 'ok',
    //                 results
    //             });
    //         }
    //         connection.end();
    //         console.log('executou!');
    //     });
    // }

    delete(params, res) {
        let { nome, id_receita } = params;
        let values = [nome, id_receita];
        let sqlQry = `DELETE FROM ingrediente where nome = ? and id_receita = ?`;
        console.log(sqlQry);
        var connection = dataBase.conectBD();
        connection.query(sqlQry, values, function (error, results, fields) {
            if (error) {
                res.json(error);
            }
            else {
                res.json({
                    code: 'ok',
                    results
                });
            }
            connection.end();
            console.log('executou!');
        });
    }

    // update(object, res) {
    //     var { titulo, tempo, id_autor, imagem, unidadeMedida, oldTitulo } = object
    //     let sqlQry = `UPDATE receita set titulo = ?, tempo = ?, id_autor = ?, imagem = ?, unidadeMedida = ? where titulo = '${object.oldTitulo}'`;
    //     console.log(sqlQry);
    //     let values = [];
    //     values.push(titulo, tempo, id_autor, imagem, unidadeMedida);
    //     var connection = dataBase.conectBD();
    //     connection.query(sqlQry, values, function (error, results, fields) {
    //         if (error) {
    //             res.json(error);
    //         }
    //         else {
    //             res.json({
    //                 code: 'ok',
    //                 results
    //             });
    //         }
    //         connection.end();
    //         console.log('executou!');
    //     });
    // }
}
