/**************************************************/
/*************** CABINETS, PART ONE ***************/
/************** by Carrie Jones, TLF **************/
/**************************************************/

/*  
	Students - feel free to fork this to your own repl and practice! For more JS examples and practice problems, see the following document: https://tinyurl.com/y3bn6st4 
*/

/*
	You are already familiar with the concept that objects hold key/value pairs and are useful for storing several properties together. What if the values of some of your keys are also data structures with multiple elements or properties of their own? Let's explore some different combinations and practice how to access and manipulate the data inside more complex objects.

	Solution:
		https://repl.it/@CarolineRose/CabinetsPart1
*/

/*
	HOT TIP: This series of exercises will print a lot of information to the console. I recommend each time you run it, you use the X at the top right of the console pane to completely clear the previous output first.
*/


/**** PART 1: OBJECTS HOLDING PRIMITIVES AND ARRAYS ****/

/*
	This is not terribly complex just yet, but it's a good place to start. We have a single object, mediaConsole, which has 10 properties representing the items it holds. 
*/

let mediaConsole = {
	television: "Visio",
	receiver: "Onkyo",
	speakers: "Boston",
	streamingDevice: "Roku",
	dvdPlayer: "Panasonic",
	numDvds: 96, // Clearly I should do some spring cleaning...
	numCds: 383, // Don't judge. lol
	gamingConsoles: ["1986 NES", "2009 Wii"],
	numGames: [14, 9],
	decor: ["small vase", "desk clock", "photo in frame", "candle"]
};

/*
	PART 1
	
	Some of these keys have a single string or number as values, but others have arrays of strings or numbers. We can use dot notation OR bracket notation to access the properties of the object, but then we must also use bracket notation to access elements of any arrays.

	You always start with the main structure and work your way inward. 

	Syntax for object DOT notation: 
		object.property - for value of key
		object.property[index] - to get to elements of array

	Syntax for object BRACKET notation:
		object["property"] - for value of key
		object["property"][index] - to get to elements of array
*/

console.log("MEDIA CONSOLE *****************************\n")

// EXAMPLE: Print a sentence or two that talks about the specifics of the television, receiver, speakers, and streaming device. Use DOT notation for the object's properties.
console.log(`I have a ${mediaConsole.television} TV for my video output, and I use an ${mediaConsole.receiver} receiver with ${mediaConsole.speakers} speakers for audio. A separate ${mediaConsole.streamingDevice} streaming device lets me access channels like Netflix, Amazon Prime, Spotify, Pandora, and more.\n`)

// TODO: Print a sentence or two that gives details about the DVD player, the DVDs, and the CDs. Use BRACKET notation for the object's properties, and don't forget the proper syntax where the property key is a string.


// EXAMPLE: Print a list of all the decorative objects on the media console, with each item on a new line. Use BRACKET NOTATION for object properties.
console.log("There are a few decorative items on my console:");
// Use a regular for loop to print each element from the array
for (let i=0; i < mediaConsole["decor"].length; i++) {
	// The first [ ] brackets are for the object property, and the second are for choosing the element in the array we're looping through.
	console.log(`\t${mediaConsole["decor"][i]}`);
}

// TODO: Print a list of gaming Consoles with both the name of the console and the corresponding number of games it has on each line. Use DOT notation.
console.log("\nI have a couple gaming consoles with a few titles.")
for (let i = 0; i < mediaConsole.gamingConsoles.length; i++) {
    console.log(`${mediaConsole.gamingConsoles[i]}: ${mediaConsole.numGames[i]} games`);
}

/*
	Okay, let's say I finally take the time to go through my DVDs and CDs and get rid of anything I can easily get online through a streaming service.
*/

// EXAMPLE: Reduce the number of DVDs by 80, and print a sentence stating the new value stored in the numDvds property.
mediaConsole.numDvds -= 80;
console.log(`\nAfter getting rid of a ton of my old DVDs, there are now only ${mediaConsole.numDvds} DVDs in my collection.`);

// TODO: Reduce the number of CDs by 341, and print a sentence stating the new value stored in the numCDs property.
mediaConsole.numCds -= 341
console.log(`\nI sold a bunch of my CDs at 7th Heaven, so there are now only ${mediaConsole.numCds} CDs in my collection.`);



/**** PARTS 2 & 3: OBJECTS WITH ARRAYS OF OBJECTS AND WITH METHODS ****/

/*
	Okay, before you look at the actual object below, let's look at its structure with a little pseudocode:

	Object
		first property, shelves
			array of 6 objects (top of cabinet, 4 shelves, & staging area)
				each one has 5 properties of its own:
				shelfName, books, bookends, frames, and vases
		second property, printTable - anonymous function

	Skip the PART 3 TODOs in the object for additional methods - you'll get back to those later.

	Right now let's focus on how we get to the data using what we've learned about objects and arrays. We will also practice changing the values of the data at the deepest level.
*/

let cabinet = {
	shelves: [
		{
			shelfName: "Top",
			books: 3,
			bookends: 2,
			frames: 1,
			vases: 1
		},
		{
			shelfName: "Shelf 1",
			books: 14,
			bookends: 1,
			frames: 1,
			vases: 0
		},
		{
			shelfName: "Shelf 2",
			books: 6,
			bookends: 2,
			frames: 2,
			vases: 1
		},
		{
			shelfName: "Shelf 3",
			books: 17,
			bookends: 1,
			frames: 1,
			vases: 2
		},
		{
			shelfName: "Shelf 4",
			books: 23,
			bookends: 0,
			frames: 0,
			vases: 0
		},
		{
			shelfName: "Staging",
			books: 0,
			bookends: 0,
			frames: 0,
			vases: 0
		}
	],
	// PART 3 EXAMPLE: Print array of objects in table format
	printTable: function() {
		// turns out .log isn't the only method for console!
		console.table(this.shelves);
		console.log(""); // extra line
	},	
	// PART 3 TODO: Create a method that will add up the amounts in each category, shelf by shelf, and then print a sentence with the total number of books, bookends, picture frames, and vases in the entire cabinet. There is no return value.
    countItems: function() {
        let total = { books: 0, bookends: 0, frames: 0, vases: 0 };
        for (shelf of this.shelves) {
            total.books += shelf.books;
            total.bookends += shelf.bookends;
            total.frames += shelf.frames;
            total.vases += shelf.vases;
        }
        let out = "The cabinet contains a total of: ";
        for (const [k,v] of Object.entries(total)) {
            out += `${v} ${k}, `
        }
        console.log(out.slice(0,-2) + ".");
    },

	// PART 3 EXAMPLE: Write a method called addItems to accept parameters for the item type (e.g. books), amount to be added, and which shelf they will go on. The function should find the right shelf, add the items, print a sentence stating that the items have been added, and then call the countItems() method so an updated inventory will be printed out. There is no return value.
	addItems: function(itemType, amount, shelf) {
		// Loop through this.shelves, which is an array of objects
		for (let i=0; i < this.shelves.length; i++) {
			// Determine the location of the correct shelf and update the requested property with the amount
			if (this.shelves[i].shelfName === shelf) {
				this.shelves[i][itemType] += amount;
				console.log(`${amount} items of type "${itemType}" have been added to ${shelf}.\n`);
				break;
			} 
		}
		this.countItems();
	},

	// PART 3 TODO: Copy the addItem method and give the copy the name addAllItems. Refactor it so that it takes the itemType and an array of 5 amounts (corresponding to Top and Shelf 1 - Shelf 4) as parameters. It should take items from the staging area and add them to each shelf before printing a table. However, if the numbers requested do not add up to exactly the amount in the staging area, print a message saying so instead.
    addAllItems: function(itemType, arr) {
        this.countItems();
        console.log(`Moving all ${itemType} from the staging area.`)

        // validate inputs
        let staging = this.shelves[5];
        let total = arr.reduce( function(a,b) { return a+b; });
        if (staging[itemType] !== total) {
            console.log(`Error, must allocate exactly the number of ${itemType} in the staging area.`)
        } else {
            for (let i=0; i < this.shelves.length - 1; i++) {
                this.shelves[i][itemType] += arr[i];
            }
            staging[itemType] = 0;
        }

		this.printTable();
		this.countItems();
	},

	// PART 3 TODO: Write a method called removeAllByItemType that accepts an item type (e.g., books) as a parameter, then systematically goes to each shelf (but not the staging area) and puts all the items of that type into the staging area. Hint: You will have to update the numbers of both the shelf you are on and the staging area, and you need to do it in a certain order. Then print a statement about how the cabinet has been emptied of all items of that type and moved to the staging area. Finally, call the method printTable() to verify all items of that type are no longer on the shelves but in the staging area.
    removeAllByItemType: function(itemType) {
        console.log(`Moving ${itemType} to the staging area.`)
        let staging = this.shelves[5];

		for (let i=0; i < this.shelves.length - 1; i++) {
				staging[itemType] += this.shelves[i][itemType];
                this.shelves[i][itemType] = 0;
			} 
		this.printTable();
	},

	// PART 3 TODO: Write a method called removeAllByShelf that takes the name of the shelf as a parameter. Locate the correct shelf, then systematically remove items of each type from the shelf, moving them to the staging area in the process. Then print a statement that all items from that particular shelf have been removed. Finally, call printTable() to verify the items are now in the staging area and the shelf is empty.
    removeAllByShelf: function(shelf) {
        this.countItems();
        let text = "";
        if (shelf === "Top") { text = "shelf "; }
        console.log(`Moving all items from ${shelf} ${text}to the staging area.`)

        let staging = this.shelves[5];

        for (let i=0; i < this.shelves.length - 1; i++) {
			// Determine the location of the correct shelf and update the requested property with the amount
			if (this.shelves[i].shelfName === shelf) {
                staging.books += this.shelves[i].books;
                staging.bookends += this.shelves[i].bookends;
                staging.frames += this.shelves[i].frames;
                staging.vases += this.shelves[i].vases;
                this.shelves[i] = { shelfName: shelf, books: 0, bookends: 0, frames: 0, vases: 0};
				break;
			} 
		}
		this.printTable();
        this.countItems();
	}

};


/*
	PART TWO

	Before adding some more anonymous functions to the cabinet object above, let's just explore accessing and altering existing data.

	Remember, you always start with the main structure and work your way inward. 

	Syntax for object DOT notation: 
		object.property - for value of key
		object.property[index] - to get to elements of array
		object.property[index].property - to get to property of object in array

	Syntax for object BRACKET notation:
		object["property"] - for value of key
		object["property"][index] - to get to elements of array
		object["property"][index]["property"] - to get to property of object in array
*/

console.log("\n\nCABINET *****************************")

// EXAMPLE: Print a sentence stating the number of books on Shelf 4
let shelf4Books = cabinet.shelves[4].books;
console.log(`\nThere are ${shelf4Books} books on Shelf 4.\n`);

// EXAMPLE: Print a list of all the items (and their amounts) on Shelf 2.
console.log("Here are the contents of Shelf 2:");
let shelf2 = cabinet.shelves[2];
for (items in shelf2) {
	if (items !== "shelfName") {
		console.log(`\t${shelf2[items]} ${items}`)
	}	
}
console.log("");

// EXAMPLE: Add 2 new books to each shelf, and print the name of each shelf and the number of the books on it.
for (let i=0; i < cabinet.shelves.length - 1; i++) {
	cabinet.shelves[i].books += 2;
	console.log(`There are now ${cabinet.shelves[i].books} books on ${cabinet.shelves[i].shelfName}.`)
}

// TODO: Print the number of vases on the Top shelf.
let topShelf = cabinet.shelves[0];

let firstPart = `There are ${topShelf.vases} vases`;
if (topShelf.vases === 1) {
    firstPart = "There is 1 vase"
}

console.log("\n"+firstPart,"on the top shelf.");

// TODO: Print the cumulative number of vases on all shelves (including staging).
let totalVases = 0;
for (shelf of cabinet.shelves) {
    totalVases += shelf.vases;
}
console.log(`There are ${totalVases} vases in total.`)

// TODO: Move 6 books from shelf 3 to the Staging area, then print how many bookends and books are on Shelf 3.
let shelf3 = cabinet.shelves[3];
let stagingArea = cabinet.shelves[5];
shelf3.books -= 6;
stagingArea.books += 6;
console.log(`\nThere are now ${shelf3.books} books and ${shelf3.bookends} bookend on shelf 3.`);

// TODO: Print a list with the name of each shelf and the number of picture frames on them (but not staging)
console.log(`\nThe top shelf has ${cabinet.shelves[0].frames} picture frame.`)
for (let i=1; i < cabinet.shelves.length - 1; i++) {
    let frame = "frames";
    if (cabinet.shelves[i].frames === 1) {
        frame = "frame";
    }
    console.log(`${cabinet.shelves[i].shelfName} has ${cabinet.shelves[i].frames} picture ${frame}.`);
}

console.log(""); // an extra line of space after looped output


/* 
	PART 3

	Time to talk about object methods! Methods are properties that hold functions. This is commonly done with anonymous functions, but you can also refer to external functions (with their name but not parameters).

	Let's add some more functions to automate some processes as we rearrange the contents of the shelves. Inside the object itself, you must use "this" (e.g., this.shelves) to reference other properties and methods of the object. But outside the object, you always use the name of the object instead (e.g., cabinet).

	You will be working back and forth between writing the functions in the object above and calling the methods below. Remember that you must put a comma between each property/method inside the object.
*/

// EXAMPLE: Did you notice the first anonymous function stored in the printTable property of the object? This method features a neat little trick for displaying an array of objects in a chart in the console. Here's how you call it - attached to the named object, with () and any parameters (this particular method doesn't have any parameters though).
// TODO: Un-comment the line below and run the program to see the result.
cabinet.printTable();

// TODO: Write a method (in the object above) called countItems.
// TODO: Call the countItems method (below).
cabinet.countItems();

/*
	Now we have two different ways to report the data - the breakdown by shelf in a table and the totals in a sentence. We'll use these along the way in the other methods after we make changes. 
*/

/*
	Let's start by adding things to our cabinet. We've got some new books and vases.
*/

// EXAMPLE: Write a method (in the object above) called addItems.
// EXAMPLE: Call the addItems method and add 8 books to Shelf 2.
// TODO: Un-comment the line below and run the program to see the result.
cabinet.addItems("books", 8, "Shelf 2");

// Notice the item key and shelf key have to be in quotes as arguments of the addItems() method.

// TODO: Call the addItems method and add 2 vases to the top of the cabinet.
cabinet.addItems("vases", 2, "Top");

/*
	Looks like things are going to need to be rearranged a bit further so let's get the frames out of the way for now.
*/

// TODO: Write a method (in the object above) called removeAllByItemType.
// TODO: Call the removeAllByItemType method to remove all the picture frames and place them in the staging area for now.
cabinet.removeAllByItemType("frames");

// TODO: Call the removeAllByItemType method to remove all the vases and place them in the staging area.
cabinet.removeAllByItemType("vases");

/*
	If we are going to really do things right here, we need to clear one or two of the shelves entirely of all types of items.
*/

// TODO: Write a method (in the object above) called removeAllByShelf.
// TODO: Call the removeAllByShelf method to remove all the contents of Shelf 1 and place them in the staging area for now.
cabinet.removeAllByShelf("Shelf 1");

// TODO: Call the removeAllByShelf method to remove all the contents of Shelf 4 and place them in the staging area for now.
cabinet.removeAllByShelf("Shelf 4");

/*
	Alright. Let's start putting some items back on the shelves. But our addItem method only handles one shelf at a time. Let's see if we can do something about that.
*/

// TODO: Use a copy of the addItems method to create a method (in the object above) called addAllItems.
// TODO: Call the addAllItems method to add books back to the shelves as follows: 0 on Top, 12 on Shelf 1, 0 on Shelf 2, 5 on Shelf 3, and 30 on Shelf 4.
let booksToAdd = [0,12,0,5,30];
cabinet.addAllItems("books", booksToAdd);

// TODO: Call the addAllItems method to add the bookend to Shelf 1.
cabinet.addAllItems("bookends", [0,1,0,0,0]);

// TODO: Call the addAllItems method to add the frames to the cabinet as follows: 2 on Top, 1 on Shelf 1, 1 on Shelf 2, 1 on Shelf 3, and 0 on Shelf 4.
let framesToAdd = [2,1,1,1,0];
cabinet.addAllItems("frames", framesToAdd);


// TODO: Call the addAllItems method to add the vases to the cabinet as follows: 1 on Top, 2 on Shelf 1, 2 on Shelf 2, 1 on Shelf 3, and 0 on Shelf 4.
let vasesToAdd = [1,2,2,1,0];
cabinet.addAllItems("vases", vasesToAdd);

/*
	Hey, that looks great!
*/