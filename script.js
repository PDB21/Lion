// Constants
const randomFunc = {
    upper: getRandomUpperCase,
    lower: getRandomLowerCase,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// //Generate Password Function
function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = "";


    const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0]);
console.log(typesArr)
    for (let i = 0; i < length; i++) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

console.log(finalPassword)
    return finalPassword;
}

//Function
function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomSymbol() {
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random() * symbol.length)];
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Add event listener to generate button
const generate = document.getElementById("generate")
generate.addEventListener('click', () => {
  
const userSelection = {
    uppercase: document.getElementById("upper").checked,
    lowercase: document.getElementById("lower").checked,
    number: document.getElementById("number").checked,
    special: document.getElementById("special").checked,
    length: parseInt(document.getElementById("length").value),
}
if (userSelection.length < 8 || userSelection.length > 128){
    alert("Password must be 8-128 characters");
    return
}
if (!userSelection.uppercase && !userSelection.lowercase && !userSelection.number && !userSelection.special){
    alert("Must check at least one value");
    return
}
console.log(userSelection)
const completePassword = generatePassword(userSelection.uppercase, userSelection.lowercase, userSelection.number, userSelection.special, userSelection.length) 
document.getElementById("password").value = completePassword;
});