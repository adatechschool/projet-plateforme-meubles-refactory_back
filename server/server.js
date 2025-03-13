const express = require("express");
const cors = require("cors");
require("dotenv").config();

const inscriptionRoutes = require("../inscription"); // 📌 Routes d'inscription
const connexionRoutes = require("../connexion"); // 📌 Routes de connexion

const app = express();

app.use(express.json()); // 📌 Autorise les requêtes JSON
app.use(cors()); // 📌 Gère les requêtes cross-origin

// 📌 Enregistre les routes sous `/users`
app.use("/users", inscriptionRoutes);
app.use("/users", connexionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
