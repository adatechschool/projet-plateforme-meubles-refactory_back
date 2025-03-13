const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getPool, getJwtSecret } = require("./db");
require("dotenv").config();


const router = express.Router();

// 📌 Route de connexion (POST /users/login)
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const pool = getPool();
        const jwtSecret = getJwtSecret();

        // Vérifier si l'utilisateur existe
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (result.rows.length === 0) {
            return res.status(401).json({ message: "Identifiants incorrects" });
        }

        const user = result.rows[0];

        // Vérifier si le mot de passe est correct
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Identifiants incorrects" });
        }

        // Générer le token JWT
        const token = jwt.sign(
            {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                address: user.address,
                role: user.role
            },
            jwtSecret, // Clé secrète récupérée depuis `db.js`
            { expiresIn: "1h" } // Le token expire après 1 heure
        );

        res.json({ token }); // Envoi du token au client
    } catch (error) {
        console.error("Erreur lors de la connexion :", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;
