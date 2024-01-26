// Game Setup
const container = document.querySelector('.container');
const startButton = document.querySelector('button.start-game');
const playGame = document.querySelector('.play-game');
const gameButtons = document.querySelectorAll('button.rock-paper-scissors');
const playerResult = document.querySelector('.player');
const computerResult = document.querySelector('.computer');

const currentResult = document.createElement('div');
currentResult.classList.add('current-result');


// Initialize wins and loses
let wins = 0;
let loses = 0;

// Event Listeners
startButton.addEventListener('click', startGame);
gameButtons.forEach(button => button.addEventListener('click', showResult));

// Functions
function startGame() {

    playGame.style.display = 'block';
    container.style.textAlign = 'center';
    startButton.style.display = 'none';
    currentResult.innerHTML = '';
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionToLower = playerSelection.toLowerCase();
    let computerSelectionToLower = computerSelection.toLowerCase();

    if (
        (playerSelectionToLower === "rock" && computerSelectionToLower === "scissors") ||
        (playerSelectionToLower === "paper" && computerSelectionToLower === "rock") ||
        (playerSelectionToLower === "scissors" && computerSelectionToLower === "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
        (playerSelectionToLower === "rock" && computerSelectionToLower === "paper") ||
        (playerSelectionToLower === "paper" && computerSelectionToLower === "scissors") ||
        (playerSelectionToLower === "scissors" && computerSelectionToLower === "rock")
    ) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You Draw!`;
    }
}

function getComputerChoice() {
    const myArray = ['Rock', 'Paper', 'Scissors'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function showResult(e) {
    const playerSelection = e.target.textContent;
    const computerSelection = getComputerChoice();
    let currRound = playRound(playerSelection, computerSelection);

    
    if (currRound.includes("You Win")) wins++;
    else if (currRound.includes('You Lose')) loses++;


    if (wins === 5 || loses === 5) {
        playGame.style.display = 'none';
        startButton.style.display = 'block';
        container.style.textAlign = 'center';
        currentResult.textContent = wins === 5 ? "You have won the game!" : "You have lost the game!";
        container.appendChild(currentResult);
        wins = 0;
        loses = 0;
    } else {
        currentResult.textContent = currRound;
        container.appendChild(currentResult);
    }


    playerResult.textContent = wins;
    computerResult.textContent = loses;
}
