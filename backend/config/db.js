const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cita_rasa_nusantara",
});

db.connect((err) => {
  if (err) console.error("❌ Gagal koneksi DB:", err);
  else console.log("✅ Terhubung ke MySQL Database");
});

module.exports = db;
