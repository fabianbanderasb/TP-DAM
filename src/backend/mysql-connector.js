//=======[ Settings, Imports & Data ]==========================================

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'mysql-server',
    port     : '3306',
    user     : 'root',
    password : 'userpass',
    database : 'DAM'
});

//=======[ Main module code ]==================================================

connection.connect(function(err) {
    if (err) {
        console.error('Error al conectarse a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado a la base de datos bajo la ID del hilo: ' + connection.threadId);
});

module.exports = connection;

//=======[ End of file ]=======================================================
