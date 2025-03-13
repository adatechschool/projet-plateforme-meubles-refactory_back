const express = require("express");
const cors = require("cors")

const app = express();
const port = 3000;

const {getPool} = require('./db')
const pool = getPool()



const { getProductsMaterials } = require("./get_functions/getProductsMaterials");
const { getMaterials } = require("./get_functions/getMaterials");
//import { getAllProducts } from "./get_functions/getAllProdu
// Importation des fonctions pour récupérer les meubles par catégories
const {getAssises, getRangement, getDecorations, getTables, getLits} = require("./get_functions/categories")

// Importation de la fonction pour récupérer tous les meubles (totalité)
const {getAllProducts} = require("./get_functions/getAllProducts")

const {getColors} = require("./get_functions/getColors")
const {getColorProduct} = require("./get_functions/getColorProduct")


//import { getAllProducts } from "./get_functions/getAllProducts.js";
//console.log(pool)
app.use(cors());

//get All Products chemin
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

app.get("/products/material/:id", getProductsMaterials)

app.get("/materials", getMaterials)

//get Assises chemin
app.get("/products/category/assises", getAssises);

//get Rangement chemin
app.get("/products/category/rangements", getRangement);

//get Décorations chemin
app.get("/products/category/decorations", getDecorations);

//get Tables chemin
app.get("/products/category/tables", getTables);

//get Lits chemin
app.get("/products/category/lits", getLits);


// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

