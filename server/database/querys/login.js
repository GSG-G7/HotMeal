
const connection = require('../config/connection');

module.exports = (data) => {
  const { secret, tableNumber } = data;
  return connection.query(
    'SELECT * FROM table_info WHERE $1 = number and $2 = secret;', [tableNumber, secret],
  );
};
