const joi = require('@hapi/joi');

exports.loginSc = joi.opject().keys({
  secretText: joi.string()
    .invalid('<', '>')
    .required(),
  tableNumber: joi.number()
    .invalid('<', '>')
    .required(),
});
