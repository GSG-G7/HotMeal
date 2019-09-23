const tape = require('tape');
const supertest = require('supertest');
const app = require('../server/app');

tape('Testing tape', (t) => {
  supertest(app)
    .post('/login')
    .send({ secretNumber: 'h54f', tableNumber: 123 })
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) t.error(err);
      else {
        t.end();
        t.deepEquals(res, { statusCode: 200 });
      }
    });
  t.end();
});
