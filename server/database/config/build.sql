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
    category_id INTEGER REFERENCES menu_category(id),
    short_desc TEXT ,
    description TEXT ,
    img TEXT,
    price FLOAT,
    ingrediants VARCHAR(255)
);
CREATE TABLE user_order
(
    id  SERIAL PRIMARY KEY,
    create_at   DATE,
    total_price FLOAT,
    total_no  INTEGER
);
CREATE TABLE order_meal
(
    order_id INTEGER  REFERENCES user_order(id) NOT NULL,
    meal_id INTEGER REFERENCES meal(id) NOT NULL,
    PRIMARY KEY (order_id, meal_id),
    salt VARCHAR(255),
    spices VARCHAR(255),
    vegetables VARCHAR(255),
    amount INTEGER,
    price FLOAT
);
CREATE TABLE feedback
(
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES user_order(id),
    email VARCHAR(255),
    feedback TEXT
);
COMMIT;