const Backpack = require('./backpack.js');


/**** START WITH ITEM TESTS  ****/
/**** THEN MOVE TO BACKPACK TESTS AND METHODS ****/
/**** DO STUDENT TESTS AND METHODS LAST ****/


class Student {

	constructor(name) { // notice backpack is not an argument
		this.name = name;
		if (!name) {
			throw Error("Name of student is required!");
		}
		// Student always starts with empty backpack
		this.backpack = new Backpack() // default values
	}
	
	// Write a method to fill the backpack with all available items
	// This should make use of the Backpack method .addToBackpack(item)
	fillBackpack(item1,...args) {
		// TODO #14-15: practice TDD and code this in parts as you write tests
        if (!item1){
           throw Error("Please enter an item to add.")
        }
        
        this.backpack.addToBackpack(item1);

        for (let arg of args) {
            this.backpack.addToBackpack(arg);
        }
	}

	// Write a method to empty the backpack of all items
	// HINT: This can be done in a single line! 
	// Think about the easiest way to represent an empty backpack.
	// You do NOT need the Backpack method .removeItemFromBackpack()
	emptyBackpack() {
		this.backpack = new Backpack();
        return "Backpack empty."
	}
	
}

module.exports = Student;