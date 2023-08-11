const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'testing_crud'
});

pool.getConnection()
    .then(connection => {
        console.log('Connected to MySQL database!');
        connection.release();
    })
    .catch(error => {
        console.error('Error connecting to MySQL database:', error);
    });

module.exports = pool;