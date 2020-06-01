const dataBase = require('../server/database');
module.exports = class Passo {

    constructor() {

    }

    insert(object, res) {
        let { id_receita, id_modo, texto } = object;
        let values = [id_receita, id_modo, texto];
        let sqlQry = `INSERT INTO passo (id_receita, id_modo, texto) values (?, ?, ?)`;
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

    delete(params, res) {
        let { id_receita, id_modo, numero } = params;
        let values = [id_receita, id_modo, numero];
        let sqlQry = `DELETE FROM passo where id_receita = ? and id_modo = ? and numero = ?`;
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

}
