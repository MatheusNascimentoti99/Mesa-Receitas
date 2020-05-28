const dataBase = require('../server/database');
module.exports = class Autor {
    constructor() {

    }
    getAll(res) {
        let sqlQry = 'SELECT * FROM autor'
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
        let sqlQry = `INSERT INTO autor (nickname, nome, nascimento) values `;
        sqlQry += `('${object.nickname}', '${object.nome}', '${object.nascimento}')`

        var connection = dataBase.conectBD();
        connection.query(sqlQry, function (error, results, fields) {
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

    delete(param, res) {
        let sqlQry = `DELETE FROM autor where nickname = '${param.nickname}'`;
        console.log(sqlQry);
        var connection = dataBase.conectBD();
        connection.query(sqlQry, function (error, results, fields) {
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
        var {nome, nickname, nascimento} = object
        let sqlQry = `UPDATE autor set nome = ?, nickname = ?, nascimento = ? where nickname = '${object.oldNickname}'`;
        console.log(sqlQry);
        let values = [];
        values.push(nome, nickname, nascimento);
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
