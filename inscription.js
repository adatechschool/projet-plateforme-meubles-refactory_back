const express = require("express"); 
const bcrypt = require("bcryptjs"); 
const { getPool } = require("./db"); // Importer la connexion à la DB
require("dotenv").config();

const router = express.Router();

// Route d'inscription
router.post("/signup", async (req, res) => {
    try {
        const { firstname, lastname, email, password, adress, role } = req.body;
        const pool = getPool(); // Récupérer la connexion à la base

        // Vérifier si l'email existe déjà
        const userCheck = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (userCheck.rows.length > 0) {
            return res.status(400).json({ message: "Cet email est déjà utilisé" });
        }

        // Hachage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insérer l'utilisateur dans la base de données
        const result = await pool.query(
            "INSERT INTO users (firstname, lastname, email, password, adress, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, firstname, lastname, email, adress, role",
            [firstname, lastname, email, hashedPassword, adress, role || "client"]
        );

        res.json(result.rows[0]);
    } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;
