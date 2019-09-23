// const connection = require('../config/connection');

// const postFeedback = (data) => {
//   const { orderID, email, feedback } = data;
//   const sql = {
//     text: 'INSERT INTO feedback (orderID, email, feedback) values ($1, $2, $3)',
//     values: [orderID, email, feedback],
//   };
//   return connection.query(sql);
// };
// module.exports = postFeedback;
