const tape = require('tape');
const supertest = require('supertest');
const app = require('../server/app.js');

tape('test success for /order', (t) => {
  supertest(app)
    .post('/api/v1/order')
    .send({

      createdAt: '1569396246734',
      totalPrice: 44.05,
      tableNumber: 1,
      meals: [{
        mealId: 1, amount: 2, price: 4.02, salt: 1, spices: 0, vegetables: ['t', 'b'],
      }],
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.deepEquals(res.body, { statusCode: 201 }, 'Status code should be 200');
      }

      t.end();
    });
});
