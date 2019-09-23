const tape = require('tape');

const build = require('../server/database/config/build');
const postFeedback = require('../server/database/queries/postFeedback');

tape('testing post feedback route', (t) => {
  const expected = 'alaayasin.ps@gmail.com';
  build()
    .then(() => postFeedback())
    .then((res) => t.deepEqual(res.email, expected, 'must be the same'))
    .then(() => t.end())
    .catch();
});

tape.onFinish(() => process.exit(0));
