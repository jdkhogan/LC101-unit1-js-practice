const assert = require('assert');
const Student = require('../student.js');
const Backpack = require('../backpack.js');
const Item = require('../item.js');


// /**** START WITH ITEM TESTS  ****/
// /**** THEN MOVE TO BACKPACK TESTS AND METHODS ****/
// /**** DO STUDENT TESTS AND METHODS LAST ****/


describe("Student class", function() {

// 	/*	
// 		BEFORE YOU BEGIN:
// 		1) 	Think about when you need assert.strictEqual() vs assert.deepStrictEqual()
// 		2)	Consider that the assert.throws() method requires a different setup 
// 			than other methods (look at Command class test in Mars Rover)
// 	*/

// 	// Check that name property has been set
	it("correctly instantiates Student object from class when name is passed in as an argument", function() {
		student = new Student("Oscar the Grouch");

		actual = student.name;
		expected = "Oscar the Grouch";
		assert.strictEqual(actual, expected);
	});

// 	// What if happens if there is no name argument?
	it("throws error if name is NOT passed into constructor as first parameter", function() {
        actual = function() { 
			new Student();
		}; 
		// With assert.throws, we expect an object with a message property
		expected = { message: "Name of student is required!" }; 
		assert.throws(actual, expected);
	});


// 	/* 
// 	The following tests make sure Item objects inside a backpack can be referenced from the Student class after using Student methods
// 	*/

	// Try adding multiple items to backpack
	it("puts multiple items in backpack using fillBackpack() method", function() {
		student = new Student("Oscar the Grouch");
        item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment");

        student.fillBackpack(item1, item2, item3, item4);
		// for the sake of testing several strings at once, put test expressions in an array
		actual = [student.backpack.main[1].name, student.backpack.frontPocket[0].name, student.backpack.sidePocket.name];
		// structure the expected results in an array that mirrors the test expressions
		expected = ["spiral notebook", "pencil", "water bottle"];
        assert.deepStrictEqual(actual, expected);
	});

	// Try adding a single item object to the backpack
	it("puts one item in backpack using fillBackpack() method", function() {
        student = new Student("Oscar the Grouch");
        item1 = new Item("textbook", "main compartment");

        student.fillBackpack(item1);
        actual = student.backpack.main[0].name;
        expected = "textbook";
        assert.strictEqual(actual, expected);
	});

    // What happens if we call fillBackpack() without passing Items?
	it("throws error when calling fillBackpack() method without passing items", function() {
        student = new Student("Oscar the Grouch");
        item1 = new Item("textbook", "main compartment");

        actual = function () {
            student.fillBackpack();
        };
        
        expected = { message: "Please enter an item to add." };
        assert.throws(actual, expected);
	});

	// What if we want to empty the backpack?
	it("empties the backpack with emptyBackpack() method", function() {
		student = new Student("Oscar the Grouch");
        item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment");

        student.fillBackpack(item1, item2, item3, item4);
        
        actual = student.emptyBackpack();
        expected = "Backpack empty."
        assert.strictEqual(actual, expected);
	});

});