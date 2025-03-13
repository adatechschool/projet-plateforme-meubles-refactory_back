const express = require("express");
const cors = require("cors")

const app = express();
const port = 3000;

const {getPool} = require('./db')
const pool = getPool()

const {getAllProducts} = require("./get_functions/getAllProducts");
const { getProductsMaterials } = require("./get_functions/getProductsMaterials");
const { getMaterials } = require("./get_functions/getMaterials");
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

app.get("/products/material/:id", getProductsMaterials)

app.get("/materials", getMaterials)

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

