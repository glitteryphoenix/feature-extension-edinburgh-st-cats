require("dotenv").config();
const mysql = require("mysql2");
const fs = require("fs");

const DB_HOST = process.env.DB_HOST || "127.0.0.1";
const DB_USER = process.env.DB_USER || "root";
const DB_PASS = process.env.DB_PASS || ""; 
const DB_NAME = process.env.DB_NAME || "street_cats_db"; 

const con = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  multipleStatements: true
});

con.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  }
  console.log("✅ Connected to MySQL!");

  fs.readFile(__dirname + "/init_db.sql", "utf8", (err, sql) => {
    if (err) {
      console.error("❌ Failed to read SQL file:", err.message);
      con.end();
      return;
    }

    con.query(sql, (err) => {
      if (err) {
        console.error("❌ Table creation failed:", err.message);
      } else {
        console.log("✅ Tables created successfully!");
      }
      
      console.log("Closing connection...");
      con.end();
    });
  });
});

// Export the connection for use in other files
module.exports = con;


//Left off here!!!!

