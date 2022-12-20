const specChars = [ '\u0021', '\u201D', '\u0023', '\u0024', '\u0025', '\u0026', '\u2019', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E' ]
const numChars = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
const capChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
const lwrChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

var charSetArr = []; // holds the set(s) of characters to generate a password


// This function expects a two dimensional array of characters and returns a string
// of random characters to be used as a password
// throws errors if:
//    -any dimensions of the array is < 1 element
//    -the total chars to return is less than the set(s) of characters
function getPasswordString( arrOfCharsArr, totalChars ){
  let charList = [];
  let pswdStr = "";
  let counter = 0;

  // Error handling

  // THROW ERROR: if arrOfCharsArr is empty then there are no characters to use
  if (arrOfCharsArr.length == 0) {
    throw "The array of character sets is empty!";
  }

  // THROW ERROR: if the number of character sets is smaller than the 
  if (arrOfCharsArr.length > totalChars) {
    throw "The required character sets is larger than the password size!";
  }

  // THROW ERROR: if any character set is empty
  for (var i = 0; i < arrOfCharsArr.length; i++) {
    if ( arrOfCharsArr[i].length == 0 ) {
      throw "All character sets must contain at least 1 character!";
    }
  }


  // Helper functions

  // Gets a random integer number from 0 to indexLength
  function getRandomIndex(indexLength) {
    
    // This code should be modified if there is a better randomizer available
    // Math.random() may not be the best in some use cases
    return Math.floor(Math.random() * indexLength);

  } 

  // Randomizes the string to ensure the first chars are more random
  function randomizeStr(str) {
    let strArr = [];
    let rtnStr = "";

    strArr = str.split("");
    strArr.sort(function() {
      return Math.random();
    });

    rtnStr = strArr.join("");

    return rtnStr; 
  }


  // Begin building password

  // Garantee at least 1 occurence of each character set provided
  // and build a one dimensional array of characters
  for (var i = 0; i < arrOfCharsArr.length; i++) {
    pswdStr += arrOfCharsArr[i][ getRandomIndex(arrOfCharsArr[i].length) ];
    charList = charList.concat(arrOfCharsArr[i]);
    counter++;
  }

  // randomly select from the entire set of characters to build the rest if the
  // password
  while (counter < totalChars) {
    pswdStr += charList[ getRandomIndex( charList.length ) ];
    counter++;
  }

  // Randomize string to ensure first chars are random too  
  pswdStr = randomizeStr(pswdStr);

  return pswdStr;
}

// The if statements below build an array of arrays of the chars based on user input
function setCharSetsArray(){
  charSetArr = [];
  // Add special characters check
  if (document.getElementById("specChars").checked) {
    charSetArr.push(specChars);
  }

  // Add numerical characters check
  if (document.getElementById("numChars").checked) {
    charSetArr.push(numChars);
  }

  // Add numerical characters check
  if (document.getElementById("capChars").checked) {
    charSetArr.push(capChars);
  }

  // Add numerical characters check
  if (document.getElementById("lwrChars").checked) {
    charSetArr.push(lwrChars);
  }
}

function generatePassword() {
  let charCount = 0;

  charCount = document.getElementById("charCount").value;

  if (charCount >= 8 && charCount <= 128) {
    setCharSetsArray();
    try {
      test = getPasswordString( charSetArr, charCount );
      console.log(test);
    } catch(e) {
      console.log(e);
    } 
  } else {
    alert("Your password must be between 8 and 128!");
  }
}
// console.log(document.querySelector("specChars").checked);

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
