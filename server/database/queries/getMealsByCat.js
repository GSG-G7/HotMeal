const connection = require('../../database/config/connection');

const getMealsByCat = (categoryName) => connection.query(
    'Select c.name as category, m.*  from menu_category c inner join meal m on (c.id = m.category_id) where c.name=$1',
    [categoryName],
  );

module.exports = getMealsByCat;
