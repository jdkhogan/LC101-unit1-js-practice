// TODO: Import assert and all three classes
const assert = require('assert');
const Contents = require('../contents.js');
const Shelf = require('../shelf.js');
const Cabinet = require('../cabinet.js');
const exp = require('constants');

/* 	
	Remember, practing TDD methodology means writing the test _before_ you write the code you plan to test.

	Check instructions.txt for definitions of different types of test methods.
*/

// TODO: Make sure objects are instantiated properly
describe("Cabinet class constructor", function() {

	// TEST 11
	it("can create an empty Cabinet object by not passing in any arguments", function() {
		myCabinet = new Cabinet();
		
		actual = myCabinet.stagingArea.contents.books;
		expected = 0;
		
		assert.strictEqual(actual, expected);
	});

	// TEST 12
	it("can successfully create a Cabinet object with existing contents but nothing in staging area", function() {
		topShelf = new Shelf("Top Shelf", new Contents(15, 2, 5));
		middleShelf = new Shelf("Middle Shelf", new Contents(9, 3, 3));
		bottomShelf = new Shelf("Bottom Shelf", new Contents(21, 1, 2));
		myCabinet = new Cabinet( [topShelf, middleShelf, bottomShelf]);
		
		// check decor element of Top Shelf
		actual = myCabinet.shelves[0].contents.decor;
		expected = 5;

		assert.strictEqual(actual, expected);

	});

});


/* 
	Now that we've established the constructor is working, let's practice TDD as we write tests for various methods of the Cabinet class.

	Note: It might seem redundant to have to create the shelves and cabinets for every single test instead of creating it once and reusing it -- but strange things can happen as you are manipulating the data inside the cabinet object, because Jasmine doesn't always run the tests in order from top to bottom.
*/

// TODO: Test getTotalByItemType() method
describe("Cabinet class method getTotalByItemType()", function() {

	// TEST 13
	it("returns the total number of items of a certain type on all shelves", function() {
		// A. Create cabinet and use method to get total
		topShelf = new Shelf("Top Shelf", new Contents(15, 2, 5));
		middleShelf = new Shelf("Middle Shelf", new Contents(9, 3, 3));
		bottomShelf = new Shelf("Bottom Shelf", new Contents(21, 1, 2));
		myCabinet = new Cabinet( [topShelf, middleShelf, bottomShelf]);

		actual = myCabinet.getTotalByItemType("books");
		expected = 15 + 9 + 21;

		assert.strictEqual(actual, expected);
	});

});

// TODO: Test reportTotals() method
describe("Cabinet class method reportTotals()", function() {

	// TEST 14
	it("returns a sentence detailing the totals of each item type", function() {
		// A. Create cabinet and use method to get report
		topShelf = new Shelf("Top Shelf", new Contents(10, 100, 1));
		middleShelf = new Shelf("Middle Shelf", new Contents(20, 200, 2));
		bottomShelf = new Shelf("Bottom Shelf", new Contents(30, 300, 3));
		myCabinet = new Cabinet( [topShelf, middleShelf, bottomShelf]);

		actual = myCabinet.reportTotals();
		expected = "Cabinet contains: books: 60, frames: 600, decor: 6";
		
		assert.strictEqual(actual, expected);
	});

});

// TODO: Test moveToOrFromStaging() method
describe("Cabinet class method moveToOrFromStaging()", function() {

	// TEST 15
	it("removes specified amount of items from a shelf and puts them in staging area", function() {
		topShelf = new Shelf("Top Shelf", new Contents(10, 100, 1));
		middleShelf = new Shelf("Middle Shelf", new Contents(20, 200, 2));
		bottomShelf = new Shelf("Bottom Shelf", new Contents(30, 300, 3));
		myCabinet = new Cabinet( [topShelf, middleShelf, bottomShelf]);

		// Takes a direction, shelf name, item type, and amount to move
		myCabinet.moveToOrFromStaging("to", "Top Shelf", "books", 5);
		
		let top = myCabinet.shelves[0].contents;
		let stage = myCabinet.stagingArea.contents;
		
		actual = [ top.books, stage.books ]; 
		expected = [5,5];
		assert.deepStrictEqual(actual, expected);
	});

	// TEST 16
	it("replaces specified amount of items from staging back onto a shelf", function() {
		topShelf = new Shelf("Top Shelf", new Contents(10, 100, 1));
		middleShelf = new Shelf("Middle Shelf", new Contents(20, 200, 2));
		bottomShelf = new Shelf("Bottom Shelf", new Contents(30, 300, 3));
		stagingArea = new Shelf("Staging Area", new Contents(13, 2, 4));
		myCabinet = new Cabinet([topShelf, middleShelf, bottomShelf], stagingArea);
		
		// Takes a direction, shelf name, item type, and amount to move
		myCabinet.moveToOrFromStaging("from", "Top Shelf", "books", 5);
		
		let top = myCabinet.shelves[0].contents;
		let stage = myCabinet.stagingArea.contents;

		actual = [ top.books, stage.books ]; 
		expected = [15,8];
		assert.deepStrictEqual(actual, expected);
	});

	// TEST 17
	it("throws an error if something other than 'to' or 'from' is passed in", function() {
		topShelf = new Shelf("Top Shelf", new Contents(10, 100, 1));
		middleShelf = new Shelf("Middle Shelf", new Contents(20, 200, 2));
		bottomShelf = new Shelf("Bottom Shelf", new Contents(30, 300, 3));
		myCabinet = new Cabinet( [topShelf, middleShelf, bottomShelf]);

		// Takes a direction, shelf name, item type, and amount to move
		actual = function() {
			myCabinet.moveToOrFromStaging("out", "Top Shelf", "books", 5);
		}
		
		expected = { message: "Invalid operation. The moveToOrFromStaging method can move to or from the staging area."};
		assert.throws(actual, expected);
		
	});

});

/*
	Now for the final method - this one will return a complex object and we are going to build it a little at a time. See instructions.text for an example of the return object and its properties.
*/

// TODO: Test rearrangeCabinet() method
describe("Cabinet class method rearrangeCabinet()", function() {

	// TEST 18
	it("returns an initial status object with statements for the cabinet totals and the staging totals.", function() {
		topShelf = new Shelf("Top Shelf", new Contents(10, 100, 1));
		middleShelf = new Shelf("Middle Shelf", new Contents(20, 200, 2));
		bottomShelf = new Shelf("Bottom Shelf", new Contents(30, 300, 3));
		stagingArea = new Shelf("Staging Area", new Contents(13, 2, 4));
		myCabinet = new Cabinet([topShelf, middleShelf, bottomShelf], stagingArea);

		actual = myCabinet.rearrangeCabinet().initialStatus;
		expected = {
			cabinetTotals: 'Overall, the cabinet currently holds 60 books, 600 frames, and 6 decorative objects.',
			stagingTotals: 'Staging Area currently has 13 book(s), 2 frame(s), and 4 decorative item(s).'
			};
		assert.deepStrictEqual(actual, expected);
	});

	// TEST 19
	it("returns an array of strings confirming that the requested changes have been made.", function() {
		topShelf = new Shelf("Top Shelf", new Contents(10, 100, 1));
		middleShelf = new Shelf("Middle Shelf", new Contents(20, 200, 2));
		bottomShelf = new Shelf("Bottom Shelf", new Contents(30, 300, 3));
		stagingArea = new Shelf("Staging Area", new Contents(13, 2, 4));
		myCabinet = new Cabinet([topShelf, middleShelf, bottomShelf], stagingArea);

		changes = [ 
			["from", "Top Shelf", "books", 5], 
			["to", "Middle Shelf", "decor", 2]
		];
	
		actual = myCabinet.rearrangeCabinet(changes).changesMade;
	
		expected = [
			'5 books items moved from Staging to Top Shelf.',
    		'2 decor items moved to Staging from Middle Shelf.'
		];
	
		assert.deepStrictEqual(actual, expected);
	});

	// TEST 20
	it("returns a final status object with statements for the cabinet totals and the staging totals.", function() {
		topShelf = new Shelf("Top Shelf", new Contents(10, 100, 1));
		middleShelf = new Shelf("Middle Shelf", new Contents(20, 200, 2));
		bottomShelf = new Shelf("Bottom Shelf", new Contents(30, 300, 3));
		stagingArea = new Shelf("Staging Area", new Contents(13, 2, 4));
		myCabinet = new Cabinet([topShelf, middleShelf, bottomShelf], stagingArea);

		changes = [ 
			["from", "Top Shelf", "books", 5], 
			["to", "Middle Shelf", "decor", 2]
		];
	
		actual = myCabinet.rearrangeCabinet(changes).finalStatus;
	
		expected = {
			cabinetTotals: 'Overall, the cabinet currently holds 65 books, 600 frames, and 4 decorative objects.',
			stagingTotals: 'Staging Area currently has 8 book(s), 2 frame(s), and 6 decorative item(s).'
		};
	
		assert.deepStrictEqual(actual, expected);
		
	});

});