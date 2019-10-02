import Joi from '@hapi/joi';

const logInSchema = Joi.object().keys({
  tableNumber: Joi.number()
    .required()
    .label('Table Number'),
  secret: Joi.string().required(),
});

export default logInSchema;
