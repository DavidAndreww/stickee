DROP TABLE IF EXISTS users, notes;

-- CREATE TABLE users
-- (
--   id INT NOT NULL
--   AUTO_INCREMENT,
--   email VARCHAR
--   (50),
--   password VARCHAR
--   (50),
--   PRIMARY KEY
--   (id)
-- );

-- CREATE TABLE notes
--   (
--     id INT NOT NULL
--     AUTO_INCREMENT,
--   id INT NOT NULL,
--   message VARCHAR
--     (50),
--   type VARCHAR
--     (10)
--   REFERENCES users
--     (id)
--     ON
--     DELETE CASCADE
-- );