// const because item price will not change
const itemPrice = 40.99;

const salesTax = 0.07;

const discountRate = 0.10;

// const used for the taxed total, discounted total, and eligibility as it will not change
const taxedTotal = itemPrice * (1 + salesTax);

console.log("Total after Tax", taxedTotal);

const isEligible = taxedTotal > 50

const discountedTotal = itemPrice * (1 + salesTax) * (1 - discountRate);

console.log("Total after Discount", discountedTotal)

console.log("Qualifies for Discount", isEligible)