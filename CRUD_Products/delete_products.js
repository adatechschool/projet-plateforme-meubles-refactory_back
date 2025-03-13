const {getPool} = require('./../db')
const pool = getPool()
const express = require("express");
const router = express.Router()

router.delete("/delete/:id", async (req, res) => {
    const productId = req.params.id;
    const result = await pool.query(
        "DELETE FROM products WHERE id=$1", [productId]
    );

    res.json(result.rows[0]);})

module.exports = router;