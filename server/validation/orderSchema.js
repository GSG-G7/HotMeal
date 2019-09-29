const Joi = require('@hapi/joi');

module.exports = Joi.object().keys({
  createdAt: Joi.date().timestamp().required(),
  totalPrice: Joi.number().min(0).required(),
  tableNumber: Joi.number().integer().min(1).required(),
  meals: Joi.array().items(
    Joi.object().keys({
      mealId: Joi.number().integer().min(1).required(),
      vegetables: Joi.array().items(Joi.string()),
      fruits: Joi.array().items(Joi.string()),
      nuts: Joi.array().items(Joi.string()),
      sauce: Joi.number().valid(0, 1, 2),
      salt: Joi.number().valid(0, 1, 2),
      spices: Joi.number().valid(0, 1, 2),
      sugar: Joi.number().valid(0, 1, 2),
      amount: Joi.number().integer().min(1).required(),
      price: Joi.number().min(0).required(),
    })
      .required(),
  ),
});
