const { join } = require('path');
const { readFileSync } = require('fs');

const connection = require('./connection');

exports.dbBuild = () => {
  const filePath = join(__dirname, 'build.sql');
  const sql = readFileSync(filePath).toString();
  return connection.query(sql);
};
