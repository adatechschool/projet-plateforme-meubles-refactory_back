const { Pool } = require("pg");

let globalPool;

const getPool = () => {
  if (!globalPool) {
    globalPool = new Pool({
      connectionString: "postgresql://furnituredb_owner:npg_g1qZYh0OnwKi@ep-dark-tree-a876qmse-pooler.eastus2.azure.neon.tech/furnituredb?sslmode=require",
      ssl: { rejectUnauthorized: false },
    });
  }
  return globalPool;
};
module.exports = { getPool };