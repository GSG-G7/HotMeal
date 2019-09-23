// const postFeedback = require('../database/config/connection');
// const feedbackSchema = require('../validation/feedback');

// const PostFeedback = (req, res, next) => {
//   feedbackSchema.validate(req.body, (err) => {
//     if (err) {
//       res.send('fill all the fields');
//     } else {
//       postFeedback(req.body)
//         .then(res.send('Your feedback has sent!'))
//         .catch((error) => next(error));
//     }
//   });
// };
// module.exports = PostFeedback;
