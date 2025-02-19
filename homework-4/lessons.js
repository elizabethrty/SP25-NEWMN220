const instrumentList = [
    "Piano",
    "Guitar",
    "Violin",
    "Drums",
    "Saxophone",
    "Flute",
];

const instrumentListUlRef = document.getElementById("instruments");

for (let i = 0; i < instrumentList.length; i++){
    console.log("For Loop:", instrumentList[i]);
    instrumentListUlRef.innerHTML += "<li>" + instrumentList[i] + "</li>";
}
