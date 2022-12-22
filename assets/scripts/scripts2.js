let characterTypeList = {
    specChars : [ '\u0021', '\u201D', '\u0023', '\u0024', '\u0025', '\u0026', '\u2019', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E' ],
    numChars : [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ],
    capChars : [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
    lwrChars : [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
};  

let charTypeList2 = {
    specChars : [ '\u0021', '\u201D', '\u0023', '\u0024', '\u0025', '\u0026', '\u2019', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E' ],
    numChars : [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ],
    cyrilCapChars : [ "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я" ],
    cyrillwrChars : [ "а", "б", "в", "г", "д", "е", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я" ]
};

let charTypeList3 = {
    specChars : [ '\u0021', '\u201D', '\u0023', '\u0024', '\u0025', '\u0026', '\u2019', '\u0028', '\u0029', '\u002A', '\u002B', '\u002C', '\u002D', '\u002E', '\u002F', '\u003A', '\u003B', '\u003C', '\u003D', '\u003E', '\u003F', '\u0040', '\u005B', '\u005C', '\u005D', '\u005E', '\u005F', '\u0060', '\u007B', '\u007C', '\u007D', '\u007E' ],
    sanNumChars : [ "०", "१", "२", "३", "४", "५", "६", "७", "८", "९" ],
    sanChars : [ "क", "ख ", "ग", "घ", "ङ ", "च", "छ", "ज ", "झ", "ञ ", "ट ", "ठ", "ड ", "ढ", "ण", "त ", "थ", "द", "ध", "न ", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह" ]
};

let formDataObj1 = {
    meta : {
        charCount : "128",
        includeOneOfEach : true,
    },
    data : {
        specChars : "specChars",
        numChars : "numChars",
        capChars : "capChars", 
        lwrChars : "lwrChars"
    }
};

let formDataObj2 = {
        meta : {
            charCount : "20",
            includeOneOfEach : true,
        },
        data : {
            specChars : "specChars",
            numChars : "numChars",
            cyrilCapChars : "cyrilCapChars", 
            cyrillwrChars : "cyrillwrChars"
        }
};

let formDataObj3 = {
        meta: {
            charCount : 40,
            includeOneOfEach : false,
        },
        data : {
            index1 : "specChars",
            index2 : "sanNumChars",
            index2 : "sanChars"
        }
};


let passwordGenerator = {
    hasCharLists : false,
    characterTypesLists : {},
    characterTypes : {},
    
    setPasswordCharacterTypeList : function(obj) {
        this.characterTypesLists = Object.assign(obj);
        this.hasCharLists = true;
    },

    setCharacterTypes : function(obj) {
        this.characterTypesLists = Object.assign(obj)
    },

    getPasswordCharacterTypeList : function(){
        let ctl = characterTypesLists;
        return ctl;
    },

    getCharacterTypes() {
        let ct = characterTypes;
        return ct;
    },

    getFormData : function(){
        var formDataObj = {"meta" : {}, "data" : {} };
        
        // Get character count
        formDataObj.meta["charCount"] = document.getElementById("charCount").value;

        // Add inclusive characters check
        if (document.getElementById("includeOneOfEach").checked) {
            formDataObj.meta["includeOneOfEach"] = true;
        }

        // Add special characters check
        if (document.getElementById("specChars").checked) {
            formDataObj.data["specChars"] = "specChars"
        }

        // Add numerical characters check
        if (document.getElementById("numChars").checked) {
            formDataObj.data["numChars"] = ("numChars");
        }

        // Add numerical characters check
        if (document.getElementById("capChars").checked) {
            formDataObj.data["capChars"] = "capChars";
        }

        // Add numerical characters check
        if (document.getElementById("lwrChars").checked) {
            formDataObj.data["lwrChars"] = "lwrChars";
        }

        return formDataObj;
    },

    // if either includeCharacterTypes or charTypes is empty there is not enough
    // information to generate a password
    hasFormattedTypeLists : function(charTypesLists) {
        
        if( Object.keys(charTypesLists).length === 0 ) {
            return false;

        } else {

            for( const charTypesList in charTypesLists){
                var test = charTypesLists[charTypesList];

                if( Array.isArray(test) ){
                    
                    for( var i = 0; i < test.length; i++ ){
                        if( !(typeof test[i] === "string" && test[i].length === 1) ) {
                            return false;
                        }
                    }
                }
            }
        }
        this.hasCharLists = true;
        return true;
    },

    // Finds matching character types and returns an object with the indexed arrays
    characterTypeMatches : function(charTypes){
        var matchList = {};

        for( const charTypesList in this.characterTypesLists) {
            for( const charType in charTypes ) {
                if( charTypes[charType] === charTypesList ) {
                    matchList[charTypesList] = this.characterTypesLists[charTypesList];
                }
            }
        }
        return matchList;

    },
    
    // Gets a random integer number from 0 to indexLength
    // This code should be modified if there is a better randomizer available
    getRandomIndex : function(indexLength) {
    
        return Math.floor(Math.random() * indexLength);

    },

    // It is not possible to generate a password when one of each character type is
    // expected and the password length is less than the character types to be used
    // return true if impossible condition is met
    isImpossibleCondition : function( charTypes, pswdLength, boolIncludeAtLeastOne ){
        var arrTest = Object.keys(charTypes);

        if( arrTest.length > pswdLength && boolIncludeAtLeastOne ){
            return true;
        }
        return false;
    },

    getCompleteCharacterArray : function(matchList) {
        var charArr = [];

        for( key in matchList ){
            charArr = charArr.concat(matchList[key]);
        }
        return charArr;
    },

    // Testing if input is an integer number
    validNumber : function( formDataObj ){
        var test = Number.parseFloat(formDataObj.meta.charCount);
        // Must be a number
        if( Number.isNaN(test) ) {
            return false;

        // Must be an integer, this step tests for a decimal entry
        } else if ( (test - Math.floor(test)) > 0 ) {
            return false;

        // Must be within range
        } else if( test < 8 || test > 128 ){
            return false;
        }
        return true;
    },

    generatePassword : function( formDataObjParam ){
        var pswd = "";
        var counter = 0;
        var matchList = {};
        var charList = [];
        var formDataObj = {};

        if(formDataObjParam === undefined){
            formDataObj = Object.assign(this.getFormData());
        } else {
            formDataObj = Object.assign(formDataObjParam);
        }
        
        if( !this.validNumber( formDataObj )){
            alert("Number must be an integer between 8 - 128!");
            return pswd;
        }

        if( !this.hasFormattedTypeLists ){
            return false;
        }

        matchList = this.characterTypeMatches(formDataObj.data);
        if( Object.keys(matchList).length === 0 &&
            !this.isImpossibleCondition(formDataObj.data, formDataObj.meta["charCount"], formDataObj.meta["includeOneOfEach"]) ) {
            alert("Too many character types for the given password length! It is not possible to generate a password!\n\nPlease update the criteria.");
            return pswd;
        }

        if(formDataObj.meta["includeOneOfEach"]){
            for( const key in matchList ){
                pswd += matchList[key][this.getRandomIndex(matchList[key].length)];
                counter += 1;
            }
        }

        charList = this.getCompleteCharacterArray(matchList);
        while( counter < parseInt(formDataObj.meta["charCount"]) ){
            pswd += charList[this.getRandomIndex(charList.length)];
            counter += 1;
        }
        return pswd;
    }
}


passwordGenerator.setPasswordCharacterTypeList(charTypeList2);

var generateBtn = document.querySelector("#generate");

document.getElementById("passwordForm").onkeydown = function(k) {
  if (k.code == "Enter"){
    writePassword();
    
    // prevent form reset when Enter is pressed
    event.preventDefault();
  }
}

// Write password to the #password input
function writePassword() {
    passwordGenerator.setPasswordCharacterTypeList(characterTypeList);
  
    var password = passwordGenerator.generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Console log demo - cyrillic
console.log("Adding 'charTypeList2' to passwordGenerator using 'setPasswordCharacterTypeList' function.");
passwordGenerator.setPasswordCharacterTypeList(charTypeList2);
console.log("Passing 'formDataObj2' to passwordGenerator using the optional parameter in 'generatePassword' function.");
console.log("'charTypeList2' and 'formDataObj2' are cyrillic character sets.");
console.log("Generating password...");
console.log(passwordGenerator.generatePassword(formDataObj2));

// Console log demo - Devanagari
console.log("Adding 'charTypeList3' to passwordGenerator using 'setPasswordCharacterTypeList' function.");
passwordGenerator.setPasswordCharacterTypeList(charTypeList3);
console.log("Passing 'formDataObj3' to passwordGenerator using the optional parameter in 'generatePassword' function.");
console.log("'charTypeList3' and 'formDataObj3' are Devanagari (Hindi) character sets.");
console.log("Generating password...");
console.log(passwordGenerator.generatePassword(formDataObj3));

// Console log demo - reset to standard
console.log("Adding 'characterTypeList' back to passwordGenerator.");
console.log("This ensures the English character set is used for the webpage demo.");
passwordGenerator.setPasswordCharacterTypeList(characterTypeList);
console.log("One last call to generatePasswword to doublecheck.");
console.log(passwordGenerator.generatePassword(formDataObj1));
console.log("Whew! That's a long password!");
console.log("Enjoy the Password Generator.");