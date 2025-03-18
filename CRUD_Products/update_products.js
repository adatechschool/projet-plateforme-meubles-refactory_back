const {getPool} = require('../db')
const pool = getPool()
const express = require("express");
const router = express.Router()

router.post("/update", async (req, res) => {
        const { name, category_id, price, description, material_id, size, images, colour_id, availability } = req.body;

        // Insérer l'utilisateur dans la base de données
        const result = await pool.query(
            `UPDATE products SET name = $1, category_id = $2, price = $3, description = $4, material_id = $5, size = $6, 
            images = $7, colour_id = $8, availability = $9 
            WHERE id = $10 
            RETURNING name, category_id, price, description, material_id, size, images, colour_id, availability`,
            [name, category_id, price, description, material_id, size, images, colour_id, availability]
        );

        res.json(result.rows[0]);})

module.exports = router;