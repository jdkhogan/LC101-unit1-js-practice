// TODO: Import assert, the Shelf class, and the Contents class

const assert = require('assert');
const Contents = require('../contents.js');
const Shelf = require('../shelf.js');


/* 	
	Remember, practing TDD methodology means writing the test _before_ you write the code you plan to test.

	Check instructions.txt for definitions of different types of test methods.	
*/

// TODO: Make sure objects are instantiated properly
describe("Shelf class constructor", function() {

	// TEST 3
	it("can create a Shelf object with only a name, and the contents properties will have the default values of 0", function() {
		// A. Create an object from your class to use for test
		let testShelf = new Shelf("bookshelf");
		// B. Reference only the part of that object you want to check
		let actual = testShelf.contents;
		// C. Specify the value of the result you expect
		expected = { "books": 0, "frames": 0, "decor": 0 };
		assert.strictEqual(actual.books, expected.books);
	});

	// TEST 4
	it("can successfully create a Shelf object with a name and some number of contents", function() {
		// A. Create an object from your class to use for test
		let testContents = new Contents(5,4,3);
		let testShelf = new Shelf("bookshelf", testContents);
		// B. Reference the object to be compared
		let acutal = testShelf.contents.frames;
		// C. Specify the value of the result you expect
		expected = 4
		assert.strictEqual(acutal, expected);
	});

	// TEST 5
	it("throws error if object is instantiated from class without a name", function() {
		// A. Create object with errors to test and place in anonymous function
		actual = function () {
			let testShelf = new Shelf();
		};
		// B. Specify expected error message (formatted in object)
		expected = { message: "Must specify a name for new Shelf object!" }; 
		assert.throws(actual, expected);
	});

});

// TODO: Test checkStatus() method
describe("Shelf class method checkStatus()", function() {

	// TEST 6
	it("returns a string with the name of the shelf and a description of its contents", function() {
		// A. Create test object with contents, then use method to get status
		let testContents = new Contents(5,4,3);
		let testShelf = new Shelf("bookshelf", testContents);
		let actual = testShelf.checkStatus();
		// B. Reference part of object to compare
		
		// C. Specify value of the result you expect
		expected = "bookshelf - books: 5, frames: 4, decor: 3"
		assert.strictEqual(actual, expected);
	});

});

// TODO: Test moveItems() method
describe("Shelf class method moveItems()", function() {

	// TEST 7
	it("adds items of a certain type on the shelf", function() {
		// A. Use method to change contents of testShelf
		let testContents = new Contents(5,4,3);
		let testShelf = new Shelf("bookshelf", testContents);
		testShelf.moveItems("frames", 2, "add");
		// B. Reference part of object to compare
		actual = testShelf.contents.frames;
		// C. Specify value of the result you expect
		expected = 6;
		assert.strictEqual(actual, expected);
	});

	// TEST 8
	it("removes items of a certain type on the shelf", function() {
		// A. Use method to change contents of testShelf
		let testContents = new Contents(5,4,3);
		let testShelf = new Shelf("bookshelf", testContents);
		testShelf.moveItems("books", 4, "remove");
		
		actual = testShelf.contents.books;
		expected = 1;
		assert.strictEqual(actual, expected);
	});

	// TEST 9
	it("throws an error if trying to subtract more items than are available", function() {
		// A. Create test object
		let testContents = new Contents(5,4,3);
		let testShelf = new Shelf("bookshelf", testContents);
		
		actual = function () {
			testShelf.moveItems("books", 6, "remove");
		}
		expected = { message: "Illegal operation. Cannot remove more books than currently on the shelf."};
		
		assert.throws(actual, expected);
	});

	// TEST 10
	it("throws an error if something other than 'add' or 'remove' is passed in", function() {
		// A. Create test object
		let testContents = new Contents(5,4,3);
		let testShelf = new Shelf("bookshelf", testContents);

		// B. Call function from inside anonymous function
		actual = function() {
			testShelf.moveItems("books", 4, "delete");
		}
		// C. Specify value of the result you expect
		expected = {message: "Invalid operation. The moveItems method can only add or remove items."};
		assert.throws(actual, expected);
	});

});
