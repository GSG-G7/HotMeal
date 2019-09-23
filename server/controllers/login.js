const joi = require('@hapi/joi');
const { loginSc } = require('./schema/login');
const { loginQ } = require('../database/query/login');

exports.login = (req, res) => {
  joi.validate(req.body, loginSc, (err) => {
    if (err) {
      res.send({ statusCode: 401 });
    } else {
      loginQ(req.body)
        .then(() => res.send({ statusCode: 200 }));
    }
  });
};
