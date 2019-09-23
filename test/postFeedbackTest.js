const tape = require('tape');
const supertest = require('supertest');

const app = require('../server/app');

tape('initial test for tape', (t) => {
  t.ok(true);
  t.end();
});
// tape('testing post feedback route', (t) => {
//   supertest(app)
//     .post('/api/v1/postfeedback')
//     .expect(200)
//     .expect('content-type', /json/)
//     .end((err, res) => {
//       if (err) {
//         t.error(err);
//         t.end();
//       } else {
//         console.log(res.message);

//         t.ok(res.message, 'Your feedback has sent!', 'both should be the same');
//         t.end();
//       }
//     });
// });
