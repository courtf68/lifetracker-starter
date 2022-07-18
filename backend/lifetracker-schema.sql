CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
   firstName  TEXT NOT NULL,
   lastName    TEXT NOT NULL,
   email        TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
   username     TEXT NOT NULL UNIQUE,
   password     TEXT NOT NULL
);
CREATE TABLE sleep (
    id SERIAL PRIMARY KEY,
    startTime TIMESTAMP NOT NULL,
    endTime TIMESTAMP NOT NULL,
 
);

CREATE TABLE nutrition (
    id SERIAL PRIMARY KEY,
    n_id INTEGER NOT NULL,
    n_name   TEXT NOT NULL,
    category TEXT NOT NULL,
    calories INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    image_url TEXT NOT NULL,
    FOREIGN KEY (n_id) REFERENCES users(id) ON DELETE CASCADE
);