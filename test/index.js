const test = require('tape');
const { loginQuery } = require('../server/database/querys/login');

module.exports = test('init', (t) => {
  t.deepEquals(1, 1, 'how');
});

// require('./login.test');
// require('./loginDb.test');
