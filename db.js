const { Pool } = require("pg");
require('dotenv').config()
console.log(process.env)

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
module.exports = { getPool };