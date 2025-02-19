const testScores = [
    "95",
    "72",
    "88",
    "45",
    "60",
    "79",
    "82",
    "91",
    "50",
    "38",
];

const testScoresListUlRef = document.getElementById("test-scores");

for (let i = 0; i < testScores.length; i++){
    console.log("For Loop:", testScores[i]);
    testScoresListUlRef.innerHTML += "<li>" + testScores[i] + "</li>";
}

let sumOfGrades = 0;
for (let i = 0; i < testScores.length; i++) {
    const grade = Number(testScores[i]);
    sumOfGrades += grade;
    
}

const average = sumOfGrades / testScores.length;

const averageScoreHTML = document.getElementById("average-score");

averageScoreHTML.textContent = average.toFixed(1);


    

