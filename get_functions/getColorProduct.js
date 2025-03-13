const {getPool} = require('../db')
const pool = getPool()

const getColorProduct = async (req, res) => {
  const colorId = req.params.id;
  const data = await pool.query("SELECT products.*, colors.name AS color_name FROM products LEFT JOIN colors ON products.colour_id = colors.id WHERE colors.id= $1",[colorId]);
  console.log(data.rows);
res.json(data.rows);
};

module.exports = {getColorProduct}