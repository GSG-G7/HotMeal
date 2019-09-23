const test = require('tape');
const supertest = require('supertest');
const app = require('../server/app');

module.exports = test('Testing tape', (t) => {
  supertest(app)
    .post('/login')
    .send({ secret: 'h54f', tableNumber: 123 })
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) t.error(err);
      else {
        t.deepEquals(res, { statusCode: 200 });
      }
      t.end();
    });
});
