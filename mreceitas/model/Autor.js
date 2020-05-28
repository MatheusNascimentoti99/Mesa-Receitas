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
}
