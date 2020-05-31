const dataBase = require('../server/database');
module.exports = class ModoPreparo {

    constructor() {

    }
    get(params, res) {
        let { id_receita, numero } = params;
        let values = [id_receita, numero];
        let sqlQry = `SELECT modoPreparo.*, 
            passo.numero as numeroPasso, passo.texto 
            FROM modoPreparo left join passo on modoPreparo.numero = passo.id_modo
              where modoPreparo.id_receita = ? and modoPreparo.numero = ?`
        var connection = dataBase.conectBD();
        connection.query(sqlQry, values, function (error, results, fields) {
            if (error) {
                res.json(error);
            }
            else {
                if (results.length > 0) {
                    console.log('It is array')
                    var object = {
                        nome: results[0].nome,
                        descricao: results[0].descricao,
                        numero: results[0].numero,
                        id_receita: results[0].id_receita,
                        composicao: []
                    }
                    results.forEach((element) => {
                        delete element.nome;
                        delete element.descricao;
                        delete element.numero;
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

    getAll(params, res) {
        let sqlQry = 'SELECT * FROM modoPreparo where id_receita = ?'
        var connection = dataBase.conectBD();
        connection.query(sqlQry, params.id_receita, function (error, results, fields) {
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

    insert(object, res) {
        let {id_receita, nome, descricao} = object;
        let sqlQry = `INSERT INTO modoPreparo (id_receita, nome, descricao) values (?, ?, ?)`;
        let values = [id_receita, nome, descricao];
        var connection = dataBase.conectBD();
        connection.query(sqlQry, values, function (error, results, fields) {
            if (error) {
                res.json(error);
            }
            else {
                res. json({
                    code: 'ok',
                    results
                });
            }
            connection.end();
            console.log('executou!');
        });
    }

    delete(params, res) {
        let {numero, id_receita} = params
        let sqlQry = `DELETE FROM modoPreparo where numero = ? and id_receita = ?`;
        let values = [numero, id_receita];
        console.log(sqlQry);
        var connection = dataBase.conectBD();
        connection.query(sqlQry, values, function (error, results, fields) {
            if (error) {
                res.json(error);
            }
            else {
                res. json({
                    code: 'ok',
                    results
                });
            }
            connection.end();
            console.log('executou!');
        });
    }

    update(object, res){
        var {nome, descricao, oldNome, id_receita} = object
        let sqlQry = `UPDATE modoPreparo set nome = ?, descricao = ? where nome = ? and id_receita = ?`;
        console.log(sqlQry);
        let values = [nome, descricao, oldNome, id_receita];
        var connection = dataBase.conectBD();
        connection.query(sqlQry,values, function (error, results, fields) {
            if (error) {
                res.json(error);
            }
            else {
                res. json({
                    code: 'ok',
                    results
                });
            }
            connection.end();
            console.log('executou!');
        });
    }
}
