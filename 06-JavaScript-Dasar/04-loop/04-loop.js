/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE

function Prima(angka){
    let prime = true;
    if(angka < 2){
        return false;
    }
    for(i = 2 ; i < angka ; i++){
        if(angka % i === 0){
            prime = false
            break;
        }
    }return prime
}

for(let angka = 0 ; angka <= 100 ; angka++){
    if (Prima(angka) === true){
        console.log(`${angka} Bilangan Prima` )
    }else{
        console.log(`${angka} Bukan Bilangan Prima`)
    }
}

console.log("==================BATAS===================")

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
function Prima(angka){
    let prime = true;
    if(angka < 2){
        return false;
    }
    for(i = 2 ; i < angka ; i++){
        if(angka % i === 0){
            prime = false
            break;
        }
    }return prime
}

let primeCounter = 0;
let fiftiethPrime;
let angka = 0;

while (primeCounter < 50){
    if (Prima(angka) == true){
        fiftiethPrime = angka
        primeCounter++
    }
    angka++
}
console.log(`${fiftiethPrime} Bilangan Prima ke 50`)


console.log("==================BATAS===================")


// /// Soal - 03
// /// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop

let oddCounter = 0;
let fiftiethOdd;
let ganjil_true = 1
// /// EDIT HERE
do {
    if (ganjil_true % 2 !== 0){
        fiftiethOdd = ganjil_true
        oddCounter++
    }ganjil_true ++

} while (oddCounter < 50);

console.log(`${fiftiethOdd} Bilangan Ganjil ke 50`)

