const {getPool} = require('./../db')
const pool = getPool()

const getMaterials = async (req, res) => {
    const result = await pool.query("SELECT * FROM materials");
    return res.json(result.rows);
}

module.exports = {getMaterials}