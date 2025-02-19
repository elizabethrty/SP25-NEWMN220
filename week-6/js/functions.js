function letsGo() {
    console.log("Function Time!");

}

letsGo();


function calculateTotal(itemPrice, taxRate = 0.07, discountRate = 0.1) {
    const groupsOfTwenty = Math.floor(itemPrice / 20);

let discount

    switch(groupsOfTwenty) {
       
        case 0:
            discount = 0;
            break;
        case 1:
            return discountRate * 0.5;
            break;
        case 2: 
            return discountRate;
        case 3:
            return discountRate * 2;
            break;
        default:
            return discountRate * 4;
    }

return (itemPrice * (1+ taxRate) * (1 - discount)).toFixed(2)

    // if (itemPrice > 100) {
    //     return itemPrice * (1 + taxRate) * (1 - discountRate);
    //  } else if (itemPrice > 50) {
    //     return itemPrice * (1 + taxRate) * (1 - discountRate);
    // } else {
    // return itemPrice * (1 + taxRate);
    // }
}

console.log("Kidney = $20, Tax Rate = 40%:" , calculateTotal(20, 0.4));

const items = [10,20];

function showItems() {
    const newSection = document.createElement("section");
    newSection.innerHTML = "<h4>Items</h4>"

    let total = 0;
    for( let i = 0; i < items.length; i++) {
        newSection.innerHTML += "<p>$" + items[i] + "</p>"
        total += items [i];
    }

    newSection.innerHTML += "<hr/>";

    newSection.innerHTML += "<p>$" + calculateTotal(total) + "</p>";

    document.body.appendChild(newSection);
}

showItems();