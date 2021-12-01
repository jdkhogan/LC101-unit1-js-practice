# LC-A5-prep-2

The project was to create a Trivia app built on a publicly-available API: the [Open Trivia Database](http://opentdb.com/).

The resulting app asks the user to select number of questions, category, type of question (multiple choce or true/false) and difficulty. It then pulls a selection of questions from the API (using a token to ensure no duplicate questions), randomizes the question list, and provides real-time scoring.

This project gave me additional practice on several aspects related to the DOM:
- fetch functions (async) and APIs
- window, document, and form event listeners
- form validation
- building dynamic HTML pages with .innerHTML
- building dropdown menus by looping 
- constructing URLs with query parameters
- shuffle function to randomize questions
- real-time scoring function

![Image](/A5-prep-trivia/trivia_screenshot.png)

---

Our `init()` function should set up vars first, then the various functions that fill the DOM.

We match JS variables with IDs in the DOM and call using the `document.getElementById()` method. We will pass in the entire form as 'form'

Follow the patterns in the existing JSON or API to build out the appropriate functions to build categories and the API URL query. Note that certain of the parameters can be left blank: category, type, and difficulty.

The form event listener should check that a number has been passed and throw an alert. `event.preventDefault()` is used to avoid page refresh. Later we call the `clearQ()` and `getQ()` functions to retrieve our question list.

The document event listener tracks clicks on the radio buttons that serve as answers. Using this setup, we can give real-time feedback on answers.

The `getQuestions()` method calls on `buildURL()` to build the API call, then stores and displays the questions that are fetched from the server. 

`displayQuestion()` uses the index of the for loop to display the question number (`i+1`), build IDs (`score${i}`), display the question `questions[i].question`, and display info about it (`.category` and `.diffculty`)

We built a separate function called `getAnswerOptions()` to handle answers bc of the way they are returned by the API. We are given a correct answer string and an incorrect answer string array. We want to combine and randomize them for display, then check the chosen answer vs. the correct answer. (We were give a shuffle helper function as part of the starter code)
	This function is passed an index and runs a for loop, so we wind up with IDs of the format `passedIndex-loopIndex` which makes tracking easy. 

To clear the questions in `clearQuestions()` we need to remember that we want to clear the display and clear the back end. So we reset the `.innerHTML` and re-initialize the questions array with an empty array.

---

Initial instructions and setup details follow below.


Part 2 of prep for graded assignment 5 in LaunchCode's WebDev unit - the DOM

Recording of live session held on 10/24/20: https://youtu.be/9qCaM5dJXRU

Students - FORK this to your own account and then clone down to your local machine.

This is part of a larger group of practice exercises and examples for students of LaunchCode's Web Development course (unit 1). See this document for the full list of repls, respositories, etc. https://tinyurl.com/y3bn6st4
