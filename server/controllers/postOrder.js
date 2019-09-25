const { insertOrder, insertOrderMeals } = require('../database/queries/order');
const orderSchema = require('../validation/orderSchema');

module.exports = (req, res, next) => {
  let allMeals;
  orderSchema
    .validateAsync({
      ...req.body, tableNumber: req.user.tableNumber,
    })
    .then((data) => {
      const {
        createdAt, totalPrice, meals,
      } = data;
      allMeals = meals;
      return insertOrder(createdAt, totalPrice, req.user.tableNumber);
    })
    .then((order) => {
      const { rows } = order;
      const orderId = rows[0].id;
      return Promise.all(allMeals.map((meal) => insertOrderMeals(orderId, meal)));
    }).then(() => {
      res.status(201).send({ statusCode: 201, message: 'Insertion order success' });
    })
    .catch((error) => {
      if (error.code === '23503') {
        res.status(422).send({ statusCode: 422, error: error.detail });
      } else if (error.details) {
        if (error.details[0].message) {
          res.status(400).send({ statusCode: 400, error: error.details[0].message });
        }
      } else {
        next(error);
      }
    });
};
