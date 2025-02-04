// Using const because the password won't change
const passwordText = "(d0nteatTheScript)";

const startsWithSpace = false;

const moreThanEight = true;

const containsEat = true;

console.log("Password begins with space:", passwordText.includes(" "))

console.log("Password is > 8 characters:", passwordText >= 8)

console.log("Password contains the word 'eat'", passwordText.includes("eat"))