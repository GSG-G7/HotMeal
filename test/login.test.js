const test = require('tape');
const supertest = require('supertest');
const app = require('../server/app');
const reBuild = require('../server/database/config/build');

reBuild();

exports.successLogin = test('Testing /login success', (t) => {
  supertest(app)
    .post('/api/v1/login')
    .send({ secret: 'sha12345', tableNumber: '1' })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) t.error(err);
      else {
        t.deepEquals(res.body, { statusCode: 200 }, 'should route login with true data have status code 200');
      }
      t.end();
    });
});
exports.feildLogin = test('Testing /login fail auth', (t) => {
  supertest(app)
    .post('/api/v1/login')
    .send({ secret: 'sh23dd4s5', tableNumber: '1' })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(401)
    .end((err, res) => {
      if (err) t.error(err);
      else {
        t.deepEquals(res.body, { statusCode: 401 }, 'should route login with true data have status code 401');
      }
      t.end();
    });
});
