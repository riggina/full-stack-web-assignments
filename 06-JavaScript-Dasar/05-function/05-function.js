/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) {
    if (salary < 5000000){
        return salary * 0;
    }else if (salary >= 5000000 && salary < 10000000){
        return salary * 0.05;
    }else if (salary >= 10000000 && salary < 20000000){
        return salary * 0.1;
    }else{
        return salary * 0.2;
    }
    // return Number
 }

 salary = 5000000
 console.log(taxCalc(salary))


/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(height,weight){
    let bmi = (weight/(height**2)) * 10000
    let status = "";
    if (bmi < 18.5){
        status = "underweight"
    }else if (bmi > 18.5 && bmi < 24.9){
        status = "normal"
    }else if (bmi > 25 && bmi < 29.9){
        status = "over weight"
    }else if(bmi > 30 && bmi < 34.9){
        status = "obeses"
    }else{
        status = "extreamly obeses"
    }
    return bmi,status
}
weight = 80
height = 200
console.log(checkBMI(height,weight))


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(sentence) {
    const new_sentence = sentence.split(' '); //Spasi berpengaruh 
    for (let i = 0; i < new_sentence.length ; i++){
        new_sentence[i] = new_sentence[i].charAt(0).toUpperCase() + new_sentence[i].slice(1); //Bisa pake substring juga
    }
    return new_sentence.join(' ') //Spasi memisahkan 
    
}

sentence = "hello bandung"
console.log(convToUpperCase(sentence))

/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
let toLowerWord;
let theWord;
function firstNonRepeatedChar(word) {
    for (let i = 0; i < word.length; i++){
        toLowerWord = word.toLowerCase()
        theWord = toLowerWord[i];
        if (theWord == " "){
            return ("kata tidak boleh dipisah")
        }
    }

    for (let i = 0; i < word.length; i++){
        toLowerWord = word.toLowerCase()
        theWord = toLowerWord[i];
        let check = true;
        for (let j = 0 ; j < word.length ; j++){
            if (theWord == word[j] && j != i){
                check = false
            break;
            }
        }
        if (check === true){
            return theWord
        }
    }
    return '" "'

}
console.log(firstNonRepeatedChar("hello world"))
console.log(firstNonRepeatedChar("alloha"))
