CREATE TABLE esgames (
    ID SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    popularity VARCHAR(255) NOT NULL,
    releaseYear INTEGER NOT NULL,
    completionHours INTEGER NOT NULL
);

INSERT INTO esgames (title,popularity,releaseYear,completionHours)
VALUES ("Elder Scrolls 1: Arena", "Not very popular", 1994, 44);