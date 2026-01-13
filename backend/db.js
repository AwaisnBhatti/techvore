const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // same as MySQL Workbench
  password: "awais",
  database: "support_db",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

module.exports = db;
