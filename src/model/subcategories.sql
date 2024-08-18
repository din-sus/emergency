CREATE TABLE subcategories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    total_req INT,
    location VARCHAR(200),
    category_id INT,
    user_id INT
);
