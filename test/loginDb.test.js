const test = require('tape');
const { loginQuery } = require('../server/database/querys/login');

module.exports = test('test login query', (t) => {
  loginQuery('jhy575', 213)
    .then((res) => t.deepEquals(res, { statusCode: 200 }));
});
