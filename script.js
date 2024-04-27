function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0)
        return "rock";
    else if (randomNumber === 1)
        return "paper";
    else
        return "scissors";
}

// let playerScore = 0;
// let computerScore = 0;
// let tie = 0;

function playRound(playerSelection, computerSelection) {

    /*        
    All possible combinations of RPS with 2 players:
        Rock == Rock
        Paper == Paper
        Scissors == Scissors
        Rock > Scissors
        Paper > Rock
        Scissors > Paper
    */

    

    if ((playerSelection.toLowerCase() === "rock" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"))
        return "tie";
    else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"))
        return "you won";
    else if ((playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"))
        return "you lose";
    else return "invalid input";

}//end of playRound function

// function playGame() {
//     const computerSelection = getComputerChoice();
//     //console.log(`computer choice: ${computerSelection}`);
//     let playerSelection = prompt("choose rock, paper or scissors?");
//     console.log(playRound(playerSelection, computerSelection));
//     let round = playRound(playerSelection, computerSelection);
//     if (round === "you won") playerScore++;
//     else if (round === "you lose") computerScore++;
//     else tie++;
// }

//calling playGame function
//playGame();

//ADDED:
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");


rockBtn.addEventListener('click', () =>{
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    let round = playRound(playerSelection, computerSelection);
    console.log(round);
    result.textContent = `you: ${playerSelection} - computer: ${computerSelection} => result = ${round}`;
});


paperBtn.addEventListener('click', () =>{
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    let round = playRound(playerSelection, computerSelection);
    console.log(round);
    result.textContent = `you: ${playerSelection} - computer: ${computerSelection} => result = ${round}`;
});

scissorsBtn.addEventListener('click', () =>{
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    let round = playRound(playerSelection, computerSelection);
    console.log(round);
    result.textContent = `you: ${playerSelection} - computer: ${computerSelection} => result = ${round}`;
});

//

//TODOs:
/*
    - in playRound: create a p and append it to div (to show the result).
    - add a class to the result to add the styling later
    - add a functionality so that when one of the players reaches a score of 5 the game will stops and show the final result
    
*/