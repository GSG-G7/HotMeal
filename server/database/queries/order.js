const connection = require('../config/connection');

exports.addOrder = (createdAt, totalPrice, tableNumber) => connection.query({
  text: 'INSERT INTO user_order (create_at, total_price, table_no) VALUES ($1, $2, $3) RETURNING *;',
  values: [createdAt, totalPrice, tableNumber],
});
