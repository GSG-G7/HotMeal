const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  jwt.verify(req.cookies.hotmeal_token, process.env.PRIVATEKEY, (err, token) => {
    if (err) {
      res.status(401).send({ statusCode: 401, error: 'Unauthorized' });
    } else {
      req.user = { tableNumber: token.tableNumber };
      res.status(200).send({ statusCode: 200, message: 'authorized' });
    }
  });
};
