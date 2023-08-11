const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'testing_crud'
});

pool.getConnection()
    .then(()=> {
        console.log('Connected to MySQL database!');
    })
    .catch(error => {
        console.error('Error connecting to MySQL database:', error);
    });

module.exports = pool;