const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');


const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));


var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cvmaker'
});

conn.connect((err) => {
    if (!err) {
        console.log('database connected');
    } else {
        console.log('database not connected');
        console.log(err)
    }
})


app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('homepage');
})

app.get('/form', (req, res) => {
    res.render('builder');
})


app.listen(3000, () => {
    console.log(`server is running`);
})