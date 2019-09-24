const connection = require('../config/connection');

module.exports = (orderId, data) => {
  const {
    mealId, vegetables, fruits, nuts, sauce, salt, spices, sugar, amount, price,
  } = data;
  return connection.query({
    text: 'INSERT INTO order_meal (order_id, meal_id, vegetables, fruits, nuts, sauce, salt, spices, sugar, amount, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;',
    values: [orderId, mealId, vegetables, fruits, nuts, sauce, salt, spices, sugar, amount, price],
  });
};
