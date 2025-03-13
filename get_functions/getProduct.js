const {getPool} = require('../db')
const pool = getPool()

const getProduct = async (req, res) => {
    const productId = req.params.id;
    const result = await pool.query("SELECT * FROM products WHERE id= $1",[productId]);
  return res.json(result.rows)
}

module.exports = {getProduct}