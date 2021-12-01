//SOAL 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(array) {
    if(array.length == 0 ){
        return 0
    }else{
        return array[0] + sumOfArray(array.slice(1))
    }
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));







//SOAL 2
const avg1 = Math.floor((sumOfArray(arr1))/arr1.length);
const avg2 = Math.floor((sumOfArray(arr2))/arr2.length);
function countAboveAvg(arr,avg) {
    const result = arr.filter(averages => {return averages >= avg});
        return `Ada 3 elemen yang melebihi atau sama dengan nilai rata-rata yaitu ${result}`
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);







//SOAL 3
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
    if(arr.length == 0){
        console.log("angka tidak ditemukan")
        return
    }else if(arr[arr.length - 1] == num){
        console.log(`angka ditemuka pada index : ${arr.length - 1}`);
        return  
    }
    return searchInArray(arr.slice(0,-1),num)
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);







//SOAL 4
function trianglePattern(char, n) {
    if(char === 0){
        return ;
    }
    let result = "";
    for(let i = 0; i < n; i++ ){
        if(i < char - 1){
            result += " ";
        }else{
            result += String.fromCharCode(64 + (n - char +(i - char)+2))
        }
    }
    console.log(result);
    trianglePattern(char - 1, n)
};


trianglePattern(5, 5);