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
         FROM ingrediente as composto left join ingrediente as composicao
         on (composto.nome, composto.id_receita) = (composicao.composto, composicao.id_receita)
        where composto.nome = ? and composto.id_receita = ?`;
        let values = [params.nome, params.id_receita];
        var connection = dataBase.conectBD();
        connection.query(sqlQry, values, function (error, results, fields) {
            if (error) {
                res.json(error);
            }
            else {
                if (results.length > 0) {
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
                console.log('aqui 2')
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
        var { nome, quantidade, unidade_medida, detalhes, id_receita, composto, composicao } = object
        let sqlQry = `INSERT INTO ingrediente (nome, quantidade, unidade_medida, detalhes, id_receita, composto) values(?, ?, ?, ?, ?, ?) `;
        console.log(sqlQry);
        let values = [];
        values.push(nome, quantidade, unidade_medida, detalhes, id_receita, composto, composicao);
        var connection = dataBase.conectBD();
        connection.query(sqlQry, values, function (error, results, fields) {
            if (error) {
                res.json(error);
            }
            else {

                if (Array.isArray(composicao)) {
                    let fail = false
                    composicao.forEach((element, index) => {
                        var { nomec, quantidadec, unidade_medidac, detalhesc} = element
                        let sqlQry = `INSERT INTO ingrediente (nome, quantidade, unidade_medida, detalhes, id_receita, composto) values(?, ?, ?, ?, ?, ?) `;
                        console.log(sqlQry);
                        let values = [];
                        values.push(nomec, quantidadec, unidade_medidac, detalhesc);
                        values.push(object.id_receita, object.nome) //Foreign key da composição
                        connection.query(sqlQry, values, function (error, results, fields) {
                            if (error) {
                                if (!fail)
                                    res.json(error)
                                fail = true
                            } else {
                                if (index == composicao.length - 1) {

                                    res.json({
                                        code: 'ok',
                                        results
                                    });
                                }
                            }
                        });
                    });
                } else {
                    res.json({
                        code: 'ok',
                        results

                    });
                }


            }
            connection.end();
            console.log('executou!');
        });
    }

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

    deleteComposicao(params, res) {
        let { composto, nome, id_receita } = params;
        let values = [composto, nome, id_receita];
        let sqlQry = `DELETE FROM ingrediente where composto = ? and nome = ? and id_receita = ?`;
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

    update(object, res) {
        var { nome, quantidade, unidade_medida, detalhes, id_receita, composicao } = object
        let sqlQry = `UPDATE ingrediente set quantidade = ?, unidade_medida = ?, detalhes = ? where nome = ? and id_receita = ?`;
        console.log(sqlQry);
        let values = [];
        values.push(quantidade, unidade_medida, detalhes, nome, id_receita);
        var connection = dataBase.conectBD();
        connection.query(sqlQry, values, function (error, results, fields) {
            if (error) {
                res.json(error);
            }
            connection.end();
            console.log('executou!');
        });
        if (Array.isArray(composicao)) {
            let fail = false
            composicao.forEach((element, index) => {
                var { nomec, quantidadec, unidade_medidac, detalhesc, oldNomec} = element
                let sqlQry = `UPDATE ingrediente set nome = ?, quantidade = ?, unidade_medida = ?, detalhes = ?  where nome = ? and id_receita = ? and composto = ?`;
                console.log(sqlQry);
                let values = [];
                values.push(nomec, quantidadec, unidade_medidac, detalhesc, oldNomec);
                values.push(object.id_receita, object.nome) //Foreign key da composição
                connection.query(sqlQry, values, function (error, results, fields) {
                    if (error) {
                        if (!fail)
                            res.json(error)
                        fail = true
                    } else {
                        if (index == composicao.length - 1) {

                            res.json({
                                code: 'ok',
                                results
                            });
                        }
                    }
                });
            });


        } else {
            res.json({
                code: 'ok',
                results
            });
        }

    }
}
