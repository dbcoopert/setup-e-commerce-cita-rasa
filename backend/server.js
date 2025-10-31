const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT, () =>
  console.log(`Server berjalan di http://localhost:${PORT}`)
);