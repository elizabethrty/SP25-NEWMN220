const applePrice = 0.49;

let pickedApples = 4;

// I picked more apples
pickedApples += 10;

// I dropped a few
pickedApples -= 4;

const totalForApples = applePrice * pickedApples;

console.log("Cost of Apples", totalForApples);

console.log("Too many apples", pickedApples > 5);

pickedApples -= 6;

// I dropped more apples
console.log("Too many apples", pickedApples > 5);

let rememberRouteHome = false;

console.log("Good to go home", pickedApples > 5 && rememberRouteHome);

let haveAMap = true;

console.log("Good to go home", rememberRouteHome || haveAMap);

console.log("Total for apples a number?", typeof totalForApples);

console.log("String of 5:", typeof String(5), 5);

let myAddress = "123";

// myAddress = myAddress + " Peach"
myAddress += " Peach" + " St";

console.log("My Address:", myAddress);

console.log("Street name has st:", myAddress.toLowerCase().includes("st"));

console.log("My Address", myAddress.replace("St", "Street"));

console.log("Elizabeth".length);

let myAge = "76";

myAge = Number(myAge);

myAge += 5 / 12;

console.log("My Age", myAge.toFixed(2));

console.log("Next Birthday:", Math.ceil(myAge));

console.log("My Favorite Number:", Math.round(Math.random() * 100));
