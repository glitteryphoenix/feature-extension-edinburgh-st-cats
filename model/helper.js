// require("dotenv").config();
// const mysql = require("mysql2");

// module.exports = async function db(query) {
//   const results = {
//     data: [],
//     error: null
//   };
//   let promise = await new Promise((resolve, reject) => {
//     const DB_HOST = process.env.DB_HOST;
//     const DB_USER = process.env.DB_USER;
//     const DB_PASS = process.env.DB_PASS;
//     const DB_NAME = process.env.DB_NAME;

//     const con = mysql.createConnection({
//       host: DB_HOST || "127.0.0.1",
//       user: DB_USER || "root",
//       password: DB_PASS,
//       database: DB_NAME || "database",
//       multipleStatements: true
//     });

//     con.connect(function(err) {
//       if (err) throw err;
//       console.log("Connected!");

//       con.query(query, function(err, result) {
//         if (err) {
//           results.error = err;
//           console.log(err);
//           reject(err);
//           con.end();
//           return;
//         }

//         results.data = result;

//         con.end();
//         resolve(results);
//       });
//     });
//   });

//   return promise;
// };

require("dotenv").config();
const mysql = require("mysql2/promise");

// ✅ Create a connection pool (efficient connection management)
const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || "database",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ Keep the `results.data` structure
async function db(query, params = []) {
  try {
    const [rows] = await pool.execute(query, params);
    return { data: rows }; // ✅ Keep { data: ... } format
  } catch (err) {
    console.error("Database error:", err);
    throw err;
  }
}

module.exports = db;

