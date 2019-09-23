const joi = require('@hapi/joi');

module.export = joi.object().keys({
  secretText: joi.string()
    .invalid('<', '>')
    .required(),
  tableNumber: joi.number()
    .invalid('<', '>')
    .required(),
});
