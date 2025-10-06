const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '',
    port: 3307
});

app.get('/ping', (req, res) => {
    res.json("Fut a backend");
    }   );

app.listen(3001, () => {
    console.log("A szerver a  3001-es porton fut");
    });