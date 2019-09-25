const supertest = require('supertest');
const test = require('tape');
const app = require('../server/app');


test('Testing for getMeals route', (t) => {
  supertest(app)
    .get('/api/v1/meals')
    .set('Cookie', ['hotmeal_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0YWJsZU51bWJlciI6MSwiaWF0IjoxNTY5Mzk2ODEyfQ.-Rb_346P1wnl0VHCmmf7zGXaBrfwMlxktFNUEt4l_kk'])
    .query({ category: 'main' })
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.deepEqual(
        Object.keys(res.body),
        ['statusCode', 'data'],
        'The keys must be the same',
      );
      t.equal(
        res.body.statusCode,
        200,
        'The code value must be 200 in the response body',
      );
      res.body.data.forEach((ele) => t.equal(ele.category_id, 1, 'All category ids must be 1'));
      res.body.data.forEach((ele) => t.equal(ele.category, 'main', 'All category names must be main'));
      t.end();
    });
});

test('Testing for getMeals route', (t) => {
  supertest(app)
    .get('/api/v1/meals')
    .set('Cookie', ['hotmeal_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0YWJsZU51bWJlciI6MSwiaWF0IjoxNTY5Mzk2ODEyfQ.-Rb_346P1wnl0VHCmmf7zGXaBrfwMlxktFNUEt4l_kk'])
    .query({ category: 'blabla' })
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err);
      t.deepEqual(
        res.body,
        { statusCode: 400, error: 'No such category' },
        'The code value must be 200 in the response body',
      );
      t.end();
    });
});
