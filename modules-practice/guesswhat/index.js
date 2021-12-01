/*************************************************/
/***************** GUESS WHAT? *******************/
/************* by Carrie Jones, TLF **************/
/*************************************************/

/*  
	Students - feel free to fork this to your own repl and practice! For more JS examples and practice problems, see the following document: https://tinyurl.com/y3bn6st4 
*/

/*
	This is a little program I created when thinking about practice problems for students to prep for Graded Assignment 2, but it grew a little too big for that, and I decided to add a module. So it's just here for students who want a bit of a challenge.

	This loosely follows the guidelines in this document for how to approach a multi-function program: 
		https://tinyurl.com/xt5ux8h6

	See instructions in instructions.txt.

	Starter Code:
		https://repl.it/@CarolineRose/GuessWhat-StarterCode
*/


/**** IMPORTS ****/

// Import readline-sync library 
const input = require("readline-sync");

// Import puzzlesArray from puzzles.js 
const puzzlesArray = require("./puzzles");

/**** DATA & GLOBAL VARIABLES ****/

// Write a function to convert the puzzle data from an array of arrays into an array of objects with category and phrase properties.
function puzzleConverter(arr) {
    // this original code created an array of objects of property: category and value: array of phrases. not what the exercise intended.
    // let out = {};
    // for (item of arr) {
    //     if (item[0] in out === false) {
    //         // if we don't have a category "item[0]" create one with an array with one element: "item[1]"
    //         out[item[0]] = [ item[1] ];  
    //     } else {
    //         out[item[0]].push(item[1]);  
    //     }
    // }
    let out = [];
    for (item of arr) {
        out.push({"category": item[0], "phrase": item[1]});
    }
    return out;
}

// Call the function to convert the puzzle data to an object and store it in a new variable to use in your program.
let puzzles = puzzleConverter(puzzlesArray);
const line = "\n\n---------------------------------------------\n\n";

// Temporarily print the new object you created to the console to see its structure and verify the data is stored properly. Then comment out the console.log statement.
// console.log(puzzles);

// Create an introduction to welcome your user to your program and explain the scoring system. Store it as a string in a variable. Use a template literal if you want to be able to format it over multiple lines without using escape characters like \n or \t.
let intro = `
******************* 
*   GUESS WHAT?   * 
******************* 

REGULAR MODE: You will be given a category and a phrase, and you can guess one letter at a time until you are ready to solve the puzzle. You start off with 200 points. Each turn will cost you points, so try to solve it as soon as possible! Here's how the scoring works:
    -5 points for correct letter (-10 if incorrect)
    +15 points for early solve (-15 if incorrect)

QUICK PLAY: The phrase will already have the most common letters filled in. You guess three more consonants and a vowel, then have one chance to solve the puzzle and win.
`;

/**** HELPER FUNCTIONS NEEDED FOR MAIN FUNCTIONS ****/

// Write a function that asks the user whether they'd like to play regular mode or quick play mode and returns their response (either 0 or 1)
function modeSelect() {
    let mode;
    while (mode !== "0" && mode !== "1") {
        mode = input.question("Select [0] Regular mode or [1] Quick mode. ");
    }
    return Number(mode);
}


// Write a function to pull a random puzzle object and return its index from your converted array of objects
function randomClue() {
    let index = Math.floor(Math.random() * puzzles.length);
    let clue = puzzles[index];
    puzzles.splice(index,1);  // removes the clue to ensure no repeat plays
    return clue;
}


// Write a function to take in a phrase and an array of letters and convert it to a display version with any unguessed letters represented with asterisks instead. Make sure any spaces or punctuation remain as-is.
function userDisplay(phrase,arr=[]) {
    let displayPhrase = "";
    phrase = phrase.toLowerCase();

    for (char of phrase) {
        // if (char.match(/[^a-zA-Z]/)) {  // passes through all non-alpahbetic characters
        //     displayPhrase += char;

        // } else if (arr.includes(char) === false ) {  // converts unguessed letters to asterisks
        //     displayPhrase += "*";

        // } else { // displays guessed letters in caps
        //     displayPhrase += char.toUpperCase();
            
        // }  
        // the above could be simplfied by combining the two statements that pass through values: either char is in our phrase or char is a non-alphabetic character.

        if (arr.includes(char) || char.match(/[^a-zA-Z]/)) {
            displayPhrase += char.toUpperCase();
        } else {
            displayPhrase += "*";
        }
    }
    return displayPhrase;
}



// Write a function to get the user's choice whether to guess another letter or attempt to solve the puzzle all at once
function guessOrSolve() {
    let choice;
    while (choice !== "0" && choice !== "1") {
        choice = input.question("[0] Guess a letter or [1] Solve the puzzle: ") 
    }
    return choice;
}

// Write a function to get three consonants and a vowel from user for quick play mode. Validate to make sure there are exactly 3 consonants and a vowel, that they are not the ones already given, and there are no repeated letters.
function getQuickGuess(letters) {
    let vowels = "aeiou";
    let guesses = []; 
    let hasVowel = false;
    let guess;
    
    console.log("Please guess 3 consonants and a vowel. No repeats.");

    while (guesses.length < 4) {
        guess = input.question("Letter: ").toLowerCase();

        if (guess.match(/[^a-z]/) || !guess) {  // handles non-alphabetical characters
            console.log("Invalid entry. Please enter a letter.");
        } 
        
        if (guesses.includes(guess) || letters.includes(guess)) {
            console.log("Duplicate entry. Please enter a new letter.");
        } else if (vowels.includes(guess)) {
            if (hasVowel) {  // only allowed to choose one vowel
                console.log("You have already selected a vowel. Please enter a consonant."); 

            } else {  // sets hasVowel boolean for future use
                guesses.push(guess);
                hasVowel = true;    
            }
        } else if (guesses.length === 3 && hasVowel === false && vowels.includes(guess) === false) {
            // If we are on our last guess and have not guessed a vowel, we must choose one now.
            console.log("You have already selected 3 consonants. Please enter a vowel.");

        } else {
            guesses.push(guess);
        }
    }
    return guesses;
}

/**** PRIMARY FUNCTIONS ****/

// Write a function to handle game play in regular mode and make use of helper functions as required
function regularPlay() {
    let score = 200;
    let clue = randomClue();
    let phrase = clue.phrase.toLowerCase();
    let letters = [];
    let choice, guess, solve;
    let win = false;

    while (score > 0 && !win) {
        console.log(`${line}SCORE: ${score}`);
        console.log(`Category: ${clue.category}\n`);
        console.log(userDisplay(phrase, letters), line);

        choice = Number(guessOrSolve());

        if (!choice) {
            guess = input.question("Guess: ").toLowerCase();
            while (guess.match(/[^a-z]/) || !guess) {  // handles non-alphabetical characters
                console.log("Invalid entry. Please enter a letter.");
                guess = input.question("Guess: ").toLowerCase();
            } 
            while (letters.includes(guess)) {
                let previous = letters.sort().join(" ").toUpperCase();
                console.log(`
                You've already guessed that! Guesses so far: ${previous}
                Please enter a new letter.`);
                guess = input.question("Guess: ").toLowerCase();
            }
            letters.push(guess);
            if (phrase.includes(guess)) {
                score -= 5;
            } else {
                score -= 10;
            }    
        } else {
            solve = input.question(`\nOK smarty-pants, what's your guess?\n`);
            if (solve.toLowerCase() === phrase) {
                console.log(`
                    You're right!
                    You win with ${score + 15 >= 200 ? "200" : score + 15} points.
                    `);
                win = true;
                break;
            } else {
                console.log("Nope, try again.");
                score -= 15;
            }
        }
    }

    if (!win) {
        solve = input.question(`\nOK, you're out of time. what's your guess?\n`);
        if (solve.toLowerCase() === phrase) {
            console.log("\nYou're right!");
            console.log(`Unfortunately, you only finished with ${score + 15} points.`)
        } else {
            console.log("\nYou lose.")
        }
        
    }
}

// Write a function to handle game play in quick play mode and make use of helper functions as required
function quickPlay() {
    let clue = randomClue();
    let phrase = clue.phrase.toLowerCase();
    let letters = ['r','s','t','l','n','e'];
    
    console.log(`${line}Category: ${clue.category}\n`);
    console.log(`We're playing Wheel of Fortune rules. On the board: ${letters.join(" ").toUpperCase()}
    `);
    console.log(userDisplay(phrase, letters), line);

    let guesses = getQuickGuess(letters);
    letters = letters.concat(guesses);
    console.log("\n", userDisplay(phrase, letters), "\n");
    
    let solve = input.question(`\nWhat's your guess?\n`);
    if (solve.toLowerCase() === phrase) {
        console.log(`\nYou're right! It was ${clue.phrase}!`);
    } else {
        console.log(`\nNope. The phrase was: ${clue.phrase}.`);
    }
}


/**** PUT IT ALL TOGETHER AND RUN PROGRAM ****/

// Write a runProgram() function to handle everything from start to finish
function runProgram() {
    let mode;

    while (true) {
        console.log(intro);

        // modeselect, then gameplay
        mode = modeSelect();
        if (mode) {
            quickPlay();
        } else {
            regularPlay();
        }

        if (puzzles.length === 0) {
            console.log("Out of puzzles!")
            break;
        }

        let replay = input.question("\nPlay again? (Y/N) ");
        if (replay.toLowerCase().includes("n")) { // can accept a "no"
            break;
        }
    }
    console.log("Thanks for playing!")
}

runProgram();