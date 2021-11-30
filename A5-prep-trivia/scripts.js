/*** TRIVIA TIME ***/

/*
 * Assignment 5 Prep 2 - Integrating the DOM with forms and fetching JSON
 * 
 * This app utilizes the Open Trivia Database - read about it here: https://opentdb.com/api_config.php
 * 
 * Number: Default is 10 but must be 1-50
 * Difficulties: easy, medium, hard
 * Type: multiple, boolean (multiple choice, true/false) - FOR THIS EXERCISE WE ARE STICKING TO MULTIPLE CHOICE
 * 
 * Category, difficulty, and type can each be ignored to get mixed results ("any")
 * One call to the API will retrieve 50 questions max
 * 
 * To request token: https://opentdb.com/api_token.php?command=request
 * To use token: https://opentdb.com/api.php?amount=10&token=YOURTOKENHERE
 * 
 */


let currentToken; 
let categories = [];

// Fetch token for 6 hours of tracking to prevent duplicated questions from trivia database
// Using preventDefault() on the form listener will keep this from resetting when form is submitted
function fetchToken() {
    fetch("https://opentdb.com/api_token.php?command=request").then( function(response) {
        response.json().then( function(json) {
            currentToken = json.token;
            console.log("New token received: " + currentToken);
        });
    });
}

function fetchCategories() {
    fetch("https://opentdb.com/api_category.php").then( function(response) {
        response.json().then( function(json) {
            categories = json.trivia_categories;
            console.log("Categories loaded.");
            console.log("Categories displayed in drop-down menu on page.");
            init(); // This MUST go here so that nothing else on the page happens until the categories drop-down has the data it needs to populate the options!
        });
    });
}

// Event listener for page load
window.addEventListener("load", function() {
    fetchToken();
    fetchCategories();
    console.log('Page loaded. (Is it really though?)'); // Note what order these get logged in the JS console
});

// DOM code for page elements
function init() {

    // Establish variable to hold questions after they are returned from fetch request
    let questions = [];

    // Establish variables for DOM objects representing HTML elements
    let numQuestions = document.getElementById("num-questions");
    let category = document.getElementById("category");
    let type = document.getElementById("type");
    let difficulty = document.getElementById("difficulty");
    let form = document.getElementById("form");
    let questionArea = document.getElementById("question-area");

    // Write a function to populate the drop-down list of categories
    function listCategories() {
        let filler = "";
        for (let cat of categories) {
            filler += `
            <option value="${cat.id}">${cat.name}</option>
            `
        }
        category.innerHTML = filler;
    }

    // Write a function to build the URL with query parameters based on form submitted
    function buildURL() {
        let newURL = "https://opentdb.com/api.php?token=" + currentToken + "&amount=" + numQuestions.value;

        if (category.value !== "any") {
            newURL += "&category=" + category.value;
        }
        if (type.value !== "any") {
            newURL += "&type=" + type.value;
        }
        if (difficulty.value !== "any") {
            newURL += "&difficulty=" + difficulty.value;
        }
        return newURL;
    }


    // Write a function to fetch new questions from trivia database
    function getQuestions() {
        let url = buildURL();

        fetch(url).then( function(response) {
            response.json().then( function(json) {
                questions = json.results;
                console.log("New questions received.");
                displayQuestions();
            });
        });
    }

    
    // Write a function to shuffle correct and incorrect answers in an array for one question and return innerHTML
    function getAnswerOptions(qIndex) {
        let answers = [questions[qIndex].correct_answer].concat(questions[qIndex].incorrect_answers);
        shuffle(answers);

        let options = "";
        for (let i=0; i < answers.length; i++) {
            options += `
            <input id="q${qIndex}-${i}" class="answer" name="q${qIndex}" type="radio" value="${answers[i]}">
            <label for="q${qIndex}-${i}" class="q-option">${answers[i]}</label>
            `
        }
        return options;
    }

    // Write a function to display the questions (see sample-question-code.html)
    function displayQuestions() {
        let filler = "";
        for (let i=0; i < questions.length; i++) {
            answers = getAnswerOptions(i);
            filler += `
            <div class="q-container">
                <p class="q-number">Question ${i+1} <span id="score${i}" class="score"></span></p>
                <p class="q-question">${questions[i].question}</p>
                    ${answers}
                <p class="q-info">${questions[i].category} &nbsp;&bull;&nbsp; ${questions[i].difficulty}</p>
            </div>
            `
        }
        questionArea.innerHTML = filler;
    }

    // Write a function to reset the question area
    function clearQuestions() {
        questionArea.innerHTML = "";
        questions = [];
    }


    // Call function to populate category drop-down
    listCategories();

    // Write a form-level listener for submission
    form.addEventListener("submit", function(event) {
        // validate
        if (numQuestions.value > 50 || numQuestions.value < 1) {
            alert("Please check that you have entered a number from 1 - 50.");
            event.preventDefault();
        } else {
            clearQuestions();
            getQuestions();
        }
        
        event.preventDefault();
    });


    // Write a document-level listener with an anonymous function to score a question
    document.addEventListener("click", function(event)  {
        if (event.target.matches(".answer")) {
            let answerId = event.target.id;
            // let qIndex = event.target.id[1]; // won't work for more than 9 questions! 
            let qIndex = answerId.slice(1, answerId.indexOf("-")); // grab question index from answer id
            let score = document.getElementById("score" + qIndex);
            score.style.visibility = "visible";

            if (event.target.value === questions[qIndex].correct_answer) {
                score.style.color = "green";
                score.innerHTML = "Correct!";
            } else {
                score.style.color = "red";
                score.innerHTML = "Nope. Try again."
            }
        }
    });


    /** Helper Function(s) **/

    function shuffle(array) {
        let current = array.length, temporaryValue, randomIndex;
        while (0 !== current) { 
            randomIndex = Math.floor(Math.random() * current);
            current -= 1;
            temporaryValue = array[current];
            array[current] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

}

