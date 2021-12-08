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
('Elex Media Komputindo','Jakarta'),
('Anak Hebat Indonesia','Jakarta');

CREATE TABLE penulis(
    id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(50),
    kota VARCHAR(50)
);

INSERT INTO penulis(nama, kota) VALUES
('Ir.Yuniar Supardi','Jawa Barat'),
('Jubilee Enterprise','Jakarta'),
('Adam Saputra, S.Si.','Jakarta Selatan');

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
('', '9786230019760', 'Semua Bisa Menjadi Programmer Javascript & Node.js', 1, 1, 60000, 9),
('', '9786020422411', 'Otodidak Pemrograman Javascript', 2, 1, 49500, 7),
('', '9786232443723', 'Buku Sakti HTML, CSS & Javascript', 3, 2, 39600, 8);



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
