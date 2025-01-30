// const because item price will not change
const itemPrice = 40.99;

const salesTax = 0.07;

const discountRate = 0.10;

// let used for the taxed total and discounted total as it has yet to be calculated
let taxedTotal = itemPrice * (1 + salesTax);

console.log("Total after Tax", taxedTotal);

let discountedTotal = itemPrice * (1 + salesTax) * (1 - discountRate);

console.log("Total after Discount", discountedTotal)