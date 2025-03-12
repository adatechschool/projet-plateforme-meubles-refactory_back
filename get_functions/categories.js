const {getPool} = require('./../db')
const pool = getPool()

const getAssises = async (req, res) => {
        const result = await pool.query(`
            SELECT products.*, categories.name AS categories_name
            FROM products
            JOIN categories ON products.category_id = categories.id
            WHERE categories.name IN ('Chaises', 'Canapés', 'Fauteuils');
        `);
        console.log(result.rows)
        return res.json(result.rows);
};

const getRangement = async (req, res) => {
    const result = await pool.query(`
        SELECT products.*, categories.name AS categories_name
        FROM products
        JOIN categories ON products.category_id = categories.id
        WHERE categories.name IN ('Armoires', 'Etagères', 'Commodes', 'Buffets');
    `);
    console.log(result.rows)
    return res.json(result.rows);
};

const getDecorations = async (req, res) => {
    const result = await pool.query(`
        SELECT products.*, categories.name AS categories_name
        FROM products
        JOIN categories ON products.category_id = categories.id
        WHERE categories.name IN ('Lampes', 'Décorations');
    `);
    console.log(result.rows)
    return res.json(result.rows);
};

const getTables = async (req, res) => {
    const result = await pool.query(`
        SELECT products.*, categories.name AS categories_name
        FROM products
        JOIN categories ON products.category_id = categories.id
        WHERE categories.name IN ('Tables basses', 'Tables', 'Bureaux', 'Tables de chevet');
    `);
    console.log(result.rows)
    return res.json(result.rows);
};

const getLits = async (req, res) => {
    const result = await pool.query(`
        SELECT products.*, categories.name AS categories_name
        FROM products
        JOIN categories ON products.category_id = categories.id
        WHERE categories.name IN ('Lits');
    `);
    console.log(result.rows)
    return res.json(result.rows);
};


module.exports = {
    getAssises,
    getRangement,
    getDecorations,
    getTables,
    getLits
}