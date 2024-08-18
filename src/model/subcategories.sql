CREATE TABLE fire (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    total_req INT,
    location VARCHAR(200),
    category_id INT,
    user_id INT
);

CREATE TABLE police (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    total_req INT,
    location VARCHAR(200),
    category_id INT,
    user_id INT
);

CREATE TABLE ambulance (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    total_req INT,
    location VARCHAR(200),
    category_id INT,
    user_id INT
);