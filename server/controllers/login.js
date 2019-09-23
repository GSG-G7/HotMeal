const joi = require('@hapi/joi');
const { loginSchema } = require('../validation/login');
const { loginQuery } = require('../database/query/login');

exports.login = (req, res) => {
  loginSchema.validate(req.body);

  if (err) {
    res.status(401).send({ statusCode: 401 });
  } else {
    loginQuery(req.body)
      .then(() => res.status(200).send({ statusCode: 200 }))
      .catch(() => res.status(401).send({ statusCode: 401 }));
  }
};
