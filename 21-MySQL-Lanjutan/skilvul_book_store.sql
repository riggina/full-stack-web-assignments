-- Create Database
CREATE DATABASE skilvulbookstore;

USE skilvulbookstore;

-- Create Table
CREATE TABLE penerbit(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

INSERT INTO penerbit(nama, kota) VALUES
('',''),
('',''),
('','');

CREATE TABLE penulis(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

INSERT INTO penulis(nama, kota) VALUES
('',''),
('',''),
('','');

CREATE TABLE buku(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    isbn VARCHAR(50),
    judul VARCHAR(50),
    penulis VARCHAR(50),
    penerbit INT(10),
    harga INT(10),
    stock INT(10),
    CONSTRAINT fk_penerbit FOREIGN KEY(penerbit) REFERENCES penerbit(id),
    CONSTRAINT fk_penulis FOREIGN KEY(penulis) REFERENCES penulis(id)
);

INSERT INTO buku VALUES
('',)

-- Inner Join
SELECT buku.id, isbn, judul, penulis, penerbit.nama AS penerbit, harga, stock FROM buku INNER JOIN penerbit ON buku.penerbit = penerbit.id;

-- Left Join
SELECT buku.id, isbn, judul, penulis, penerbit.nama AS penerbit, harga, stock FROM buku LEFT JOIN penerbit ON buku.penerbit = penerbit.id;

-- Right Join
SELECT buku.id, isbn, judul, penulis, penerbit.nama AS penerbit, harga, stock FROM buku RIGHT JOIN penerbit ON buku.penerbit = penerbit.id;

-- Max
SELECT MAX(harga)
FROM buku
WHERE stock < 10;

-- Min
SELECT MIN(harga)
FROM buku;

-- Count
SELECT COUNT(*)
FROM buku
WHERE harga < 100000;
