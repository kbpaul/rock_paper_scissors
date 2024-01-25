function playRound(playerSelection, computerSelection) {
    // Rock and Scissors || paper and rock || scirrors and paper == win
    //rock and paper || paper and scissor || scissors and rock == loose

    let playerSelectionToLower = playerSelection.toLowerCase();
    let computerSelectionToLower = computerSelection.toLowerCase()
    

    let str; 
    if( playerSelectionToLower === "rock" && computerSelectionToLower === "scissors" ||
        playerSelectionToLower === "paper" && computerSelectionToLower === "rock" ||
        playerSelectionToLower === "scissors" && computerSelectionToLower === "paper")
    {
        str = `You Win! ${playerSelection} beats ${computerSelection}`;
    } 
    else if (
        playerSelectionToLower === "rock" && computerSelectionToLower === "paper" ||
        playerSelectionToLower === "paper" && computerSelectionToLower === "scissors" ||
        playerSelectionToLower === "scissors" && computerSelectionToLower === "rock")
    {
        str = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } 
    else {
            str = `You Draw!`;
        }

    return str;
}

function getComputerChoice(){
    const myArray = ['Rock', 'Paper', 'Scissors'];  
    return myArray[Math.floor(Math.random() * myArray.length)]; 
}

// function game(){
//     /*This function plays the best-of-five game,
//      *keeps score and 
//      *report the winner or the loser at the end
//      */
//     let round = 1;
//     let wins = 0;
//     let loses = 0;


//         const playerSelection = prompt("Enter Rock, Paper or Scissors: ");
//         const computerSelection = getComputerChoice();
//         let currRound = playRound(playerSelection, computerSelection);
//         console.log(currRound);
//         if(currRound.includes("You Win")){
//             wins++;
//         } else {
//             loses++;
//         }
//         console.log(`Wins: ${wins}`);
//         console.log(`Loses: ${loses}`);
//         console.log(`Number of round: ${round}`)
//         round++;
    

//     // if(wins  > loses ){
//     //     console.log("Game Won!");
//     // } else {
//     //     console.log("Game Lose!");
//     // }
//   }
   
  
//   game();


let wins = 0;
let loses = 0;


const gameButtons = document.querySelectorAll('button');
const initialResult = document.querySelector('.initial-result');
const finalResult = document.querySelector('.final-result')
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const anotherH2 = document.createElement('h2');

gameButtons.forEach(button => { button.addEventListener('click', showResult); });

function showResult(e) {
    const playerSelection = e.target.textContent;
    const computerSelection = getComputerChoice();
    let currRound = playRound(playerSelection, computerSelection);

    if(currRound.includes("You Win")) wins++;
    else if(currRound.includes('You Lose')) loses++;
    

    // Clear previous content before appending new elements
    initialResult.innerHTML = '';

    // Append the new elements to the div
    h1.textContent = currRound;
    h2.textContent = (`Wins: ${wins}`);
    anotherH2.textContent = (`Loses: ${loses}`);

    [h1, h2, anotherH2].forEach(element => initialResult.appendChild(element));

    if (wins === 5 || loses === 5) {
        finalResult.textContent = wins === 5 ? "You have won the game!" : "You have lost the game!";
        wins = 0;
        loses = 0;
    }
    
    // result.textContent = currRound;
}