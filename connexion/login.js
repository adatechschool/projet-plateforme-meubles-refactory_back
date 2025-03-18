const {getPool} = require('./../db') // Import the getPool function from the db.js file
const pool = getPool() // Pool connection to the database,  Connexion active qui permet d'exécuter des requêtes SQL.
const express = require("express"); // Express library, Framework utilisé pour créer une application serveur.
const router = express.Router() // Express router to manage the routes; Instance d'un routeur Express permettant de définir des routes spécifiques.


router.post("/login", async (req, res) => {
    const {email, password} = req.body; // Get the email and password from the request body
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]); // Query to get the user with the email from the database
    if (result.rows.length === 0) {
        return res.status(404).json({message: "User not found"});
    }
    if (result.rows[0].password !== password) {
        return res.status(401).json({message: "Invalid password"});
    }
    return res.json(result.rows[0]);
})
module.exports = router; // Export the router to be used in the main app file (app.js)