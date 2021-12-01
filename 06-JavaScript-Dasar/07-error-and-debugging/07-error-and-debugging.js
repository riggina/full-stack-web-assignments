/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error, Ketika memberikan argumen yang tidak sesuai dengan tipe yang sudah di tentukan dan diharapkan oleh operator///
/// - Reference Error, dimana setiap variable let dan const tidak di inisialisasi dan terjadi error.///
/// - Range Error, Ketika memberikan value atau argument kedalam fungsi yang tidak mengizinkan range yang menyertakan nilai.///
/// - Syntax Error, kesalahan yang terjadi akibat salah tata bahasa atau jika ada kelasalahan pada strukturnya.///



/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - error di bagian, salaryWithConst dan salaryWithVar nya undefined
/// - Reference Error
/// - Karena variable nya tidak di inisialisasi terlebih dahulu.///
/// Maka, hasilnya akan undefined.

console.log(e.salaryWithVar)
console.log(e.salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

  