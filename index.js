const express = require("express");
const cors = require("cors")

const app = express();
const port = 3000;

const {getPool} = require('./db')
const pool = getPool()

const {getAssises, getRangement, getDecorations, getTables, getLits} = require("./get_functions/categories")
const {getAllProducts} = require("./get_functions/getAllProducts")
//import { getAllProducts } from "./get_functions/getAllProducts.js";

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

//get Assises
app.get("/products/category/assises", getAssises);

//get Rangement
app.get("/products/category/rangements", getRangement);

//get Décorations
app.get("/products/category/decorations", getDecorations);

//get Tables
app.get("/products/category/tables", getTables);

//get Lits
app.get("/products/category/lits", getLits);

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

