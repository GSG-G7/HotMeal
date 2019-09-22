const { Pool } = require('pg');
require('env2')('./config.env');

let dbURL;
switch (process.env.NODE_ENV) {
  case 'dev':
    dbURL = process.env.DB_URL;
    break;
  case 'test':
    dbURL = process.env.DB_TEST_URL;
    break;
  default:
}

if (!dbURL) throw new Error('No Database URL!!!');

const options = {
  connectionString: dbURL,
  ssl: true,
};

module.exports = new Pool(options);
