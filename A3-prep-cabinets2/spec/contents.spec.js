// TODO: Import assert and the Contents class
const assert = require('assert');
const Contents = require('../contents.js');

/* 	
	Remember, practing TDD methodology means writing the test _before_ you write the code you plan to test.

	Check instructions.txt for definitions of different types of test methods.
*/

// EXAMPLE: Make sure objects are instantiated properly
describe("Contents class constructor", function() {

	// TEST 1 
	it("correctly instantiates an object from Contents class when three numbers are passed in as arguments", function() {
		// A. Create an object from your class to use for test
		someContents = new Contents(17, 2, 3); 
		// B. Reference the object or property to be compared
		actual = someContents;
		// C. Specify the value of the result you expect
		expected = {
			books: 17,
			frames: 2,
			decor: 3
		}
		// D. Make the comparison
		assert.strictEqual(actual.books, expected.books); 
	});

	// TEST 2
	it("accepts changes in value of its properties with bracket notation or dot notation", function() {
		// A. Set up object and change its values
		otherContents = new Contents(15, 3, 1); 
		otherContents["books"] = 20;
		otherContents.decor = 4;
		// B. Reference items to be compared
		actual1 = otherContents.books;
		actual2 = otherContents.decor;
		// C. Specify expected result
		expected1 = 20;
		expected2 = 4;
		// D. Make the comparison
		assert.strictEqual(actual1, expected1); 
		assert.strictEqual(actual2, expected2);
	});

});