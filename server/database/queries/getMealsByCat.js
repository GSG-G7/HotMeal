const connection = require('../../database/config/connection');

const getMealsByCat = (categoryName) => {
  connection.query(
    'Select * from menue_category inner join meal on (menue_category.id = meal.category_id) where menue_category.name=$1',
    [categoryName],
  );
};
module.exports = getMealsByCat;
