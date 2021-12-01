/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok

const gajipokok = 5000000;
const GajiUtama = (gajipokok + (gajipokok * 10/100) + (gajipokok * 5/100)) ;
const pengeluaran = (750000 + 2000000 + 1000000 + 250000);

/// Sisa Gaji
const sisaGaji = (GajiUtama - pengeluaran);
console.log(sisaGaji) 



/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = true;
if (oneInString === oneInNumber){
    console.log(isSame)
} else{
    console.log(!isSame)
}


/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = true;
if (studentA >= studentB){
    console.log(isHigher)
}else{
    console.log(!isHigher)
}


/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = true;
if (oneInString === oneInNumber){
    console.log(final)
} else{
    console.log(!final)
}