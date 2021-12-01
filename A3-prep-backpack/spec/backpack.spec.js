const assert = require('assert');
const Backpack = require('../backpack.js');
const Item = require('../item.js');

/**** START WITH ITEM TESTS  ****/
/**** THEN MOVE TO BACKPACK TESTS AND METHODS ****/
/**** DO STUDENT TESTS AND METHODS LAST ****/


describe("Backpack class", function() {

	/*	
		BEFORE YOU BEGIN:
		1) 	Think about when you need assert.strictEqual() vs assert.deepStrictEqual()
		2)	Consider that the assert.throws() method requires a different setup 
			than other methods (look at Command class test in Mars Rover)
	*/

	/* 	
		Even though the Backpack class has three properties as arguments 
		in its constructor, they are declared with default values, 
		so it's worth testing to make sure the object also has those 
		default values if it is instantiated from the class without any 
		arguments. 
	*/

	it("can instantiate an object with no arguments and the main property will have the default value", function() {
		// first create an empty object from your class to use for test
		myBackpack = new Backpack(); 
		// then reference only the part of that object you want to check
		actual = myBackpack.main; 
		expected = []; // this should be the result you expect
		assert.deepStrictEqual(actual, expected); 
		// NOTE: .deepStrictEqual() needed for non-primitive comparison	
	});

	it("can instantiate an object with no arguments and the sidePocket property will have the default value", function() {
		myBackpack = new Backpack(); // object needed for test
		actual = myBackpack.sidePocket; // specific part to check
		expected = null; // result expected from test
		assert.strictEqual(actual, expected); 
		// NOTE: don't need .deepStrictEqual() for null comparison
	});

	/* 
		Now let's see what happens when we DO use arguments when 
		instantiating an object of the Backpack class, and 
		ALSO explore how we might combine three tests in one.
	*/

	it("can instantiate an object with existing values using the constructor's arguments", function() {
		// set up all objects needed for test
		item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment");
		// pass in two arrays and an object as expected for the Backpack constructor
		myBackpack = new Backpack([item1, item4],[item2],item3); 
		// for the sake of testing several strings at once, put test expressions in an array
		actual = [myBackpack.main[1].name, myBackpack.frontPocket[0].name, myBackpack.sidePocket.name];
		// structure the expected results in an array that mirrors the test expressions
		expected = ["spiral notebook", "pencil", "water bottle"];
		assert.deepStrictEqual(actual, expected); 
		// NOTE: .deepStrictEqual() required for array comparison	
	});


	/*
		Now let's use the class method .addToBackpack() 
		instead of the constructor to put items inside.
	*/

	it("can add items to a backpack object using the class's addToBackpack() method", function() {
		// TODO #3: write a test and let it inform how you code the method
        item1 = new Item("textbook", "main compartment");
        myBackpack = new Backpack();
        myBackpack.addToBackpack(item1);
        actual = myBackpack.main[0].name;
        expected = "textbook";
        assert.strictEqual(actual,expected);
	});

	/* 
		This test is essentially the same as the previous one, 
		but use an additional variable to break up the 
		notation a bit prior to setting the 'actual' property. 
	*/

	it("can add item to a backpack object using the class's addToBackpack() method", function() {
		// TODO #4: write a test and let it inform how you code the method
	});

	/* 
		What if the item doesn't have a specified location? The Item 
		constructor requires an argument for location, even if it's null.
		This is different from the Backpack constructor, which allows 
		for no arguments because defaults are set as parameters.
	*/
		
	it("can assign location to item using addToBackpack() method if location was null", function() {
		// TODO #5: write a test and let it inform how you code the method
        item1 = new Item("textbook", null);
        myBackpack = new Backpack();
        myBackpack.addToBackpack(item1);
        actual = myBackpack.main[0].name;
        expected = "textbook";
        assert.strictEqual(actual,expected);
	});


	/* 
		Now we need to make sure a helper function, .findItemInArray(), can be 
		written and tested without needing the findItemInBackpack() method 
		that will eventually call it.
	*/

	it("should return index of item that is located in an array", function() {
		item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment");
		// pass in two arrays and an object as expected for the Backpack constructor
		myBackpack = new Backpack([item1, item4],[item2],item3); 
        
        actual = myBackpack.findItemInArray(item1,myBackpack.main);
        expected = "main compartment";
        assert.strictEqual(actual,expected);
	});

	it("should return -1 if item is not found in array", function() {
		// TODO #7: write a test and let it inform how you code the method
        item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment");
		// pass in two arrays and an object as expected for the Backpack constructor
		myBackpack = new Backpack([item1, item4],[item2],item3); 
        
        actual = myBackpack.findItemInArray(item3, myBackpack.main);
        expected = -1;
        assert.strictEqual(actual,expected);
	});


	/* 
		Now we need to write and test a method, .findItemInBackpack(), that 
		returns the compartment of a specific item (either an array or object 
		depending on which property of Backpack it is)
	*/

	// What if it's in the main pocket or front pocket? (arrays of objects)
	it("should return property (compartment) of backpack if item is located in main or front pocket", function() {
		item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment");
		// pass in two arrays and an object as expected for the Backpack constructor
		myBackpack = new Backpack([item1, item4],[item2],item3); 
        
        actual = myBackpack.findItemInBackpack(item2);
        expected = "front pocket";
        assert.strictEqual(actual,expected);
        
        // TODO #8: write a test and let it inform how you code the method
	});

	// What if it's in the side pocket? (one object)
	it("should return property (compartment) of backpack if item is location in side pocket", function() {
		item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment");
		// pass in two arrays and an object as expected for the Backpack constructor
		myBackpack = new Backpack([item1, item4],[item2],item3); 
        
        actual = myBackpack.findItemInBackpack(item3);
        expected = "side pocket";
        assert.strictEqual(actual,expected);
	});

	// What if it is a front pocket or main compartment item but isn't there?
	it("throws error if item is not found in main or front pocket", function() {
		item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment"); // not passed to Backpack
		// pass in two arrays and an object as expected for the Backpack constructor
		myBackpack = new Backpack([item1],[item2],item3); 
        
        actual = function() {
            myBackpack.findItemInBackpack(item4);
        };
        expected = { message: "Item not found!" }; 
		assert.throws(actual, expected);
	});

	// What if it is a side pocket item but isn't there? 
	it("throws error if item is not found in side pocket", function() {
		item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment");
        item5 = new Item("iPod", "side pocket"); // not passed to Backpack
		// pass in two arrays and an object as expected for the Backpack constructor
		myBackpack = new Backpack([item1, item4],[item2],item3); 
        
        actual = function() {
            myBackpack.findItemInBackpack(item5);
        };
        expected = { message: "Item not found!" }; 
		assert.throws(actual, expected);
	});


	/*
		What about a function to remove a single item from the backpack?
		Write your tests below and let them inform how you code the
		function in backpack.js
	*/
    it("can remove an item from the main compartment of a backpack object using the class's removeItemFromBackpack() method", function() {
        item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment");
		// pass in two arrays and an object as expected for the Backpack constructor
		myBackpack = new Backpack([item1, item4],[item2],item3); 
        
        let confirmation = myBackpack.removeItemFromBackpack(item4);
        actual = [ confirmation, myBackpack.main ];
        expected = ["The spiral notebook has been removed.", [item1] ];
        assert.deepStrictEqual(actual,expected);
	});

    it("can remove an item from the front pocket of a backpack object using the class's removeItemFromBackpack() method", function() {
        item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment");
		// pass in two arrays and an object as expected for the Backpack constructor
		myBackpack = new Backpack([item1, item4],[item2],item3); 
        
        let confirmation = myBackpack.removeItemFromBackpack(item2);
        actual = [ confirmation, myBackpack.frontPocket ];
        expected = ["The pencil has been removed.", [] ];
        assert.deepStrictEqual(actual,expected);
	});

    it("can remove an item from the side pocket of a backpack object using the class's removeItemFromBackpack() method", function() {
        item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment");
		// pass in two arrays and an object as expected for the Backpack constructor
		myBackpack = new Backpack([item1, item4],[item2],item3); 
        
        let confirmation = myBackpack.removeItemFromBackpack(item3);
        actual = [ confirmation, myBackpack.sidePocket ];
        expected = ["The water bottle has been removed.", null ];
        assert.deepStrictEqual(actual,expected);
	});

    it("throws error if item to remove is not in backpack", function() {
        item1 = new Item("textbook", "main compartment");
		item2 = new Item("pencil", "front pocket");
		item3 = new Item("water bottle", "side pocket");
		item4 = new Item("spiral notebook", "main compartment"); // not passed to Backpack
		// pass in two arrays and an object as expected for the Backpack constructor
		myBackpack = new Backpack([item1],[item2],item3); 
        
        actual = function() {
            myBackpack.removeItemFromBackpack(item4);
        };
        expected = { message: "Item not found!" }; 
		assert.throws(actual, expected);
	});

});