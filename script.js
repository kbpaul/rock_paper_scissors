function playRound(playerSelection, computerSelection) {
    // Rock and Scissors || paper and rock || scirrors and paper == win
    //rock and paper || paper and scissor || scissors and rock == loose

    let playerSelectionToLower = playerSelection.toLowerCase();
    let computerSelectionToLower = computerSelection.toLowerCase()
    while(playerSelectionToLower === computerSelectionToLower){
        computerSelection = getComputerChoice();
        computerSelectionToLower = computerSelection.toLowerCase();
    }

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

  function game(){
    /*This function plays the best-of-five game,
     *keeps score and 
     *report the winner or the loser at the end
     */
    let round = 1;
    let wins = 0;
    let loses = 0;

    while(round <= 5){
        const playerSelection = prompt("Enter Rock, Paper or Scissors: ");
        const computerSelection = getComputerChoice();
        let currRound = playRound(playerSelection, computerSelection);
        console.log(currRound);
        if(currRound.includes("You Win")){
            wins++;
        } else {
            loses++;
        }
        console.log(`Wins: ${wins}`);
        console.log(`Loses: ${loses}`);
        console.log(`Number of round: ${round}`)
        round++;
    }

    if(wins  > loses ){
        console.log("Game Won!");
    } else {
        console.log("Game Lose!");
    }
  }
   
  
  game();