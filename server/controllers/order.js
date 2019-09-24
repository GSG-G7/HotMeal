const addOrder = require('../database/queries/order');
const addMeal = require('../database/queries/orderMeal');
const orderSchema = require('../validation/order');

module.exports = (req, res, next) => {
  const {
    createdAt, totalPrice, tableNumber, meals,
  } = req.body;
  orderSchema
    .validateAsync(req.body)
    .then(
      addOrder(createdAt, totalPrice, tableNumber)
        .then((order) => {
          const orderId = order.rows[0].id;
          return Promise.all(meals.map((meal) => addMeal(orderId, meal)));
        }).then(() => {
          res.send({ statusCode: 200 });
        }),
    )
    .catch((error) => {
      next(error);
    });
};
