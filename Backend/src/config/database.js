const mysql = require('mysql2/promise');

const DB = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'productos_reposteria'
});

module.exports = DB;
