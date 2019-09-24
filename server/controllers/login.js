const loginSchema = require('../validation/login');
const loginQuery = require('../database/querys/login');

module.exports = (req, res, next) => {
  loginSchema.validateAsync(req.body)
    .then(() => loginQuery(req.body))
    .then((tables) => (tables.rows[0] ? res.status(200).send({ statusCode: 200 })
      : res.status(401).send({ statusCode: 401, data: 'login false' })))
    .catch((err) => {
      if (err.details) {
        if (err.details[0].message) {
          res.status(400).send({ statusCode: 400, message: err.details[0].message });
        }
      } else {
        next(err);
      }
    });
};
