/* 
	TODO: Declare the Contents class and create a constructor with three properties: books, frames, and decor. These will each hold a number. The tests for this class have already been written in specs/contents.spec.js, so if the constructor is set up properly they will both pass. This class will not have any methods.
*/

class Contents {

	/* 
		The constructor sets the rules for instantiating (creating an instance of) a Contents object. Each shelf will hold exactly one Contents object.

		Tests 1-2 check the class constructor.
	*/
 
	constructor(books, frames, decor) { 
		this.books = books;
		this.frames = frames;
		this.decor = decor;
	}

}

// TODO: Export Contents class
module.exports = Contents;