const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
connection.connect((error) => {
  if (error) {
    console.log("error : " + error);
    console.log("connection failed...!");
  } else {
    console.log("database Connected...!");
  }
});
module.exports = connection;
