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