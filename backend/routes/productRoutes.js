const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET semua produk
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

module.exports = router;
