const jwt = require('jsonwebtoken');

// eslint-disable-next-line max-len
module.exports = (req, res, next) => jwt.verify(req.cookies.HotmealToken, process.env.PRIVATEKEY, (err) => {
  if (err) {
    req.logedIn = false;
  } else {
    req.logedIn = true;
  }
  next();
});
