const specChars = [ '\u0021', '\u201D', '\u0023', '\u0024', '\u0025', '\u0026', '\u2019', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E' ]
const numChars = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
const capChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
const lwrChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

// An empty array used for password generation
var charSetArr = [];

// Gets a random integer number from 0 to indexLength
function getRandomIndex(indexLength) {
  
  // This code should be modified if there is a better randomizer available
  return Math.floor(Math.random() * indexLength);

}

function getPasswordString( arrOfCharArr ){
  let pswdStr = "";
}

// The if statements below build an array of arrays of the chars based on user input

// Add special characters check
if (true) {
  charSetArr.push(specChars);
}

// Add numerical characters check
if (true) {
  charSetArr.push(numChars);
}

// Add numerical characters check
if (true) {
  charSetArr.push(capChars);
}

// Add numerical characters check
if (true) {
  charSetArr.push(lwrChars);
}



// if the charSetArr is empty then something went terribly wrong and we should end the program
if (charSetArr.length == 0) {
  alert("Somethting went terrible wrong and your password was not generated!\nPlease try again or refresh the page.");
}

// if the array is not empty, we continue...



/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/