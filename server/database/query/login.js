
const connection = require('../config/conection');

exports.loginQuery = (data) => {
  const { secretTextdata, tableNumber } = data;
  return connection.query(
    'SELECT * FROM table_info WHERE $1 = number and $2 = secret;', [tableNumber, secretTextdata],
  );
};
