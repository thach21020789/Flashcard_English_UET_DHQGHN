require('dotenv').config();
import mysql from "mysql2";

let connection = mysql.createConnection({
    host: "localhost",
    port: "3307",
    user: "root",
    password: '',
    database: "test-pro"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});

module.exports = connection;
