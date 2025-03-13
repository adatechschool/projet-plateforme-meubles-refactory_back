const express = require("express");
const cors = require("cors")

const app = express();
const port = 3000;

const {getPool} = require('./db')
const pool = getPool()

const {getAllProducts} = require("./get_functions/getAllProducts")
//import { getAllProducts } from "./get_functions/getAllProducts.js";

const {getColors} = require("./get_functions/getColors")
const {getColorProduct} = require("./get_functions/getColorProduct")

//console.log(pool)
app.use(cors());

//get All Products 
app.get("/products", getAllProducts);

app.get("/product/:id", async (req, res) => {
  const commandId = req.params.id;
  const result = await pool.query("SELECT * FROM products WHERE id= $1",[commandId]);
  console.log(result.rows);
res.json(result.rows);
});

app.get("/products/colors", getColors);
app.get("/products/color/:id", getColorProduct)

// app.get("/color/:id", async (req, res) => {
//   const colorId = req.params.id;
//   const data = await pool.query("SELECT products.*, colors.name AS color_name FROM products LEFT JOIN colors ON products.colour_id = colors.id WHERE colors.id= $1",[colorId]);
//   console.log(data.rows);
// res.json(data.rows);
// });

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

