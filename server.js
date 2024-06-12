// npm install dotenv
require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '111111',
    database: process.env.DB_DATABASE || 'mignetic',
    port: process.env.DB_PORT || 3307
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id', connection.threadId);
});

connection.query('SELECT 1 + 1 AS solution', (err, results, fields) => {
    if (err) {
        console.error('Error executing query:', err.stack);
        connection.end();
        return;
    }
    console.log('The solution is: ', results[0].solution);
    connection.end((err) => {
        if (err) {
            console.error('Error ending the connection:', err.stack);
        } else {
            console.log('Connection closed');
        }
    });
});
