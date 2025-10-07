const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fogado',
    port: 3307
});


app.get("/fogado", (req, res) => {
    const sql = "SELECT * FROM `szobak`";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result)
    })
});


app.get("/kihasznaltsag", (req, res) => {
    const sql = "SELECT szoba, COUNT(vendeg) AS vendegek, SUM(DATEDIFF(tav, erk)) AS vendegejszakak FROM foglalasok GROUP BY szoba ORDER BY vendegejszakak ASC, vendegek ASC;";
    db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result)
    })
});


app.get("/foglaltsag", (req, res) => {
    const sql = `
        SELECT vnev AS név, erk AS érkezés, tav AS távozás  
        FROM foglalasok 
        JOIN vendegek  ON vendeg = vsorsz
        WHERE szoba IN (SELECT szoba FROM szobak) 
        ORDER BY vnev ASC;
    `;
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});


app.get('/ping', (req, res) => {
    res.json("Fut a backend");
    }   
);


app.listen(3001, () => {
    console.log("Fut a szerver 3001-es porton");
    
});