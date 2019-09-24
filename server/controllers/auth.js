const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  jwt.verify(req.cookies.hotmeal_Token, process.env.PRIVATEKEY, (err) => {
    if (err) {
      req.logedIn = false;
    } else {
      req.logedIn = true;
    }
    next();
  });
};
