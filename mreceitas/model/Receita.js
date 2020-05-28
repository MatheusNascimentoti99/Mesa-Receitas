const dataBase = require('../server/database');
module.exports = class Receita {
    constructor() {

    }
    getAll(res) {
        let sqlQry = 'SELECT * FROM receita'
        var connection = dataBase.conectBD();
        connection.query(sqlQry, function (error, results, fields) {
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
        let sqlQry = `SELECT * FROM receita where titulo = '${params.titulo}'`
        var connection = dataBase.conectBD();
        connection.query(sqlQry, function (error, results, fields) {
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
        var { titulo, tempo, id_autor, imagem, unidadeMedida, oldTitulo } = object
        let sqlQry = `INSERT INTO receita (titulo, tempo, id_autor, imagem, unidadeMedida) values(?, ?, ?, ?, ?) `;
        console.log(sqlQry);
        let values = [];
        values.push(titulo, tempo, id_autor, imagem, unidadeMedida);
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

    delete(param, res) {
        let sqlQry = `DELETE FROM receita where titulo = '${param.titulo}'`;
        console.log(sqlQry);
        var connection = dataBase.conectBD();
        connection.query(sqlQry, function (error, results, fields) {
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
        var { titulo, tempo, id_autor, imagem, unidadeMedida, oldTitulo } = object
        let sqlQry = `UPDATE receita set titulo = ?, tempo = ?, id_autor = ?, imagem = ?, unidadeMedida = ? where titulo = '${object.oldTitulo}'`;
        console.log(sqlQry);
        let values = [];
        values.push(titulo, tempo, id_autor, imagem, unidadeMedida);
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
}
