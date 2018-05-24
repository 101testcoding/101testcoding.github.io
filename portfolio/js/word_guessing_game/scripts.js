

const wordToGuess = "malaysia";

const wordState = [];

let guessesLeft = wordToGuess.length + 2;

const previousGuesses = [];


function displayWordState(state){
	let output = '';

	for(let i = 0; i < state.length; i++){
		const char = state[i];
		if(char != undefined){
			output = output + char;
			output = output + " "
		}
	}

	const wordStateContainer = document.getElementById('word');
	wordStateContainer.innerHTML = output;
}

function displayGuessesLeft(num){
	document.getElementById('guesses-left').innerHTML = num;
}

function displayPreviousGuesses(guessesArray){

	const list = document.getElementById('past-guesses');
	//clear list before adding
	list.innerHTML = ""
	//for each li append child
		for(let i = 0; i < guessesArray.length; i++){

			const guess = document.createElement('li')
			guess.innerHTML = guessesArray[i];
			list.appendChild(guess);
	}
}

// takes in word to guess,. current state fof the word and the new char to guess
function guess(wordToGuess, wordState, currGuess){
	// for each char in the word to be guessed
	for(let i = 0; i < wordToGuess.length; i++){
			// if the character matches the current guess,
			//uodate the word state at that position
		if (wordToGuess[i] == currGuess) {
			wordState[i] = currGuess;
		}
	}

	displayWordState(wordState);


	// guess(wordToGuess, wordState, "x")
}

function checkWon(wordState){
	let hasBlanks = false;
	for( i = 0; i < wordState.length; i++){
		// if any part of wordstate has a blank the return true
		if (wordState[i] == '_'){
			hasBlanks = true;
		}
	}
	return !hasBlanks;
}

function setup(){
	for( i = 0; i < wordToGuess.length; i++){
		wordState.push('_')
	}
	//update word state
	displayWordState(wordState);
	displayGuessesLeft(guessesLeft);
	displayPreviousGuesses(previousGuesses);
}

function setupForm(){
	//add form SUBMIT handler
	const form = document.getElementById('player-input');
	const input = document.getElementById('player-guess');

form.onsubmit = function(event){
	event.preventDefault();
	//get current input
	const currentInput = input.value.toLowerCase();
	//clear input onlick
	input.value = ""
	//check input validity
	if(!validateInput(currentInput, previousGuesses)){
		window.alert('Use only single and unused characters please!')
		return;
	}

	//add guess to previouss guesses
	previousGuesses.push(currentInput);

	// update guesses left
	guessesLeft = guessesLeft - 1;
	displayGuessesLeft(guessesLeft);

	//make guess
	guess(wordToGuess, wordState,currentInput);

	// check if user has won
	const won = checkWon(wordState);
	if(won){
		window.alert("YOU WON!!!")
	}
	//check if user has lost
	// const notWon
	else if(guessesLeft == 0){
		window.alert('YOU LOST!')
	}

	console.log(wordState)
	// initial setup code
	displayGuessesLeft(guessesLeft);
	displayWordState(wordState);
	
	// update previous guesses
	displayPreviousGuesses(previousGuesses)
	}
}
//if guess is a valid choice return true else return false
function validateInput(guess, previousGuesses){
	// check if only one char
	//check if guessed before
	if(guess.length == 1 && previousGuesses.indexOf(guess) == -1){
		return true;
	}
	return false;
}



//inital setup
setup();
setupForm();

