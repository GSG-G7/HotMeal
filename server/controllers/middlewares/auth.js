const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  jwt.verify(req.cookies.hotmeal_token, process.env.PRIVATEKEY, (err, token) => {
    if (err) {
      res.status(401).send({ statusCode: 401, error: 'Unauthorized' });
    } else {
      req.user = { tableNumber: token.tableNumber };
      next();
    }
  });
};
