const {getPool} = require('./../db')
const pool = getPool()
const express = require("express");
const router = express.Router()

router.put("/update/:id", async(req, res) =>{
    const productId = req.params.id;
    const result = await pool.query(
        "UPDATE products SET name = $1, category_id = $2, price = $3, description = $4, material_id = $5, size = $6, images = $7, colour_id = $8, availability = $9 WHERE id=$1", [productId]
    );
    res.json(result.rows[0]);
})

module.exports = router;