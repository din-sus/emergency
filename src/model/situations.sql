CREATE TABLE situation (
    id SERIAL PRIMARY KEY,
    state VARCHAR(200),
    action_id INT,
    from_id INT
);