CREATE TABLE fire (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    total_req INT,
    category_id INT
);

CREATE TABLE police (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    total_req INT,
    category_id INT
);

CREATE TABLE ambulance (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    total_req INT,
    category_id INT
);