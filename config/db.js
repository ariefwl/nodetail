const mysql = require("mysql");
const conn = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_mahasiswa",
    charset: "utf8mb4",
    timezone: "+07:00"
})

conn.getConnection(error => {
    if (error) throw error
    console.log('Database terhubung !')
})

module.exports = conn;