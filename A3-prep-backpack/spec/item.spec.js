const assert = require('assert');
const Item = require('../item.js');


/**** START WITH ITEM TESTS  ****/
/**** THEN MOVE TO BACKPACK TESTS AND METHODS ****/
/**** DO STUDENT TESTS AND METHODS LAST ****/


describe("Item class", function() {

	/*	
		BEFORE YOU BEGIN:
		1) 	Think about when you need assert.strictEqual() vs assert.deepStrictEqual()
		2)	Consider that the assert.throws() method requires a different setup 
			than other methods (look at Command class test in Mars Rover)
	*/

	// Check that name property has been set
	it("correctly instantiates object from class when name is passed in as an argument", function() {
		// set up item to be tested
		item1 = new Item("notebook", "main compartment");
		actual = item1.name;
		expected = "notebook";
		assert.strictEqual(actual, expected);
	});

	// What happens if a name is not an argument?
	it("throws error if name is not passed into constructor as argument", function() {
		// With assert.throws, the test of the actual code must be put inside an anonymous function
		actual = function() { 
			new Item();
		}; 
		// With assert.throws, we expect an object with a message property
		expected = { message: "Name of item is required!" }; 
		assert.throws(actual, expected);
	});

	// Check that location property has been set
	it("correctly instantiates object from class when location is passed in as an argument", function() {
		item1 = new Item("notebook", "main compartment");
		actual = item1.location;
		expected = "main compartment";
		assert.strictEqual(actual, expected);
	});

	// What happens if location is not an argument?
	it("throws error if location is not passed into constructor as argument", function() {
		actual = function() { 
			new Item("notebook");
		}; 
		// With assert.throws, we expect an object with a message property
		expected = { message: "Location is required!" }; 
		assert.throws(actual, expected);
	});

});