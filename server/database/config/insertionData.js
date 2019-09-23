const { readFileSync } = require('fs');
const { join } = require('path');
const dbConnection = require('./connection');

module.exports = () => {
  const filePath = join(__dirname, '..', 'server', 'database', 'config', 'FakeData.sql');
  const sql = readFileSync(filePath).toString();
  return dbConnection.query(sql);
};
