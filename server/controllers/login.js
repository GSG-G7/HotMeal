const loginSchema = require('../validation/login');
const loginQuery = require('../database/querys/login');

module.exports = (req, res, next) => {
  loginSchema.validateAsync(req.body)
    .then(() => loginQuery(req.body))
    .then((tables) => (tables.rows[0] ? res.status(200).send({ statusCode: 200 })
      : res.status(401).send({ statusCode: 401 })))
    .catch((err) => next(err));
};
