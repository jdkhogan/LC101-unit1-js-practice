// TODO: Import Shelf class
const Shelf = require('./shelf.js');

/* 
	TODO: Declare the Cabinet class and create a constructor with two properties: shelves and staging. The shelves property will hold an array of Shelf objects, and the staging property will be a single Shelf object. Both properties should have default values of an empty array and an empty shelf respectively. This class will have four methods. 
	
	The tests for this class should be written in specs/cabinet.spec.js. 
*/

class Cabinet {

	/* 
		The constructor sets the rules for instantiating (creating an instance of) a Cabinet object. An empty cabinet can be created if desired, since both parameters have default values.

		Tests 11-12 check the constructor
		Tests 13-20 check the methods
	*/

	constructor( shelves = [], stagingArea = new Shelf("Staging Area") ) { 
		this.shelves = shelves;
		this.stagingArea = stagingArea;

	}

	// TODO: Write Test 13 before coding this method. It should take a string representing one of the Contents properties as an item type and return the total number of items of that type on all shelves in the cabinet (but not staging).
	getTotalByItemType(itemType) {
		let out = 0;
		for (let shelf of this.shelves) {
			out += shelf.contents[itemType];
		}
		
		return out;
	}

	// TODO: Write Test 14 before coding this method. It does not take any parameters and should simply return a string describing how many of each of the three items types are in the cabinet (but not staging).
	reportTotals() {
		// intitalize totals object 
		let total = { "books": 0, "frames": 0, "decor": 0 };

		// iterate through shelves, and through keys in shelves to update totals object
		for (let shelf of this.shelves) {
			for ( const [key, val] of Object.entries(shelf.contents) ) {
				total[key] += val;
			}
		}
		
		// build output string
		let out = `Cabinet contains: `;
		for ( const [key, val] of Object.entries(total) ) {
			out += `${key}: ${val}, `
		}
        return out.slice(0,-2);

	}

	// TODO: Write Tests 15-17 as you code different parts of this method. It should take four parameters - a direction, shelf name, item type, and amount to move. It should throw an error if something other than "to" or "from" is entered as a direction. It requires no return statement.
	moveToOrFromStaging(direction, shelfName, itemType, amt) {
		// validate direction
		if (direction !== "to" && direction !== "from") {
			throw Error("Invalid operation. The moveToOrFromStaging method can move to or from the staging area.")
		}
		// validate item type
		if (itemType !== "books" && itemType !== "frames" && itemType !== "decor") {
			throw Error("Invalid itemType. The moveToOrFromStaging method can move books, frames, or decor only.")
		}

		let stage = this.stagingArea.contents;
		for (let shelf of this.shelves) {
			if (shelf.name === shelfName) {
				if (direction === "to") {  // handles moving TO staging
					if (shelf.contents[itemType] >= amt) {  // validate that we have 'amt' of 'itemType' on 'shelfName'
						shelf.contents[itemType] -= amt;
						stage[itemType] += amt;
					} else {
						throw Error(`Illegal operation. Cannot remove more ${itemType} than currently on ${shelfName}.`);	
					}
				} else if (stage[itemType] >= amt) {  // handles moving FROM staging
					// validate that we have 'amt' of 'itemType' in staging area
					stage[itemType] -= amt;
					shelf.contents[itemType] += amt;
				} else {
					throw Error(`Illegal operation. Cannot remove more ${itemType} than currently in staging area.`)
				}
				break;
			}
		}
	}

	// TODO: Write Tests 18-20 as you code different parts of this method. It should accept an array as a parameter, which should default to an empty array. This array will contain one or more arrays holding the four parameters needed for the moveToOrFromStaging method. The rearrangeCabinet method should return a complex object. See instructions.txt for the structure of that object so you can figure out how to build it.
	rearrangeCabinet(infoArray = []) {
		let stage = this.stagingArea.contents;
		let out = { initialStatus: {}, changesMade: [], finalStatus: {} };
		let outStr = "";
		let directionBool = "";
		
		// build initial status
		let cabTotal = { books: 0, frames: 0, decor: 0 };
        for (let shelf of this.shelves) {
            cabTotal.books += shelf.contents.books;
            cabTotal.frames += shelf.contents.frames;
            cabTotal.decor += shelf.contents.decor;
        }
		
		out.initialStatus["cabinetTotals"] = `Overall, the cabinet currently holds ${cabTotal.books} books, ${cabTotal.frames} frames, and ${cabTotal.decor} decorative objects.`;

		out.initialStatus["stagingTotals"] = `Staging Area currently has ${stage.books} book(s), ${stage.frames} frame(s), and ${stage.decor} decorative item(s).`;

		// run through changes in infoArray
		for (let i = 0; i < infoArray.length; i++) {
			// used for (let i=0 ...) here because order of operations may matter.
			
			// make changes passed in each array in infoArray
			this.moveToOrFromStaging(infoArray[i][0], infoArray[i][1], infoArray[i][2], infoArray[i][3])

			// set opposite value for output string ("to...from..." vs. "from...to...")
			if (infoArray[i][0] === "to") { 
				directionBool = "from";
			} else {
				directionBool = "to";
			}
			// push output string to change log
			outStr = `${infoArray[i][3]} ${infoArray[i][2]} items moved ${infoArray[i][0]} Staging ${directionBool} ${infoArray[i][1]}.`;
			out.changesMade.push(outStr);
		}

		// reset cabinet totals and build finalStatus
		cabTotal = { books: 0, frames: 0, decor: 0 };
        for (let shelf of this.shelves) {
            cabTotal.books += shelf.contents.books;
            cabTotal.frames += shelf.contents.frames;
            cabTotal.decor += shelf.contents.decor;
        }

		out.finalStatus["cabinetTotals"] = `Overall, the cabinet currently holds ${cabTotal.books} books, ${cabTotal.frames} frames, and ${cabTotal.decor} decorative objects.`;

		out.finalStatus["stagingTotals"] = `Staging Area currently has ${stage.books} book(s), ${stage.frames} frame(s), and ${stage.decor} decorative item(s).`;

		return out;
	}

}

// TODO: Export Cabinet class
module.exports = Cabinet;