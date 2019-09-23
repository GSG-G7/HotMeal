const joi = require('@hapi/joi');
const { loginSchema } = require('./schema/login');
const { loginQuery } = require('../database/query/login');

exports.login = (req, res) => {
  joi.validate(req.body, loginSchema, (err) => {
    if (err) {
      res.send({ statusCode: 401 });
    } else {
      loginQuery(req.body)
        .then(() => res.send({ statusCode: 200 }))
        .catch(() => res.send({ statusCode: 401 }));
    }
  });
};
