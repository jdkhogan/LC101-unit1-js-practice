/**** GEOMETRY MODULE ****/


/** CIRCLE **/

// Declare constant for PI to eight decimal places
const PI = 3.14159265;

// Write function to return the circumference of a circle
function calcCircumference(radius) {
    return (2 * PI * radius).toFixed(2);
}

// Write function to return the area of a circle
function calcAreaOfCircle(radius) {
    return (PI * radius ** 2).toFixed(2);
}



/** RECTANGLE **/

// Write function to return the perimeter of a rectangle
// Bonus: use a default value to allow a single parameter for squares
function calcPerimeterOfRectangle(length,width=0) {
    if (width === 0) {
        width = length;
    }
    return 2 * (length + width);
}

// Write function to return the area of a rectangle
// Bonus: use a default value to allow a single parameter for squares
function calcAreaOfRectangle(length,width=0) {
    if (width === 0) {
        width = length;
    }
    return length * width;
}



/** TRIANGLE **/

// Write function to return area of triangle
function calcAreaOfTriangle(base, height) {
    return .5 * base * height;
}

// Write function to return hypotenuse of right triangle
function calcHypotenuseOfRightTriangle(a,b) {
    let cSquared = a**2 + b**2;
    /**
    if (Math.sqrt(cSquared) % 1 === 0) {  // return only the integer answers
        return Math.sqrt(cSquared);
    }
    return `Square root of ${cSquared}`  // return string literal rather than decimal
    */
    return (Math.sqrt(cSquared) % 1 === 0 ? Math.sqrt(cSquared) : `Square root of ${cSquared}`); // ternary operators are fun.
}


/** EXPORTS **/

// Define export of constant and all functions in an object
module.exports = {
    PI: PI,
	circleCircum: calcCircumference,
	circleArea: calcAreaOfCircle,
	rectPerim: calcPerimeterOfRectangle,
	rectArea: calcAreaOfRectangle,
	triArea: calcAreaOfTriangle,
	hypotenuse: calcHypotenuseOfRightTriangle
}