const test = require('tape');
const { loginQuery } = require('../server/database/querys/login');
const reBuild = require('../server/database/config/build');

module.exports = test('test login query', (t) => {
  reBuild();
  loginQuery({ secret: 'sha12345', tableNumber: '1' })
    .then((res) => {
      t.deepEquals(res.rows[0], { number: 1, secret: 'sha12345' }, 'should get data from tables');
      t.end();
    });
});
