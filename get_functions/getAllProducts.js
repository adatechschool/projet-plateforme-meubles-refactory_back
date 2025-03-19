const { getPool } = require('./../db');
const pool = getPool();

const getAllProducts = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT products.*, 
                   categories.name AS categories_name, 
                   colors.name AS colors_name, 
                   materials.name AS materials_name 
            FROM products 
            INNER JOIN categories ON products.category_id = categories.id 
            INNER JOIN colors ON products.color_id = colors.id 
            INNER JOIN materials ON products.material_id = materials.id
        `);
        
        return res.json(result.rows);
    } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

module.exports = { getAllProducts };
