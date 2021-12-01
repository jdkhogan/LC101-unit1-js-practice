/**************************************************/
/************* DIRECTORY OF PHYSICIANS ************/
/************** by Carrie Jones, TLF **************/
/**************************************************/

/*
	For more practice problems and prep exercises, see my full collection here: https://tinyurl.com/y3bn6st4
*/

/*
	The goal of this exercise is to learn how to break down a program into small, achievable parts and think through what order things should be in and how it should all fit together. 

	See instructions.txt for requirements.

	See https://tinyurl.com/xt5ux8h6 for a guide on how to proceed.

	My solution: https://replit.com/@CarolineRose/PhysicianDirectory
*/


/**** IMPORTS ****/

const input = require('readline-sync');

/**** DATA ****/

// GIVEN: Doctors (firstName, lastName, phoneNumber)
let doctors = [
	'Bailey, Miranda, 314-555-3144',
	'Kimble, Richard, 618-555-1636',
	'Scully, Dana, 314-555-2975',
	'Mallard, Donald "Ducky", 314-555-8461',
	'Crane, Frasier, 618-555-3839',
	'Grissom, Gil, 314-555-1163',
	'Saroyan, Camille, 636-555-4557',
	'Yang, Cristina, 618-555-0073',
	'Dorian, J.D., 636-555-6392',
	'Ellingham, Martin, 636-555-9037',
	'House, Gregory, 636-555-2873',
	'Lahiri, Mindy, 314-555-1057',
	'Ramoray, Drake, 636-555-8573',
	'Bashir, Julian, 636-555-3948',
	'Sternan, Lilith, 314-555-1816',
	'Cottle, Sherman, 314-555-2930',
	'Brennan, Temperance, 636-555-5928',
	'Shephard, Jack, 618-555-6042',
	'Watson, John, 314-555-2085',
	'Crusher, Beverly, 314-555-9482',
	'Cavanaugh, Jordan, 618-555-3948',
	'Blake, Lucien, 314-555-2832',
	'Saunders, Claire, 636-555-9709',
	'Howser, Doogie, 314-555-7673',
	'Lockhart, Abby, 636-555-3928',
	'Ross, Doug, 314-555-3455',
	'Pierce, Benjamin "Hawkeye", 314-555-1886',
	'Corday, Elizabeth, 314-555-4995',
	'Rasgotra, Neela, 314-555-4816',
	'Doyle, Maggie, 314-555-7573',
	'Carter, John, 314-555-9872',
	'Greene, Mark, 636-555-8788',
	'Tam, Simon, 618-555-2834',
	'Grey, Meredith, 314-555-1195',
	'Avery, Jackson, 636-555-0228',
	'Shepherd, Derek, 314-555-7027',
	'Torres, Callie, 618-555-6639',
	'Wilson, James, 314-555-6837',
	'Cuddy, Lisa, 314-555-5756',
	'Foreman, Eric, 618-555-9446',
	'Cameron, Allison, 636-555-1990',
	'Winchester III, Charles Emerson, 314-555-7736',
	'Hunnicutt, B.J., 314-555-5028',
	'Potter, Sherman, 636-555-1773',
	'Wade, Loretta, 314-555-9282',
	'Bennett, Sam, 314-555-0030',
	'Lawson, Hank, 314-555-7175',
	'Chandler, Phillip, 618-555-9947',
	'Turk, Christopher, 314-555-3386',
	'McCoy, Leonard, 314-555-6962',
	'Bartlet, Abigail, 636-555-4883'
]

// regular expression used to validate input in two of the functions below
const regex = /^[A-Za-z]*$/;

// TODO: Collect 3 search functions in an array (corresponding to types)
let funcChoices = [
	filterByName, 
	filterByInitalOfLastName, 
	filterByAreaCode
];


/**** MINOR FUNCTIONS ****/

// TODO: Transform strings to subarrays of 3 strings
function transform() {
	return doctors.map( function(value) { return value.split(", ") });
}

// TODO: Ask user for type of search & validate response
function selectSearchType() {
	let searchType;
	while ([0,1,2,3].includes(searchType) === false) {
		searchType = Number(input.question(`Please select search type:
		0. Search by name
		1. Search by first letter of last name
		2. Search by area code
		3. View all
		`));
	}
	return searchType
}

// TODO: Filter listings by name (check both first and last names for keyword)
function filterByName() {
	let keyword = input.question("Please enter a name to search: ");

	while (regex.test(keyword) === false) {
		console.log(`Invalid entry.\n`);
		keyword = input.question("Please enter a name to search: ");
	}
	
	let arr = transform();
	// let out = [];
	let out = arr.filter( function(entry) {
		return (entry[0].toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ||
		entry[1].toLowerCase().indexOf(keyword.toLowerCase()) !== -1 )
	});
	return out;
}

// TODO: Filter listings by first letter of last name
function filterByInitalOfLastName() {
	let letter = input.question("Please enter the first letter of the last name: ");

	while (letter.length !== 1 || regex.test(letter) === false) {
		console.log(`Invalid entry.\n`);
		letter = input.question("Please enter the first letter of the last name: ");
	}

	let arr = transform();
	let out = arr.filter(function(entry) {
		return entry[0][0].toLowerCase() === letter.toLowerCase()
	});
	return out;
}

// TODO: Filter listings by area code
function filterByAreaCode() {
	let areaCode = input.question("Please enter the area code to search: ");

	while (areaCode.length !== 3 || isNaN(Number(areaCode))) {
		console.log(`Invalid entry.\n`);
		areaCode = input.question("Please enter a 3-digit area code to search: ");
	}
	
	let arr = transform();
	let out = arr.filter(function(entry) { return entry[2].startsWith(areaCode) });
	return out;
}

// Turns out I misinterpreted the instructions. Should have been looking for a "view all" option rather than running all three search functions
// // * New * TODO: Run all searches
// function runAllSearches() {
// 	let out = [];
// 	let arr = [];

// 	for (func of funcChoices) {
// 		arr = func();
// 		for (entry of arr) {
// 			if (!out.includes(entry)) {
// 				out.push(entry);
// 			}
// 		}
// 	}
	
// 	out = Array.from(new Set(out.map(JSON.stringify)), JSON.parse);
// 	return out;
// }

// TODO: Format and print results
function printResults(arr) {
	if (arr.length === 0) {
		console.log("\nNo results.\n");
	}
	arr.sort();
	for (entry of arr) {
		console.log(`
		Dr. ${entry[1]} ${entry[0]}
		${entry[2]}`)
	}
}


/**** MAIN FUNCTION ****/

// TODO: Put everything together in a single function
function runProgram() {
	let runSearch = true;
	while (runSearch) {
		let search = selectSearchType();
		let results = [];
		if (search === '3') {
			results = transform();
		} else {
			results = funcChoices[search]();			
		}
		printResults(results);
		runSearch = (input.question("\nRun another search? (Y/N) ").toLowerCase() === "y");
	}
}

// TODO: Call main function so that program will run
runProgram();