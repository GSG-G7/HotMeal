const loginSchema = require('../validation/login');
const { loginQuery } = require('../database/querys/login');

exports.login = (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    res.status(401).send({ statusCode: 401 });
  } else {
    loginQuery(req.body)
      .then((tables) => {
        if (tables.rows[0]) {
          res.status(200).send({ statusCode: 200 });
        } else {
          res.status(401).send({ statusCode: 401 });
        }
      })
      .catch((err) => {
        res.status(500).send({ statusCode: 500, data: err });
      });
  }
};
