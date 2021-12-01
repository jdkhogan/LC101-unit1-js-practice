/**********************************************************/
/********* MARS ROVER PREP, PART 2 - STARTER CODE *********/
/****************** by Carrie Jones, TLF ******************/
/**********************************************************/

/* 	
	Students - feel free to fork this to your own repl and practice! 
	For more JS examples and practice problems, see the following document:
	https://tinyurl.com/y3bn6st4
*/

/*  
	Part 2 Solution: 
		https://repl.it/@CarolineRose/MarsRoverPrepExercise-TDD#backpack.js
	Live session recording: 
		https://youtu.be/F2bVGhfP5-E
	Part 1 Walkthrough: 
		https://repl.it/@CarolineRose/MarsRoverPrepExercise#index.js
*/

/**** START WITH ITEM TESTS ****/
/**** THEN MOVE TO BACKPACK TESTS AND METHODS ****/
/**** DO STUDENT TESTS AND METHODS LAST ****/

class Backpack {

	constructor(main = [], frontPocket = [], sidePocket = null) { 
		// note defaults set in arguments
		// this allows a backpack to be instantiated with no arguments
		this.main = main, // array of multiple items
		this.frontPocket = frontPocket, // array of multiple items
		this.sidePocket = sidePocket // can hold only one item object at a time
	}

	// Write a method that places an object into its correct backpack compartment
	addToBackpack(item) {
        if (!item) {
            throw Error("Please enter an item to add.")
        }
		if (item.location === null) {  // places item in main compartment if passed null location
            this.main.push(item);
        } else if (item.location.includes("main")) {  // must use else if, because .includes() cannot handle null
            this.main.push(item);
        } else if (item.location.includes("front")) {
            this.frontPocket.push(item);
        } else if (item.location.includes("side")) {
            if (this.sidePocket !== null) {
                throw Error("Can only place one item in Side pocket!");
            } else {
                this.sidePocket = item;
            }
        }
        // TODO #3-5: practice TDD and code this in parts as you write tests
	}

	// 	Write a function to serve as a helper function to findItemInBackpack()
	findItemInArray(item, array) {
        if (!array) {
            return -1
        }
        for (let element of array) {
            if (element === item) {
                return `${element.location}`;
            }
        }
        return -1;

	}

	// 	Write a method that finds an item and returns the compartment. 
	findItemInBackpack(item) {
        let found;

        if (!item) {
            found = -1;
        }
        if (item.location === null) {  // if we're asked to find an item with null location, it should be found in main compartment.
            found = this.findItemInArray(item, this.main);
        } else if (item.location.includes("main")) {  
            found = this.findItemInArray(item, this.main);
        } else if (item.location.includes("front")) {
            found = this.findItemInArray(item, this.frontPocket);
        } else if (item.location.includes("side")) {
            if (this.sidePocket === null) {
                found = -1;
            } else if (this.sidePocket === item) {
                found = "side pocket";
            } else {
              found = -1;
            }
        }
        if (found === -1) {
            throw Error("Item not found!"); 
        }

        return found;

	}

	// Write a method to remove just one item at a time from the backpack
	removeItemFromBackpack(item) {
        let out = -1;

        let itemLocation = this.findItemInBackpack(item);
        if (itemLocation.includes("main")) {
            this.main.splice(this.main.indexOf(item), 1);
            out = `The ${item.name} has been removed.`
        } else if (itemLocation.includes("front")) {
            this.frontPocket.splice(this.frontPocket.indexOf(item), 1);
            out = `The ${item.name} has been removed.`
        } else if (itemLocation.includes("side")) {
            this.sidePocket = null;
            out = `The ${item.name} has been removed.`
        }

        return out;

	}


}

module.exports = Backpack;