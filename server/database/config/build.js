const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('./connection');

const filePath = join(__dirname, 'build.sql');
const sql = readFileSync(filePath).toString();
connection.query(sql);
