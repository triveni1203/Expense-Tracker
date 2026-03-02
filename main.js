const express = require('express');
const sql=require('sql2');
const app = express();
const PORT = 3000;
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'yourdatabase'
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

module.exports = connection;
app.get('/', (req, res) => {
    res.send('Hello, world! This is your Express server.');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});