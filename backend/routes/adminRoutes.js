const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Admin login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM admins WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0)
      return res.status(404).json({ message: "Admin tidak ditemukan" });

    if (results[0].password === password) {
      res.json({ message: "Login berhasil", admin: results[0] });
    } else {
      res.status(401).json({ message: "Password salah" });
    }
  });
});

module.exports = router;
