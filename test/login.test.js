const test = require('tape');
const supertest = require('supertest');
const app = require('../server/app');

test('Testing /login success', (t) => {
  supertest(app)
    .post('/api/v1/login')
    .send({ secret: 'sha12345', tableNumber: '1' })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) t.error(err);
      else {
        t.deepEquals(res.body, { statusCode: 200, data: { tableNumber: 1 } }, 'should route login with true data have status code 200');
      }
    });
  supertest(app)
    .post('/api/v1/login')
    .send({ secret: 'wrong data', tableNumber: '1' })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(401)
    .end((err, res) => {
      if (err) t.error(err);
      else {
        t.deepEquals(res.body, { statusCode: 401, error: 'The credintials you entered are not valid' }, 'should route login with error have status code 401');
      }
    });
  t.end();
});


test.onFinish(() => process.exit(0));
