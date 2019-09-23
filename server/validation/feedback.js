const Joi = require('@hapi/joi');

exports.schema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  feedback: Joi.string().required(),
});
