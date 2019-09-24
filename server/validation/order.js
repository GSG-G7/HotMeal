const Joi = require('@hapi/joi');

module.exports = Joi.object().keys({
  createdAt: Joi.date().required(),
  totalPrice: Joi.number().required(),
  tableNumber: Joi.number().required(),
  meals: Joi.array().items(Joi.object().keys({
    // mealId, vegetables, fruits, nuts, sauce, salt, spices, sugar, amount, price
    mealId: Joi.number().required(),
    vegetables: Joi.array().items(Joi.string()),
    fruits: Joi.array().items(Joi.string()),
    nuts: Joi.array().items(Joi.string()),
    sauce: Joi.number().valid(0, 1, 2),
    salt: Joi.number().valid(0, 1, 2),
    spices: Joi.number().valid(0, 1, 2),
    sugar: Joi.number().valid(0, 1, 2),
    amount: Joi.number(),
    price: Joi.number(),


  })).required(),
});
