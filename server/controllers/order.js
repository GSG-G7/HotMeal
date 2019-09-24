const { addOrder } = require('../database/queries/order');
const { addMeal } = require('../database/queries/orderMeal');

exports.addOrder = (req, res, next) => {
  const {
    createdAt, totalPrice, tableNumber, meals,
  } = req.body;

  addOrder(createdAt, totalPrice, tableNumber)
    .then((order) => {
      const orderId = order.rows[0].id;
      meals.forEach((meal) => {
        addMeal(orderId, meal)
          .then(() => {
            res.send({ statusCode: 200 });
          })
          .catch((err) => { next(err); });
      });
    }).catch((error) => {
      next(error);
    });
};
