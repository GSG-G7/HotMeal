const jwt = require('jsonwebtoken');

// eslint-disable-next-line max-len
module.exports = (req, res, next) => {
  jwt.verify(req.cookies.hotmeal_token, process.env.PRIVATEKEY, (err, token) => {
    if (err) {
      res.status(401).send({ statusCode: 401, data: { logedIn: 0 } }); // hmmmm logedIn 0 == false
    } else {
      req.user = token.tableNumber;
      next();
    }
  });
};
