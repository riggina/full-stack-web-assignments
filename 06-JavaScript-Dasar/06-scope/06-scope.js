/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// - 3, Global Scope, Local Scope, and Block Scope
/// -   > Global Scope , variable yang bisa diakses oleh siapapun.
///     > Local Scope, variable yang hanya bisa diakses didalam blocks nya saja {}

/// Global Scope
let things = "Soccer"
function hobi(){
    return things
}
console.log(hobi(things))

/// Local Scope
function hobby(){
    let things = "Basketball"
    return things
}
console.log(hobby(things))

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - Mariah
/// - Ini merupakan global scope. Lalu pada functionnya sudah diberi parameter.///
/// dan saat di console log function printFirstName menginput nilai baru yaitu "Mariah Carey"///
/// yang akan di eksekusi didalam function, yang mana name nya akan di split, dan hanya di ambil///
/// array ke 0, dan saat di console.log yang tampil "Mariah"///



const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));