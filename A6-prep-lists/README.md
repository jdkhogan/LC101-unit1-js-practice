# LC-A6-prep

The project was to create a To-Do List app with basic CRUD functionality in Angular JS, working with pre-defined unit tests and alongside a demo video.

Since the app was designed to highlight JS front-end skills, it stores sample lists in the form of simple JS lists that can be manipulated during each runtime.

This project gave me additional practice on:
- basic CRUD (create, read, update, delete) functionality
- window, document and form event listeners
- form validation
- dynamically filling default values in editable forms
- passing complex parameters to JS methods
- custom CSS classes and booleans to toggle forms from hidden to visible


![Image](/A6-prep-lists/lists_screenshot.png)

---

Some notes/musings on building the app

1. The first functionality we built was to enable the "Add New List" button, which uses a boolean to clever effect. When the page opens, the `addingNewList` variable is set to false. Clicking the button sets the value to true, and an `ngIf` on the button removes the button at the same time. Below, a list builder form uses the boolean to pop into focus. Clicking Cancel on the list builder sets the same `addingNewList` var false, and we are back to square one.

2. We then apply multiple TS directives to the list title buttons. 
	
    Use `*ngFor` to build a list of lists
	
    Use `[class.selected]` to show the currently selected list.
	
    Use a click event with viewNewList() to change to a newly selected list.

3. We use a `formIncomplete` boolean to add a warning when a user tries to create a list without a title. On load, the bool is set to false, which we pass to a div with the `warning` class to present a warning with CSS styling. We added a `[class.]` directive to style the title box on the form to bring focus. And finally, we added `formIncomplete=false` to the Cancel button to reset this boolean as well when cancelling out of the form builder.

4. We can pass variables between by including the code in the `ng-template` in one component and using the `@Input()` decorator in the other to bind them.

5. Misc. 

    Using `confirm("")` in Angular is the equvalent of `window.confirm`, and is used here to ensure we confirm the user wants to delete the list.

    The `deleteList()` method uses `.splice()` along with `.indexOf()` to find the list in the array, then delete it. It then sets the current list to the first available (i.e. `allLists[0]`).

    The `(change)` event starts tracking as soon as a change is made to the field, rather than waiting on a click or keypress to save.

    The `addItem()` method simple creates a new empty string item at the end of the list. We can then edit that item to add the new text, or we can leave it alone and wait for the `saveList()` method to delete empty items.

6. To build the sort function, I initially thought I might just assign the `(click)` action to `currentList.items.sort()`, but this is case-senstitive! It displayed caps first, then lower case items (starting with AA batteries..., Parmesan cheese, apples, bananas, ... toothpaste).

    Instead I found an implementation that uses an anonymous function combined with `.localeCompare()` to sort the list properly.