//SOAL 1
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
      "coffee",
      "jamu temulawak",
      "tea"
    ],
    greeting: function() {
      console.log("hello world")
    }
  }

person.name = "Riggina Adriani Oceania"
person.favDrinks[1] = "tap water"
person.greeting = function(name){
    return `Hello ${name}`
}
console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));








//SOAL 2
function getObjectValue(obj, path) {
    const thePath = path.split('.')
    for(let i = 0; i < thePath.length; i++){
        obj = obj[thePath[i]]
    }
    if (obj == undefined){
        return null
    }
    return obj
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)









//SOAL 3
const items = [
    {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1,
    },
    {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2,
    },
    {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3,
    },
  ];
  
  const calculateIncome = (items) => {
    let arrayBTC = []
    let arrayETH = []
    let arrayDOGE = []

    for(let i = 0; i < items.length; i++){
      let sumBTC = items[i].btc.sell - items[i].btc.buy
      let sumETH = items[i].eth.sell - items[i].eth.buy
      let sumDOGE = items[i].doge.sell - items[i].doge.buy
      arrayBTC.push(sumBTC)
      arrayETH.push(sumETH)
      arrayDOGE.push(sumDOGE)
    }
    const reduce = (previousValue, currentValue) => previousValue + currentValue;
    items = {
      btc : arrayBTC.reduce(reduce),
      eth : arrayETH.reduce(reduce),
      doge : arrayDOGE.reduce(reduce)
    }

    return items
      
  }
  
  console.log(calculateIncome(items))