// TODO: Import the Contents class
const Contents = require('./contents');

/* 
	TODO: Declare the Shelf class and create a constructor with two properties: name and contents. The name property will hold a string, and the contents property will hold an object of the Contents class. This class will have two methods.

	The tests for this class should be written in specs/shelf.spec.js. 
*/

class Shelf {

	/* 
		The constructor sets the rules for instantiating (creating an instance of) a Shelf class-based object. An empty shelf can be created with just a name since the second parameter defaults to a Contents object with zeroes for all three of its values.

		Tests 3-5 check the class constructor.
		Tests 6-10 check the methods.
	*/

	constructor(name, contents = new Contents(0,0,0)) { 
		if (!name) {
			throw Error("Must specify a name for new Shelf object!");
		}

		this.name = name;
		this.contents = contents;
	}

	// TODO: Write Test 6 before coding this method. It should return a statement with the name of the shelf and description of its contents.
	checkStatus() {
		// intializes output statement with name
		let out = `${this.name} - `

		// adds each of the items in the Contents object
		for ( const [key, val] of Object.entries(this.contents) ) {
			out += `${key}: ${val}, `
		}
		
        return out.slice(0,-2);

	}

	// TODO: Write Tests 7-10 as you code each part of this method. It should take three parameters -- item type, amount, and operation (either add or remove). It should throw an error if something other than 'add' or 'remove' is passed in for the third parameter. It has no return statement.
	moveItems(itemType, amt, operation) {
		if (operation !== "add" && operation !== "remove") {
			throw Error("Invalid operation. The moveItems method can only add or remove items.")
		}

		for ( const key of Object.keys(this.contents) ) { 
			if (key === itemType) {
				if (operation === "add") {
					this.contents[key] += amt;
				} else if ( amt > this.contents[key] ) {
					throw Error(`Illegal operation. Cannot remove more ${itemType} than currently on the shelf.`)
				} else {
					this.contents[key] -= amt;
				}
				break;
			}
		}
	}

}

module.exports = Shelf;