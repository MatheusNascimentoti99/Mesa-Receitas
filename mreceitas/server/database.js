module.exports =  dataBase =  {
    //Conexão com Banco de Dados
    conectBD() {

        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '123456',
            database: 'mreceita'
        });
        connection.connect();
        return connection;
    },

    endBD(){
        connection.end();
    }
}
