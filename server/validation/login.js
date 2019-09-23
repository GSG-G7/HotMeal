const joi = require('@hapi/joi');

module.exports = joi.object().keys({
  secret: joi.string()
    .invalid('<', '>')
    .required(),
  tableNumber: joi.number()
    .invalid('<', '>')
    .required(),
});
