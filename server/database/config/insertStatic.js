const { readFileSync } = require('fs');
const { join } = require('path');
const dbConnection = require('./connection');

const filePath = join(__dirname, 'FakeData.sql');
const sql = readFileSync(filePath).toString();
dbConnection.query(sql);
