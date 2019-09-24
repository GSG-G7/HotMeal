ROLLBACK;
BEGIN;

DROP TABLE IF EXISTS table_info, meal, menu_category ,user_order, order_meal, feedback CASCADE; 
CREATE TABLE table_info
(
    number SERIAL PRIMARY KEY,
    secret VARCHAR(255) UNIQUE   
);
CREATE TABLE menu_category
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE meal
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE,
    category_id INTEGER REFERENCES menu_category(id) ON DELETE CASCADE,
    short_desc TEXT ,
    description TEXT ,
    img TEXT,
    price FLOAT,
    ingredients VARCHAR(255)[]
);
CREATE TABLE user_order
(
    id  SERIAL PRIMARY KEY,
    create_at   TIMESTAMP,
    total_price FLOAT,
    table_no  INTEGER REFERENCES table_info(number) on DELETE CASCADE
);
CREATE TABLE order_meal
(
    order_id INTEGER  REFERENCES user_order(id) on DELETE CASCADE NOT NULL,
    meal_id INTEGER REFERENCES meal(id) on DELETE CASCADE NOT NULL,
    PRIMARY KEY (order_id, meal_id),
    vegetables VARCHAR(255)[],
    fruits VARCHAR(255)[],
    nuts VARCHAR(255)[],
    sauce INTEGER,
    salt INTEGER,
    spices INTEGER,
    sugar integer,
    amount INTEGER,
    price FLOAT
);
CREATE TABLE feedback
(
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES user_order(id) on DELETE CASCADE,
    email VARCHAR(255),
    feedback TEXT
);
COMMIT;