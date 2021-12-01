// SOAL 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(array) {
    let result = []
    for(let i of array){
        result.unshift(i)
    }
    return result
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

//SOAL 2
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(array) {
    const sum = array.reduce((a, b) => a + b);
    const average = sum/array.length;
    const result = array.filter(averages => {return averages > average});
        return `lebih besar dari rata rata ${result}`

}
    
console.log(getAverage(arr1))
console.log(getAverage(arr2))


//SOAL 3
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
function searchInArray(array, index) {
    const singleArray = array.reduce(function(prev, next){
        return prev.concat(next);
    })
    const theIndex = singleArray.indexOf(index);
    if (theIndex === -1){
        return null
    }else{
        return theIndex
    }
}  
console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
