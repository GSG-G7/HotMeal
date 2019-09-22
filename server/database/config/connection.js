const { Pool } = require('pg');
require('env2')('./config.env');

const dbURL = process.env.DB_URL;

if (!dbURL) throw new Error('No Database URL!!!');

const options = {
  connectionString: dbURL,
  ssl: true,
};

module.exports = new Pool(options);
