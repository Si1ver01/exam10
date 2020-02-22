const mysql = require("mysql2/promise");

let connection = null;

const connectDB = async () => {
    connection = await mysql.createConnection({
        host: "localhost",
        user: "user",
        database: "news",
        password: "123"
    });
};

const disconnect = () => connection.end();

module.exports = { connectDB, disconnect, connection: () => connection };
