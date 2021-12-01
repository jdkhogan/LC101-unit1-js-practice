#LC-A2-Prep-Physicians-Directory

##### Physicians' Directory project ([starter code](https://replit.com/@CarolineRose/PhysicianDirectory-StarterCode#index.js) and [instructions](/instructions.text))

###### Highlights: Arrays | User Input | RegEx | .map () and .filter() 

As review for Unit 1 of LaunchCode LC101 coding course, I chose to work on a new project that covers some of the early concepts around working with arrays and functions.

The Physician's Directory project required me to take in a directory of doctors and phone numbers in string format, and return the results for any or all of three different search types. Each search is broken out into a separate function, and I built several helper functions to make everything run smoothly.

1. I started by transforming the array of strings of the format "Last Name, First, Phone Number" into an array of arrays of the format `[Last, First, Phone]`.
	The usefulness of the `.map()` array function became apparent here, as I was able to consolidate 7 lines of basic code down to one simple return statement.

2. The next function to build was the selector, which would kick off the ssearch by asking the user for input on what type of search to perform. I used a while loop to validate that the input was one of the four choices offered.

3. The first filter function searches by name, checking both first and last names for the keyword given. It uses a case-insensitive fuzzy match, so a user could enter part of the name and receive results. For example, if they didn't know the exact spelling they could enter "jo" to see "John" or "Jon" (among others). I use .toLowerCase to normalize the names in the dictionary and the input string, and compare against first and last name by calling them by index, e.g. `entry[0]`. I intitally used a for loop to work through the doctors, but realized I could use `.filter()` to replace 6 lines of code with 1.

	Each of the filter functions has a while loop to validate input, and in this case, we check that we are not mistakenly passed a number. Initially, I was trying to use the `isNaN()` function, but I realized I'd be better off with a simple regular expression to check that all characters were letters: `[A-Za-Z]`

4. The second filter is by first letter of last name. Here we validate that we are given a single letter. Again, I replaced an `isNaN` statement with the regex from the first filter.

    The third filter is area code, which requires a 3-digit number as input. 

5. To run all three searches, I built a function that builds an array of results for each of the three searches, then removes duplicates using Sets.

6. To format the results, a helper function returns either "No results" if there were no matches, or formatted string literals sorted by last name.

![Image](/physicians_screenshot.png)