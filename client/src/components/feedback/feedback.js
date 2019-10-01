import Joi from '@hapi/joi';

const feedbackSchema = Joi.object().keys({
  orderId: Joi.number().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  feedback: Joi.string().required(),
});

export default feedbackSchema;
