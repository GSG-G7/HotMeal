const test = require('tape');
const { loginQuery } = require('../server/database/querys/login');

module.exports = test('test login query', (t) => {
  loginQuery({ secret: 'sha12345', tableNumber: '1' })
    .then((res) => {
      t.deepEquals(res.rows[0], { number: 1, secret: 'sha12345' }, 'should get data from tables');
      t.end();
    });
});
