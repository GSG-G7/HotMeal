const { loginSchema } = require('../validation/login');
const { loginQuery } = require('../database/querys/login');

exports.login = (req, res) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    res.status(401).send({ statusCode: 401 });
  } else {
    loginQuery(req.body)
      .then(() => res.status(200).send({ statusCode: 200 }))
      .catch(() => res.status(401).send({ statusCode: 401 }));
  }
};
