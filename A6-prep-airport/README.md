# GA#6 Prep Exercise - Chattanooga Airport Flight Status Board

The project was to create a Flight Dashboard for an airport, built on the provided JSON data.

The resulting app displays flights by airline, flight number, origin/destination, arrival/departure time, gate and current flight status. The dashboard automatically sorts flights into the Arrivals or Departures tabs, and allows the user to search by airine, flight no., city, or flight status. 

This project gave me additional practice on building in Angular from the ground up, and leaned heavily on unit testing.
- fetching JSON and building filtering logic to sort by arrival/departure
- passing data from parent to child components in Angular
- implementing sorting and formatting with on-click, keyup, ternary operators, and boolean logic
- CSS classes for tab and text highlighting

---

You are going to create a page with Arrivals and Departures boards that list all the flights scheduled to come and go at the Chattanooga Metropolitan Airport. Users will be able to switch back and forth between the boards and will also be able to filter the lists of flights by airline, flight number, city, or status. You will take advantage of Angular's component-based architecture to set up dynamic functionality on a single-page app. Ready?


### GETTING STARTED

Start on GitHub - **FORK** and then copy the url you need to clone this repo to your local computer. Open a terminal and navigate to the location on your computer where you want your **A6-Prep-Chattanooga-Airport** folder to be. Make sure the folder you are in does NOT also have a repo. Use `git clone`, then navigate inside the project folder it created. You should see this **README** file along with some resource files.

You can stay in the main branch to build your project or use `git checkout -b branch-name` to create a branch of your own. 

If at any time you get really stuck and need to peek at my solution, use `git checkout solution` to switch to the solution branch. If you have changes you aren't ready to stage and commit yet, use `git stash` to temporarily store them while you switch to solution. Then when you switch back to your branch, use `git stash apply` to bring back the changes you had made.


### CREATE YOUR ANGULAR APP

Open your **A6-Prep-Chattanooga-Airport** folder in your IDE (e.g., VSCode). From either the terminal you already used or from a terminal inside your IDE, make sure you are in that folder, then use the command `ng new flight-status-board` to create a new Angular project. In the file tree in VSCode, expand the `flight-status-board` project folder and then `/src` and `/app`. You can now see all the Angular files that make up your application.

Back in your terminal, `cd` into the `flight-status-board` project folder. Run the app using `ng serve`. Go to `localhost://4200` in your browser and you'll see the default content for a new Angular application. You don't need any of that, so the next step will be to get rid of it.

Look in the folder called `starter-code`. Copy all the HTML from `code-for-index.html` and replace everything that is in `/src/index.html`. Then copy all the CSS from `code-for-stylesheet.css` and replace everything that is in `/src/styles.css`.

Move the `/images` folder (which has all the images you need) inside `/src/assets`. Do the same with the `/data` folder.

> **Stop and make a commit to your branch using the terminal:**
> * `git status` to view files that need to be staged
> * `git add .` to stage both tracked and untracked files 
> * `git status` again to verify that everything you want has been staged
> * `git commit -m "generated new Angular project; replaced default code with new starter code; added images and data"` to commit staged files with a message


### ADD COMPONENTS AND A CLASS

Back in a terminal (perhaps a different one than where you've served your app), use `ng g class flight` to create a class called `Flight`. Declare variables of type `string` that will mirror all the properties of each object in `/assets/data/flights.json`. Set up your constructor to take in everything as a parameter except the last two properties (`gate` and `status`). Inside the constructor, set the first 6 properties equal to whatever is passed in through the parameters, then set `gate` and `status` as empty strings. You will add some methods to this class later.

Back in a terminal again, use `ng g c board` to create a component called `board`, and then create another called `header`. Take a look at `src/app/app.module.ts`. Notice that your components are already registered there because you created them through the CLI and Angular did a lot of the necessary work for you.

Now you should get your new components filled out a little. Delete the default messages out of `header.component.html` and `board.component.html`. Replace it with the appropriate code from their respective files in the `starter-code` folder. Switch over to `app.component.html`. Place one instance of the `header` component and two instances of the `board` component as indicated by the TODOs. 

> **Stop to stage your new files and make a commit to your branch using the steps outlined above:**
> * Write a short but descriptive message about what's been added/changed. 
> * Now use `git push` (or `git push -u origin branch-name` if not `main`) to send your first two commits up to your GitHub repo.


### FETCH JSON AND STORE FLIGHT OBJECTS IN ARRAYS

Go to `app.component.ts`. Just below `ngOnInit()`, add two properties called `allArrivals` and `allDepartures`. Give them the type `Flight[]` and initialize them as empty arrays.

Time to fetch some JSON. Write a function called `getFlights()` that is typed as `void` since it will not return any values. Fetch from `assets/data/flights.json`. Loop through the array of `json` objects and create a new `Flight` object that saves all the properties from the `json` object to their respective properties in the `Flight` object. Remember that the `gate` and `status` properties must be set separately since they are not parameters in the constructor. Once all 8 properties have been set, determine if the flight is an arrival or departure (hint: either the `origin` or the `destination` will be "Chattanooga (CHA)") and then push it to either `this.allArrivals` or `this.allDepartures`. Go up to `ngOnInit()` and call `getFlights()` inside there so that it will happen before the page displays.

> **Stop to stage your files and make a commit!**


### SEND DATA FROM APP (PARENT) TO BOARD (CHILD)

In `board.component.ts`, add a new property called `flights` and give it the type `Flights[]`. Initialize it to an empty array. In front of the variable name, add the `@Input()` decorator so that `flights` can accept data being passed down from the parent component, `app`. Create a second property the same way (able to accept input from `app`), call it `type` and set it as an empty string. If `Input` is not already listed with `Component` and `OnInit` in the import from `@angular/core` at the top, add that now. 

In `app.component.ts`, add two new properties called `arrivalText` and `departureText`. Both should be of type `string`, and you should initialize them to "arrival" and "departure" respectively.

Go to `app.component.html` and look at the `<app-board>` elements. Give each **attribute directives** for the `Input` variables `flights` and `type`. The first board is for arrivals, so set `flights` to "allArrivals" and set `type` to "arrivalText". On the second board, set `flights` to "allDepartures" and set `type` to "departureText". Now the `app` component can send information down to the `board` components, both of which are its children. 

Head over to `board.component.html` and create your data rows. Start by copying the structure from the header row, then change all the `<th>` tags (table header cells) to be `<td>` tags (table data cells) instead. Use the **structural directive** `*ngFor` to loop through all the flight objects. You can choose anything as your local variable for the looping, but something like `"let flight of flights"` is pretty straightforward. Now you can use that `flight` variable to represent each object as it loops through. For each `<td>`, use **string interpolation** to display the property of `flight` that belongs to the corresponding `<th>` above. For City and Time, you'll need to have a little logic. Try using a **ternary** expression for City: `{{type === "arrival" ? flight.origin : flight.destination}}` Do something similar for Time with the `arrival` and `departure` properties of each `flight` object. 

Now add classes to some of the `<td>` elements. Flight, City, and Status should have the "bold" class. Just like the header cell, Gate should be centered. Now check the page in the browser. You should see all the flights listed! But the tables are both still visible, one after the other, and we want to see only one at a time. That will be next.

> **Stop to stage your files and make a commit!**


### MAKE BOARDS SHOW ONLY ONE AT A TIME

In `app.component.ts`, create a new property called `showArrivals` that is a `boolean` and initialize it to `true`. In `app.component.html`, use the `*ngIf` structural directive on both `<app-board>` elements to make sure only one shows at a time. Before you can test this, you will need to add `(click)` events to the tabs above that set `showArrivals` to `true` or `false`. Now try it - the boards should toggle when you click on the Arrivals and Departures tabs.

To make this better for the user, put an **attribute directive** on each tab `<div>` that applies the class "tab-active" only if that tab's data is showing. (See chapter 30.4 for syntax examples.)

> **Stop to stage your files and make a commit!** 


### FILTER FLIGHTS USING FORM

In `app.component.ts`, create two new properties called `filteredArrivals` and `filteredDepartures`, each of type `Flight[]` and initialized as empty arrays. These will be changed to hold subsets each time the user submits a keyword for filtering. That way you can send only those flights to the `board` components.

Look in the `starter-code` folder for some code for `app.component.ts`; follow the intructions to copy the `filterFlights()` and `resetFlights()` methods. Once they are in `app.component.ts` and have been un-commented, they are ready to be used. 

Go to the form on `app.component.html` and put a **template reference variable** called `keyword` on the `<input>` element. Then add `(click)` events to the submit and reset buttons, calling the methods you just placed into `app.component.ts`. Be sure to pass in the `value` of the `keyword` input for the `filterFlights()` method. Add a `(keyup.enter)` event to the input itself that also calls `filterFlights()` and passes in the `value` of the `keyword` input.

Now your form works, but the data isn't updating on the boards yet. That's because we are still passing `allArrivals` and `allDepartures` from `app` to `board`. Go to the `<app-board>` elements in `app.component.html` and update the **attribute directives** for `flights` to pass `filteredArrivals` and `filteredDepartures` instead.

Uh-oh. Now nothing is showing on the page! That's because `filteredArrivals` and `filteredDepartures` are initialized to empty arrays when the page loads. We need to fill them with the same `Flight` objects that `allArrivals` and `allDepartures` have been given, and we need to do it right after they have received that data inside `getFlights()`. Go to that function and find the spot just after the `json.forEach()` loop. On separate lines, add `this.filteredArrivals = [...this.allArrivals];` and `this.filteredDepartures = [...this.allDepartures];` _Note: the spread operator `...` allows all the objects to be copied from one array to the other without creating a reference to where they are stored in memory._ 

Now check the page again and play around with filtering by airline, flight number, city, and status. 

> **Stop to stage your files and make a commit!**


### IMPROVE USER EXPERIENCE (UX)

Go to the starter code and copy over the three methods into `flight.ts` as instructed. 

Then go to `board.component.html`. Add a second class to the status `<td>`, "on-time". Then use **attribute directives** to assign the "delayed" and "cancelled" classes only when `isDelayed()` or `isCancelled()` returns `true`.

Refactor the airline data so that instead of showing the airline's name, it shows its logo. _Hint: use the third method you just copied into the Flight class to set the `<img src />`._

In `board.component.html`, refactor the header rows for City and Time to be conditional. The header-formerly-known-as-City should say either "Origin" or "Destination" depending on whether the incoming `type` property is "arrival" or "departure". Use a **ternary** similar to the way you did in the data rows for these columns. For Time, set them to say "Arrival" and "Departure" depending on the `type` property. 

_That's it!_ Take a look at the final product. 

> **Do a final stage, commit, and push. Great work!**
