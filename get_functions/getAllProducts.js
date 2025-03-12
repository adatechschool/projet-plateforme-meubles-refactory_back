const {getPool} = require('./../db')
const pool = getPool()

const getAllProducts = async (req, res) => {
    const result = await pool.query("SELECT * FROM products");
    //console.log(result.rows);
    return res.json(result.rows);
}

module.exports = {getAllProducts}