/**********************************************************/
/*********** MODULES - MORSE CODE - STARTER CODE **********/
/****************** by Carrie Jones, TLF ******************/
/**********************************************************/

/*  
    Students - feel free to fork this to your own repl and practice! 
    For more JS examples and practice problems, see the following 
	document: https://tinyurl.com/y3bn6st4 

	Shout-out! This exercise originally provided in part by LaunchCode JS instructor Will Farrell.
*/

/*
	Modules are chunks of code you can import into your codebase. These can be written by you, your team, or by somebody on the internet you have never met. This exercise focuses on a module you create with multiple functions. 
*/

/*
  	STEPS:
	1. Write a function in morse.js to convert a single character to Morse code. 
	2. Write a function to convert a word to Morse code.
	3. Write a function to convert an entire sentence (or more) to Morse code.
	4. Export morse functions to this file and test them in template literals as shown below. 

	Note: In these files, "char" is used to refer to general idea of a character,
	including letters, numbers, and punctuation. It does NOT refer to the char data type. 

	DEMO:
		https://Modules-MorseCode.carolinerose.repl.run
	SOLUTION: 
		https://repl.it/@CarolineRose/Modules-MorseCode
*/


// Import from morse.js
const morse = require("./morse");

/** TRY OUT INDIVIDUAL FUNCTIONS **/

let translated; // will be used several times

console.log("Here are a few examples of how the program translates into Morse code:\n")

// Store a single character in a variable, char, then call translateChar()
// store a single character in a new variable, char
let char = "j";

// call the function and store returned value in variable translated
translated = morse.translateChar(char);
console.log(`In Morse code, the letter '${char}' is: \n${translated}\n`);

// Store a single word in a variable, word, then call translateWord()
// store a single word in a new variable, word
let word = "javascript";

// call the function and store returned value in variable translated
translated = morse.translateWord(word);
console.log(`In Morse code, the word '${word}' is: \n${translated}\n`);

// Store a phrase, sentence, or paragraph in a variable, phrase, then call translateAll()
// store a phrase in a new variable, phrase
let phrase = "javascript is great";

// call the function and store returned value in variable translated
translated = morse.translateAll(phrase);
console.log(`In Morse code, the phrase '${phrase}' is: \n${translated}\n`);

console.log("---------------------------------------------\n");

/** BONUS MISSION **/

/*
	Want to take it a step further? Write an simple interactive program below that
	accepts user input and uses your translateAll() function to return the 
	Morse code transation. Set up the program to loop and keep asking the user for another phrase until they end it.
*/

const input = require("readline-sync");
const { translateChar, translateWord, translateAll } = require("./morse");

function runProgram() {

	// Write intro text
	let intro = `
<<MORSE CODE TRANSLATOR>>  
Enter a letter, word, or phrase to receive a translated Morse code message to take down to your friendly neighborhood telegraph operator.`
    console.log(intro);
	let translated;
    // Continue asking for text to translate until user wants to end the program
    while (true) {
        let phrase = input.question("Your Phrase: ");
        translated = translateAll(phrase);
        console.log(`In Morse code, the phrase '${phrase}' is: \n${translated}\n`);

        let continueTranslating = input.question("Would you like to continue translating? (Y/N) ");
        if (continueTranslating.toLowerCase().includes("n")) { // can accept a "no"
            break;
        }
    }
}

// Ready to go!
runProgram();