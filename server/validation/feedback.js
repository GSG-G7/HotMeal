const Joi = require('@hapi/joi');

const feedbackSchema = Joi.object().keys({
  orderId: Joi.number().required(),
  email: Joi.string()
    .email()
    .required(),
  feedback: Joi.string().required(),
});

module.exports = feedbackSchema;
