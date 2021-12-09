Soal

1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
2. Mohon jelaskan arsitektur dari Node.js?
3. Ape perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?


Jawaban

1.  a) Merupakan sebuah runtime javascript yang berjalan pada engines V8 dan eksekusi kode javascript di luar web.
    b) Node Js merupakan runtime environment nya, sedangkan javascript merupakan bahasa pemrograman.

2.  Arsitektur Node JS
    a) Single Thread
        Javascript menggunakan konsep single thread, yang berarti hanya memiliki satu tumpukan panggilan yang digunakan untuk
        menjalankan program. Menggunakan call stack sebagai manajemen single threadnya.
    b) Even Loop
        Pada javascript terdapat event queue yang berguna sebagai penampung ketika terdapat perintah baru yang akan dieksekusi.
        Even loop akan memfasilitasi kondisi di atas, even loop akan memeriksa terus menerus, ketika queue kosong pada call stack
        sampai semua perintah selesai di eksekusi.
    c)Server Side Scripting
        Penggunaan script di dalam web server untuk merespon request dari browser yang digunakan oleh pengunjung.

3.  Perbedaan Built-in Module, External Module, dan Custom Module
    Built-in Module, node js memiliki built-in module yang dapat digunakan tanpa instalasi.
    External Module, node js dapat menginstall module external seperti express, mongoose, mysql, dan lainnya.
    Custom Module, kita bisa membuat atau mendefinisikan sendiri module pada node js.


4.  Contoh Built-in Module : url, os, path;
    Contoh External Module : express, mongoose, mysql;
    Contoh Custom Module : Untuk membuat custom module dapat seperti berikut,
        a) Pertama buat file, misalkan dengan nama calc.js yang berisi

        exports.add = function (x, y) {
            return x + y;
        };
        
        exports.sub = function (x, y) {
            return x - y;
        };
        
        exports.mult = function (x, y) {
            return x * y;
        };
        
        exports.div = function (x, y) {
            return x / y;
        };

        b) Setelah itu di file App.js, dapat di panggil modul-modul yang telah di buat pada file calc.js dengan menggunakan require. Contohnya seperti berikut,
        Pada file App.js
        var calculator = require('./calc');
        
        var x = 50, y = 20;
        
        console.log("Addition of 50 and 20 is "
                        + calculator.add(x, y));
        
        console.log("Subtraction of 50 and 20 is "
                        + calculator.sub(x, y));
        
        console.log("Multiplication of 50 and 20 is "
                        + calculator.mult(x, y));
        
        console.log("Division of 50 and 20 is " 
                        + calculator.div(x, y));


        c) Ketika di jalankan akan mengeluarkan output sebagai berikut,
        - Addition of 50 and 20 is 70
        - Subtraction of 50 and 20 is 30
        - Multiplication of 50 and 20 is 1000
        - Division of 50 and 20 is 2.5

            

            





