const pgpInit = require('pg-promise');
require('dotenv').config();

const pgp = pgpInit();
  // Localhost development setup
  db = pgp({
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl: {
      rejectUnauthorized: false, // optional, depending on your local setup
    },
  });

module.exports = db;
