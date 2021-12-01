/**********************************************************/
/************ MODULES - GEOMETRY - STARTER CODE ***********/
/****************** by Carrie Jones, TLF ******************/
/**********************************************************/

/*  
    Students - feel free to fork this to your own repl and practice!  
    For more JS examples and practice problems, see the following 
	document: https://tinyurl.com/y3bn6st4 
*/

/*
	Modules are chunks of code you can import into your codebase.
	These can be written by you, your team, or by somebody on 
	the internet you have never met. This exercise focuses on
	a module you create with a geometric constant and several 
	functions. 
*/

/*
  	Steps:
	1. Define PI in geometry.js and export. 
	2. Import geometry module and test PI with console.log below.
	3. Define functions in geometry.js and add them to export object.
	4. Test multiple functions in template literals as shown below.

	Demo: 
		https://Modules-Geometry.carolinerose.repl.run
	Solution: 
		https://repl.it/@CarolineRose/Modules-Geometry
*/


/** IMPORT FROM GEOMETRY.JS **/

const geometry = require("./geometry");

// Look at contents of imported geometry object
console.log("Here is the entire geometry object:");
console.log(geometry);
console.log("\n");


/** RUN A FEW EXAMPLES **/

// Declare several variables used and reused below
let a, b, c, h, l, p, r, w;

// Test PI by printing it to the console
console.log(geometry.PI);


// Find the circumference c of a circle with a radius of 5
// define variable r
r = 5;

// call imported function and store in variable c
c = geometry.circleCircum(r);
console.log(`\nThe circumference of a circle with radius ${r} is ${c}.`);


// Find the area of a circle with a radius of 7
// define variable r
r = 7;

// call imported function and store in variable a
a = geometry.circleArea(r);
console.log(`The area of a circle with radius ${r} is ${a}.`);


// Find the perimeter of a rectangle with length 14 and width 11
// define variables l and w
l = 14;
w= 11;

// call imported function and store in variable p
p = geometry.rectPerim(l,w);
console.log(`The perimeter of a ${l} x ${w} rectangle is ${p}.`);


// Find the area of a rectangle with length 27 and width 51
// define variables l and w
l = 27;
w = 51;

// call imported function and store in variable a
a = geometry.rectArea(l,w);
console.log(`The area of a ${l} x ${w} rectangle is ${a}.`);


// Find the area of a triangle with base 16 and height 6
// define variables b and h
b = 16;
h = 6;

// call imported function and store in variable a
a = geometry.triArea(b,h);
console.log(`The area of a triangle with base ${b} and height ${h} is ${a}.`);


// Find the hypotenuse of a right triangle with legs of length 2 and 3
// define variables a and b
a = 2;
b = 3;

// call imported function and store in variable c
c = geometry.hypotenuse(a,b);
console.log(`The hypotenuse of a right triangle with legs ${a} and ${b} is ${c}.`);

a = 3; b = 4;
c = geometry.hypotenuse(a,b);
console.log(`The hypotenuse of a right triangle with legs ${a} and ${b} is ${c}.`);


/** BONUS **/

// print the perimeter of a square with side of 5 using a single parameter
p = geometry.rectPerim(5);
console.log(`The perimeter of a square with side of 5 is ${p}.`);

// print the area of a square with side of 5 using a single parameter
a = geometry.rectArea(5);
console.log(`The area of a square with side of 5 is ${a}.`);