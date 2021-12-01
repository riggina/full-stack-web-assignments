// 1. Apa itu synchronous?
//// Synchronous merupakan operasi yang berjalan setelah operasi sebelumnya selesai
//// dijalankan. 
// 2. Apa itu asynchronous?
//// Asynchronous merupakan kebalikan dari synchronous. Operasi bisa berjalan secara
//// bersamaan di asyncronous tanpa harus menunggu proses yang lain selesai.
//// Asynchronous merupakan 
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
//// Ya
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
///// 
// first log:  1
// first log:  2
// first log:  3
// first log:  4
// first log:  5
// second log:  6
// second log:  6
// second log:  6
// second log:  6
// second log:  6
/////
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
//// console.log pertama langsung menampilkan. Sedangkan console log kedua berada didalam call back function yang mana call back function itu 
//// bersifat "call me back". 
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i<=5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
  }

  