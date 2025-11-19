const mysql = require('mysql2')
const con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "esr",
    // port: '3306'
})
con.connect((err) => {

    if (err) throw err;
    console.log("database is connected")
})
module.exports = con