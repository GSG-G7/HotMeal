const connection = require('../config/connection');

module.exports = (data) => {
  const { secret, tableNumber } = data;
  return connection.query(
    'SELECT number FROM table_info WHERE $1 = number And $2 = secret;', [tableNumber, secret],
  );
};
