const {getPool} = require('../db')
const pool = getPool()

const getProduct = async (req, res) => {
    const productId = req.params.id;
    const result = await pool.query(`SELECT products.*, categories.name AS categories_name, colors.name AS colors_name, materials.name AS materials_name 
             FROM products 
             INNER JOIN categories ON products.category_id = categories.id 
             INNER JOIN colors ON products.color_id = colors.id 
             INNER JOIN materials ON products.material_id = materials.id 
             WHERE products.id = $1`, 
            [productId]);
  return res.json(result.rows)
}

module.exports = {getProduct}