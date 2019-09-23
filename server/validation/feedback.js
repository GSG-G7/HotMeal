const Joi = require('@hapi/joi');

const feedbackSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  feedback: Joi.string().required(),
});

module.exports = feedbackSchema;
