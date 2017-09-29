/* 1. win count variable
2. lose count variable
3. guesses left count variable (that decrements down) (that decrements)
4. array that accepts keypush and writes that keypush to the document
5. reset #3, or guesses left Counter after 9 tries (reset to 0)
6. done */


// ****** SETTING ALL VARIABLES HERE **********

// Start with a score of 0
var winCount = "STRING";
// Start with a score of 0
var loseCount = 0;
// Start with a score of 9     -- must access this and then (later) decrement it
var guessesRemaining = 9;


// Array with ALL Alphabet letters

// Randomly chooses a choice from the options array. This is the Computer's guess. Stores in computerGuess.

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t','u','v','w','x','y','z'];

// userInput will be stored in an Array                   


// ******** KEY PRESS ACTION (FROM USER) ***********



// When user presses a key, it will run this function..    

document.onkeyup = function(event) {
		console.log("dwf");

// Determine which key was pressed, store it in userInput variable
      var userInput = event.key;
// This is where it's stored .... Chooses a choice from the computerChoice Array
      var computerGuess = computerChoices(Math.floor(Math.random() * computerChoices.length));
      		console.log(computerGuess);
      		console.log(userInput);
// Begin Logic // This is the Logic

	/*  if (userInput === computerGuess[i]) {
		winCount++;
	} else {
		loseCount--;
	}
} */
}
// Function that updates scores...						**TESTING**

function updateWinScore() {
	document.querySelector('#winCount').innerHTML = winCount;
}


***


if {										// duplicate data and values
	for (i = 0;, i < arrayOne.length; i++) {
	console.log()

	for ()						{
		console.log(true)
	}

} else {
	console.log(false)
}




There is one array with duplicates 
There is another array with no duplicates
Each array contains numbers, or integers

There is will be a function that checks to see if there are duplicates
Function will return true (if)
Function will return false (if not)


duplicate function () {
	
}

nested for loop
2 for loops

duplicat
********



function 

     							** assignment operators
i !-- j && arr[i] === arr[j])

								** need to understand this












/* indexOf();


array with whole alphabet


need: 
array
counter (for loop)
if statement with "letter generator"

how to generate a random letter?

string matching =  ===

else statement

array for holding "guessed" letters

reset for when Correct letter is guessed

// to get value of key
 document.onkeyup = function(event) {
        userText.textContent = event.key;


problem: i need to find a way to access the string in wins, loses, and guessess remaining
answer:
document.getElementById()


guessesRemaining = decrementer  */
