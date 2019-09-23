const joi = require('@hapi/joi');

exports.loginSchema = joi.opject().keys({
  secretText: joi.string()
    .invalid('<', '>')
    .required(),
  tableNumber: joi.number()
    .invalid('<', '>')
    .required(),
});
