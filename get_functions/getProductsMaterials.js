const {getPool} = require('./../db')
const pool = getPool()

const getProductsMaterials = async (req, res) => {
    const materialId = req.params.id;
    const result = await pool.query("SELECT products.*, materials.name AS material_name FROM products LEFT JOIN materials ON products.material_id = materials.id WHERE material_id = $1",[materialId])
    return res.json(result.rows);
}

module.exports = {getProductsMaterials}

