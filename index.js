const express = require("express");
const cors = require("cors")
const inscriptionRoutes = require("./inscription"); // 📌 Routes d'inscription
const connexionRoutes = require("./connexion"); // 📌 Routes de connexion

const app = express();
app.use(express.json());
const port = 3000;
app.use(cors()); // 📌 Gère les requêtes cross-origin

// 📌 Enregistre les routes sous `/users`
app.use("/users", inscriptionRoutes);
app.use("/users", connexionRoutes);

const {getPool} = require('./db')
const pool = getPool()



// Importation de la fonction pour récupérer tous les meubles (totalité)
const {getAllProducts} = require("./get_functions/getAllProducts")

//Importation de la fonction pour récupérer un meuble individuellement
const {getProduct} = require("./get_functions/getProduct")

const { getAllCategorieOfProducts } = require("./get_functions/getAllCategorieOfProducts");

//Importation des fonction pour récupérer les types de matériaux et les produits par matériaux
const { getMaterials } = require("./get_functions/getMaterials");
const { getProductsByMaterial } = require("./get_functions/getProductsByMaterial");

//Importation des fonction pour récupérer les couleurs et les produits par couleurs
const {getColors} = require("./get_functions/getColors")
const {getProductsByColor} = require("./get_functions/getProductsByColor")

// Importation des fonctions pour récupérer les meubles par catégories
const {getAssises, getRangement, getDecorations, getTables, getLits} = require("./get_functions/getProductsByCategory")

const addProduct = require("./CRUD_Products/add_products");

const deleteProduct = require("./CRUD_Products/delete_products")

const updateProduct = require("./CRUD_Products/update_products");


app.use(cors());

//Chemin pour récupérer tous les produits
app.get("/products", getAllProducts);

app.get("/getAllCategorieOfProducts", getAllCategorieOfProducts)
//Chemin pour un produit 
app.get("/product/:id", getProduct);

//Chemin pour récupérer toutes les couleurs
app.get("/colors", getColors);

//Chemin pour récupérer les produits par couleur
app.get("/products/color/:id", getProductsByColor)

//Chemin pour récupérer tous les matériaux
app.get("/materials", getMaterials)

//Chemin pour récupérer les produits par matériaux
app.get("/products/material/:id", getProductsByMaterial)

//Chemin pour récupérer la catégorie Assises
app.get("/products/category/assises", getAssises);

//Chemin pour récupérer la catégorie Rangement
app.get("/products/category/rangements", getRangement);

//Chemin pour récupérer la catégorie Décorations
app.get("/products/category/decorations", getDecorations);

//Chemin pour récupérer la catégorie Tables et Bureaux
app.get("/products/category/tables", getTables);

//Chemin pour récupérer la catégorie Lits
app.get("/products/category/lits", getLits);

app.use("/product", addProduct);

app.use("/product", deleteProduct)

app.use("/product", updateProduct)

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

