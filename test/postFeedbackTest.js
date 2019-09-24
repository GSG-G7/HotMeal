const tape = require('tape');
const supertest = require('supertest');

const app = require('../server/app');

tape('testing post feedback route', (t) => {
  supertest(app)
    .post('/api/v1/postfeedback')
    .send({ orderId: 2, email: 'alaa@gmail.com', feedback: 'Every thing is good' })
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.deepEqual(res.body, { statusCode: 200, message: 'Your feedback has sent!' }, 'should be the same');
        t.end();
      }
    });
});
