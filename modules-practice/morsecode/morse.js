/**** MORSE CODE MAP & FUNCTIONS ****/


/** OBJECT WITH KEY/VALUE PAIRS **/

const morseMap = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..--",
    ":": "---...",
    ";": "-.-.-.",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
    "+": ".-.-.",
    "=": "-...-",
    "&": ".-...",
    "$": "...-..-"
  };
  
  
  /** FUNCTIONS **/
  
  // Write a function to convert a single character to Morse code.
  function translateChar(char) {
    // return translated character
    return morseMap[char.toUpperCase()];
  
  }
  
  // Write a function that uses translateChar() to translate a word
  function translateWord(word) {
      // write algorithm and return translated word
      let out = "";
      for (let char of word) {
        if (char.toUpperCase() in morseMap)  {
            out += translateChar(char) + " ";
        }
      }
      return out;
  
  }
  


  // Write a function that uses translateWord() to translate a string of words
  function translateAll(phrase){
    // write algorithm and return translated phrase
    let wordArr = phrase.split(" ");
    let out = "\n-.-.-\n";

    for (word of wordArr) {
        out += translateWord(word) + " |  ";
    }
    out += "\n-.-.-\n";
    return out;
  }
  
    console.log(translateChar('o'));
    console.log(translateWord("SOS"));
    console.log(translateAll("SOS Mayday"));
  /** EXPORT FUNCTIONS **/
  
  /* 	
      Note: to run an interactive program you really only need translateAll() but we will test the others with a few console.log() statements 
  */
  
  // export all three functions
  module.exports = {
    translateChar: translateChar,
    translateWord: translateWord,
    translateAll: translateAll
  }