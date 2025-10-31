const express = require("express");
const router = express.Router();
const db = require("../config/db");

// POST buat pesanan baru
router.post("/", (req, res) => {
  const { user_id, total_price, status } = req.body;
  db.query(
    "INSERT INTO orders (user_id, total_price, status) VALUES (?,?,?)",
    [user_id, total_price, status || "diproses"],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({
        message: "Pesanan berhasil dibuat",
        orderId: result.insertId,
      });
    }
  );
});

module.exports = router;
