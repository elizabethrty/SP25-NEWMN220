// References to DOM
const detailsSectionRef = document.querySelector("#details");

// Data
const pokemon = {
    name: "Ponyta",
    type: "Fire",
    weaknesses: ["Water", "Ground", "Rock"], 
};
// Data structure will look similar to this for midterm. Previous assignments & physical notes can be used for midterm.
const myParty = [
    { name: "Ponyta", type: "Fire" },
    { name: "Chimchar", type: "Fire" },
    { name: "Meowth", type: "Normal" },
    { name: "Houndoom", type: "Dark | Fire" },
];
//

// console.log("My starter pokemon", pokemon);
// console.log("My pokemon's type:", pokemon.type);

// console.log("First pokemon in party", myParty[0])
// console.log("Last pokemon's name:", myParty[myParty.length - 1].name)

for(let i = 0; i < myParty.length; i++){
  const currentPokemon = myParty[i];
  detailsSectionRef.innerHTML += "<div>";
  detailsSectionRef.innerHTML += "<h4>" + currentPokemon.name + "</h4>";
  detailsSectionRef.innerHTML += "<p>Type(s):" + currentPokemon.type + "</p>";
  detailsSectionRef.innerHTML += "</div>";
}

const items = {
  name: "hamburger",
  type: "2.99",
  special: ["Water", "Ground", "Rock"],
};
// Data structure will look similar to this for midterm. Previous assignments & physical notes can be used for midterm.
const myParty = [
  { name: "Ponyta", type: "Fire" },
  { name: "Chimchar", type: "Fire" },
  { name: "Meowth", type: "Normal" },
  { name: "Houndoom", type: "Dark | Fire" },
];