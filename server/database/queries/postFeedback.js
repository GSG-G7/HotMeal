const connection = require('../config/connection');

module.exports = (data) => {
  const { orderId, email, feedback } = data;
  const sql = {
    text: 'INSERT INTO feedback (order_id, email, feedback) values ($1, $2, $3);',
    values: [orderId, email, feedback],
  };
  return connection.query(sql);
};
