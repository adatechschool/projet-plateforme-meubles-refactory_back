const { Pool } = require("pg");
require('dotenv').config()


let globalPool;

const getPool = () => {
  if (!globalPool) {
    globalPool = new Pool({
      connectionString: process.env.DB_CONNECTION_STRING,
      ssl: { rejectUnauthorized: false },
    });
  }
  return globalPool;
};



const getJwtSecret = () => {
  return process.env.JWT_SECRET;
};

module.exports = { getPool, getJwtSecret };