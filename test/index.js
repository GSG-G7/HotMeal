/* eslint-disable quote-props */
/* eslint-disable quotes */
const tape = require('tape');
const supertest = require('supertest');
const app = require('../server/app.js');

tape('Testing tape', (t) => {
  t.equal(1, 1, 'Pass');
  t.end();
});
tape('test success for /order', (t) => {
  supertest(app)
    .post('/api/v1/order')
    .send({

      "createdAt": "15/01/2018",
      "totalPrice": 44.05,
      "tableNumber": 1,
      "meals": [{
        "mealId": 2, "amount": 1, "price": 4.02, "salt": 0, "spicies": 0, "vegetables": ['t', 'b'],
      }],
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.deepEquals(res.body, { statusCode: 200 }, 'Status code should be 200');
      }

      t.end();
    });
});

tape.onFinish(() => process.exit(0));
