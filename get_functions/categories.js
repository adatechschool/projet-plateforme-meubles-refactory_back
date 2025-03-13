// Initialisation Pool (récupération variable globale)
const {getPool} = require('./../db')
const pool = getPool()


// Fonction fléchée pour récupérer tous les meubles de la catégorie "Assises"
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

// Fonction fléchée pour récupérer tous les meubles de la catégorie "Rangement"
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

// Fonction fléchée pour récupérer tous les meubles de la catégorie "Décorations"
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

// Fonction fléchée pour récupérer tous les meubles de la catégorie "Tables"
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

// Fonction fléchée pour récupérer tous les meubles de la catégorie "Lits"
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


// Exportation des fonctions dans le fichier index.JS
module.exports = {
    getAssises,
    getRangement,
    getDecorations,
    getTables,
    getLits
}