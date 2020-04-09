DROP TABLE IF EXISTS users, notes;

CREATE TABLE users (
  id INT NOT NULL IDENTITY(1,1), 
  email VARCHAR(255),
  _password VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE notes(
  id INT NOT NULL,
  note_id INT NOT NULL,
  note_message VARCHAR(255),
  note_type VARCHAR(255),
  PRIMARY KEY(id),
  FOREIGN KEY (id)
  REFERENCES users (id)
);