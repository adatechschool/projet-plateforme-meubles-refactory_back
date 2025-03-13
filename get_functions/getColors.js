const {getPool} = require('../db')
const pool = getPool()

const getColors = async (req, res) => {
    const data = await pool.query("SELECT * FROM colors");
    return res.json(data.rows);
}

module.exports = {getColors}