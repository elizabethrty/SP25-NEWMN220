const menuUlRef = document.getElementById("menu");
const cartTableRef = document.getElementById("cart");
const removeBtnRef = document.getElementById("remove-item")
const noItemsRef = document.getElementById("no-items");

const items = [
    "Hamburger Price: $2.99",
    "Cheeseburger Price: $3.99",
    "Cheese Pizza Price: $3.99",
    "Pepperoni Pizza Price: $4.99",
    "Sausage Pizza Price:4.99",
    "Caeser Salad Price: $3.99",
    "Fries Price: $1.99",
    "Onion Rings Price $2.49",
]

const cart = []

function removeItemFromCart() {
  cart.shift();
  showCart();
}

removeBtnRef.onclick = removeItemFromCart;
for (let i = 0; i < items.length; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = items[i];
}

function showCart() {
  cartTableRef.innerHTML = "";

  if (cart.length === 0) {
    noItemsRef.style.display = "block";
  } else {
    noItemsRef.style.display = "none";
  }

  for (let i = 0; i < cart.length; i++) {
    cartTableRef.innerHTML += "<li>" + cart[i] + "</li>";
  }  
}

function addItemToCart(e) {
  cart.push(e.target.dataset.name);
  showCart();
}

for (let i = 0; i < items.length; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = items[i];
  

  const newBtn = document.createElement("button");
  newBtn.innerText = "+";
  newBtn.dataset.name = items[i];
  newLi.appendChild(newBtn);
  newBtn.onclick = addItemToCart;
  menuUlRef.appendChild(newLi);

}

