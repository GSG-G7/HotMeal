const joi = require('@hapi/joi');

module.export = joi.object().keys({
  secret: joi.string()
    .invalid('<', '>')
    .required(),
  tableNumber: joi.number()
    .invalid('<', '>')
    .required(),
});
