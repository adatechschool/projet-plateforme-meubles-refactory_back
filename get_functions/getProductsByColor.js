const {getPool} = require('../db')
const pool = getPool()

const getProductsByColor = async (req, res) => {
  const colorId = req.params.id;
  const data = await pool.query(`
    SELECT products.*, colors.name AS color_name 
    FROM products 
    LEFT JOIN colors ON products.colour_id = colors.id 
    WHERE colors.id= $1`,[colorId]);
res.json(data.rows);
};

module.exports = {getProductsByColor}