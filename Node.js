const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

const db = mysql.createConnection({
    host: 'your_mysql_host',
    user: 'your_mysql_user',
    password: 'your_mysql_password',
    database: 'your_database_name',
});

db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.use(cors());
app.use(bodyParser.json());


app.post('/addEmployee', (req, res) => {
    const { id, name, position, department, salary, experience } = req.body;
    const sql = 'INSERT INTO employees (id, name, position, department, salary, experience) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [id, name, position, department, salary, experience];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting employee:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ success: true });
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
