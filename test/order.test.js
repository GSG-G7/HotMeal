const test = require('tape');
const supertest = require('supertest');
const app = require('../server/app.js');

test('test success for /order', (t) => {
  supertest(app)
    .post('/api/v1/order')
    .set('Cookie', ['hotmeal_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0YWJsZU51bWJlciI6MSwiaWF0IjoxNTY5Mzk2ODEyfQ.-Rb_346P1wnl0VHCmmf7zGXaBrfwMlxktFNUEt4l_kk'])
    .send({
      createdAt: '1569396246734',
      totalPrice: 44.05,

      meals: [{
        mealId: 1, amount: 2, price: 4.02, salt: 1, spices: 0, vegetables: ['t', 'b'],
      }],
    })
    .expect(201)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.deepEquals(res.body, { statusCode: 201, message: 'Insertion order success' }, 'Status code should be 201');
      }

      t.end();
    });
});
test.onFinish(() => process.exit(0));
