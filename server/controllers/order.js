const addOrder = require('../database/queries/order');
const addMeal = require('../database/queries/orderMeal');

module.exports = (req, res, next) => {
  const {
    createdAt, totalPrice, tableNumber, meals,
  } = req.body;

  addOrder(createdAt, totalPrice, tableNumber)
    .then((order) => {
      const orderId = order.rows[0].id;
      return Promise.all(meals.map((meal) => addMeal(orderId, meal)));
    }).then(() => {
      res.send({ statusCode: 200 });
    })
    .catch((error) => {
      next(error);
    });
};
