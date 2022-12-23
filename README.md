# Password Generator

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    

## Description 

[See Deployed Site](https://bhaskell7901.github.io/pswd-generator/)

Welcome to the Password Generator!  Feel free to try it out at the deployed site above.  You can use the form to generate a password or you can go old school and use prompts to generate a password.  Just check the **Enable Prompting** checkbox and click the **Generate Password** button.

Use the form (or the prompts) to set the criteria for your password (e.g., having special characters, only capital letter, etc.).  You can also see a ```console``` demo of the object handling to generate passwords using characters in other languages.  Be sure to use your dev tools to check it out.

![Site Langing Page](./site.gif)


## Table of Contents (Optional)

* [Overview and Strategy](#overview-and-strategy)
* [Additional Features](#additional-features)
* [Password Generator: Behind the Scenes](#password-generator:-behind-the-scenes)
* [The formDataObj Object](#the-formdataobj-object)
* [The characterTypeList Object](#the-chractertypelist-object)
* [The passwordGenerator Object](#the-passwordgenerator-object)
* [Usage](#usage)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)
* [License](#license)


## Overview and Strategies

As general overview of the ```passwordGenerator``` flow is:
1. Create a ```passwordGenerator``` object
2. Pass in a ```characterTypeList``` object to set the language
3. Get user input to define a ```formDataObj``` object (aka password definition)
4. Pass in a ```formDataObj``` 
4. Generate a password with the given language and definition

For the Password Generator project, I wanted to create a password generator that was flexible enough to be used by people anywhere, so I focused on making the application to be flexible from a language perspective.  A ```characterTypeList``` object is used to encapsulate the language to be used to generate a password.  This could be contextual to a country, a region, or just a language preference by the user.  A ```formDataObj``` object is use to determine, given a language definition, what characteristics of that language's characters should be used to generate the password, i.e.: how long it should be, inclusion of special characters, etc.  The ```passwordGenerator``` object uses these two objects to generate a random password that is language specific and criteria specific to the user.

I also wanted to explore form data, and capturing form data from a webpage.  I expanded on the HTML and added a form to get user data to build a ```formDataObj``` object to pass to the ```passwordGenerator``` object.  The form functionality is explained in more detail below.

One of the criteria for the project was to incorporate ```alert```, ```prompt```, and ```confirm``` window inputs.  To meet the criteria I enable it as a feature on the form.  Once the checkbox is checked, the form inputs are ignored and the user will be prompted for there input.


## The formDataObj Object

The ```formDataObj``` is the object used to capture the user input.  The basic structure looks like:

```javascript

formDataObj = {
    meta : {},
    data : {}
}

```

The ```meta``` property contains the password length a boolean flag to determine whether to require at least one instance of a character set.  The ```data``` property contains keys as strings to the ```characterTypeList``` object.  They are used to determine what character sets to use.  If if they are not present in the data propery, then they are not used.

Here is what a fully formed ```formDataObj``` might look like:

```javascript

formDataObj = {
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

```

## The characterTypeList Object

The ```characterTypeList``` is used to define the pool of characters that can be used to generate a password.  The basic structure looks like:

```javasctript

characterTypeList = { 
    specChars : [],
    numChars : [],
    capChars : [], 
    lwrChars : [], 
};

```

Each property is an array of single characters.  The property names are used by the formDataObj to determine when to include the arrays in password generation.


## The passwordGenerator Object

The passwordGenerator flow:

Once the ```passwordGenerator``` is created, a ```characterTypeList``` is passed in using the ```setPasswordCharacterTypeList()``` function to set the language for the password to be generated from.  If the ```characterTypeList``` has the proper formatting (an object list of single character arrays), then it is added to the property of the same name and the ```hasCharLists``` value is set to true and the function returns true.  

If not, then ```hasCharLists``` 

### Functions

**setPasswordCharacterTypeList(obj)**
Validates the object being passed in is a ```characterTypeList``` sets the object in the generator if true

**getPasswordCharacterTypeList()**
Returns a copy of this object's ```characterTypeList```

**getFormData()**
Gets the form data from the HTML page and returns a ```formDataObj```

**hasFormattedTypeLists(charTypesLists)**
Validates if a ```characterTypeList``` is properly formatted

**characterTypeMatches(charTypes)**
Compares the index references from the ```data``` property of the ```formDataObj``` to the ```characterTypeList``` and returns matching arrays for generating passwords

**getRandomIndex(indexLength)**
A function to randomly gnerate a number to refer to a character array

**isImpossibleCondition( charTypes, pswdLength, boolIncludeAtLeastOne )**
Tests for an impossible condition where a user may specify using more character sets than there are characters in the password.  An exmple would be specifying using the sets: special characters, numbers and upper case letters; including at least one of each character and setting the password length to 2.  In this case, there are more characters sets than there are password chracters and we cannot ensure at least one of each character in a character set will be used.  For this assingment, that condition is not possible.  However, I wanted the ```passwordGenerator``` to be flexible in other use cases.

**getCompleteCharacterArray(matchList)**
Concatenates all the character set arrays into a single array to ensure more random character generation.  All of the characters are contained in sets.  A strategy might be to randomly select a set, then randomly select a character within that set.  However, this would lead to unwanted character weighting making a less secure password.  I chose to combine all the usable to characters into a single array and randomly select a character from the single array.


**validNumber(formDataObj)**
Determines whether the input password length is a number or not.

**promptForNumber()**
Prompts the user to input a number

**promptForData**
Confirms if the user wants to include which character sets

**getInputFromPrompts**
Handles the prompting feature of the ```passwordGenerator``` for getting user input through window prompts

**generatePassword**
Generates a random password 
















The Password Generator takes a set of character lists and definition criteria to construct a random password.  Three objects are used: the ```passwordGenerator```, the ```characterTypeList```, and the ```formDataObj```.  The ```passwordGenerator``` takes the ```characterTypeList``` and the ```formDataObj``` as inputs to generate a random password.


The character lists are defined as a ```characterTypeList``` object, and can be passed to the ```passwordGenerator``` object to define what possible characters can be used to generate password.  The definition criteria are defined in a ```formDataObj``` and determine what characters from the ```characterTypeList``` should be used to generate a password.  The ```passwordGenerator``` object uses ```get``` and ```set``` functions to set the character lists and return a copy of the character list currently set in the ```passwordGenerator```.  The ```formDataObj``` can be generator

User input is used to determine how many characters the password should be and what chracters should be used to generate the password (e.g. uppercase, lowercase, numbers, special, etc.).



## Password Generator: Behind the Scenes

Behind the scenes, the Password Generator creates 3 ```characterTypeList``` and ```formDataObj``` objects.  One using English characters, one using Cyrillic characters, and one using Devanagari (Hindi).  A single ```passwordGenerator``` object is created and used for the demo and for the live site example.

On page loading, a demo is run using ```console.log``` to show password generation outputs after swapping languages.  The language is the put back to English for the live site.  The outputs of the demo can be viewed in the console.


## Usage 

Provide instructions and examples for use. Include screenshots as needed. 

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

```md
![alt text](assets/images/screenshot.png)
```


## Learning Points 


This is a good place to Explain what you Learned by creating this application.
This is a great way to remind about all of the Complex Skills you now have.
If the user is less experienced than you:
They will be impressed by what you can do!

If the user is more experienced than you:
They will be impressed by what you can do!

Remember, it is easy to forget exactly how Valuable and Impressive your skills are, as well as How Much You’ve Learned!
So quantify that here!


## Additional Features

* Ability to switch between using the form and prompting using the *Enable Prompting* checkbox
* Ability to force inclusiveness or not for all character types chosen using the *Inclusive* checkbox
* Using ```get``` and ```set``` functions to set language and evaluate the language externally

Three ways to get input:
1. Using form input
2. Using prompts
3. Passing a ```formDataObj``` to ```passwordGenerator``` as an optional parameter to the ```generatePassword``` function


## Author Info

```md
### Farley Wittles 


* [Portfolio](https://youtu.be/bHX54GCrDB4)
* [LinkedIn](https://youtu.be/bHX54GCrDB4)
* [Github](https://youtu.be/bHX54GCrDB4)
```

The user has looked through your whole README, and gotten familiar with your application. 
This is where you take credit, and make it easy for them to learn more about you!
Direct them to the following:
- Your GitHub Profile
- Your LinkedIn
- Your Portfolio Website
- And Anything Else You Want!

Give credit where credit is due! 

If you Pseudocode or Pair Program with someone else, give them kudos in your Contributors section!


## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

