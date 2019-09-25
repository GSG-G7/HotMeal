const addOrder = require('../database/queries/orderQuery');
const addMeal = require('../database/queries/orderMeal');
const orderSchema = require('../validation/orderSchema');

module.exports = (req, res, next) => {
  let allMeals;
  orderSchema
    .validateAsync(req.body)
    .then((data) => {
      const {
        createdAt, totalPrice, tableNumber, meals,
      } = data;
      allMeals = meals;
      return addOrder(createdAt, totalPrice, tableNumber);
    })
    .then((order) => {
      const { rows } = order;
      const orderId = rows[0].id;
      return Promise.all(allMeals.map((meal) => addMeal(orderId, meal)));
    }).then(() => {
      res.send({ statusCode: 201 });
    })
    .catch((error) => {
      next(error);
    });
};
