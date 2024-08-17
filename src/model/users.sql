CREATE DATABASE emergency;

\c emergency

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    location VARCHAR(200),
    password VARCHAR(200),
    role VARCHAR(200)
);

