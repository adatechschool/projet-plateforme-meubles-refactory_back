const {getPool} = require('./../db')
const pool = getPool()
const express = require("express");
const router = express.Router()

router.post("/add", async (req, res) => {
        const { name, category_id, price, description, material_id, size, images, colour_id, availability } = req.body;

        // Insérer l'utilisateur dans la base de données
        const result = await pool.query(
            `INSERT INTO products (name, category_id, price, description, material_id, size, images, colour_id, availability) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 ) 
            RETURNING name, category_id, price, description, material_id, size, images, colour_id, availability`,
            [name, category_id, price, description, material_id, size, images, colour_id, availability]
        );

        res.json(result.rows[0]);})

module.exports = router;