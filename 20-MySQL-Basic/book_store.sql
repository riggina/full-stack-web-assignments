-- Show Database
SHOW DATABASES;

-- Create Database
CREATE DATABASE bookstore;

-- Use Database
USE bookstore;

-- Show Table
SHOW TABLES;

-- Create Table
CREATE TABLE books(
    id INT AUTO_INCREMENT PRIMARY KEY,
    author1 VARCHAR(100) NOT NULL,
    author2 VARCHAR(100),
    author3 VARCHAR(100),
    title VARCHAR(100),
    description TEXT,
    place_sell CHAR(3),
    stock INT DEFAULT 0,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Update Column Table
ALTER TABLE books
ADD price INT DEFAULT 0,
ADD status ENUM('available', 'out of stock', 'limited'),
DROP COLUMN place_sell;

-- Insert 3 Data
INSERT INTO books VALUES
('','Dazai','','','No Longer Human','the poignant and fascinating story of a young man who is caught between the breakup of the traditions of a northern Japanese aristocratic family and the impact of Western ideas', 100, DEFAULT, 215280, 'available'),
('', 'Fyodor Dostoevsky','','','A Gentle Creature','The piece comes with the subtitle of "A Fantastic Story", and it chronicles the relationship between a pawnbroker and a girl that frequents his shop. The story was inspired by a news report that Dostoyevsky read in April 1876 about the suicide of a seamstress. Dostoyevsky referred to it as a "meek suicide" that "keeps haunting you for a long time."', 150, DEFAULT, 380160, 'limited'),
('', 'Herman Melville','','','Moby Dick','Moby-Dick; or, The Whale is an 1851 novel by American writer Herman Melville. The book is the sailor Ishmael`s narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship`s previous voyage bit off Ahab`s leg at the knee.', 200, DEFAULT, 85680, 'out of stock');

-- Select All Row
SELECT * FROM books;

-- Select with ALIAS
SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

-- Select with Where
SELECT * FROM books WHERE id = 3;

-- Select (logic AND)
SELECT * FROM books WHERE stock > 100 AND stock <= 200;

-- Select (logic OR)
SELECT * FROM books WHERE status = 'available' OR status 'out of stock';

-- Select (logic NOT)
SELECT * FROM books WHERE price != 85680;

-- Select (with ASC)
SELECT * FROM books ORDER BY id ASC;

-- Select (with limit)
SELECT * FROM books LIMIT 2;

-- Update Column
UPDATE books SET author1 = 'Dazai Osamu', price = 220000 WHERE id = 1;

-- Delete
DELETE FROM books WHERE id = 3;




