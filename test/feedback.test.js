const tape = require('tape');
const supertest = require('supertest');
const app = require('../server/app');
const { token } = require('./cookie.test');

tape('testing post feedback route', (t) => {
  supertest(app)
    .post('/api/v1/post-feedback')
    .set('Cookie', [`hotmeal_token=${token}`])
    .send({ orderId: 2, email: 'alaa@gmail.com', feedback: 'Every thing is good' })
    .expect('Content-Type', /json/)
    .expect(201)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.deepEqual(res.body, { statusCode: 201, message: 'Your feedback has sent!' }, 'should be the same');
        t.end();
      }
    });
});
tape.onFinish(() => process.exit(0));
