const jwt = require('jsonwebtoken');
const loginSchema = require('../validation/login');
const loginQuery = require('../database/querys/login');
require('env2')('./config.env');

module.exports = (req, res, next) => {
  loginSchema.validateAsync(req.body)
    .then(() => loginQuery(req.body))
    .then((tables) => {
      if (tables.rows[0]) {
        const token = jwt.sign(tables.rows[0], process.env.PRIVATEKEY);
        res.cookie('HotmealToken', token);
        res.status(200).send({ statusCode: 200 });
      } else {
        res.status(401).send({ statusCode: 401, error: 'The credintials you entered are not valid' });
      }
    })
    .catch((err) => {
      if (err.details) {
        if (err.details[0].message) {
          res.status(400).send({ statusCode: 400, error: err.details[0].message });
        }
      } else {
        next(err);
      }
    });
};
