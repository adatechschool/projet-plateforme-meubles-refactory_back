const {getPool} = require('./../db')
const pool = getPool()

const getMaterials = async (req, res) => {
    const result = await pool.query("SELECT * FROM materials");
    //console.log(result.rows);
    return res.json(result.rows);
}

module.exports = {getMaterials}