function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0)
        return "rock";
    else if (randomNumber === 1)
        return "paper";
    else
        return "scissors";
}

let playerScore = 0;
let computerScore = 0;
let tie = 0;

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

function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        //console.log(`computer choice: ${computerSelection}`);
        let playerSelection = prompt("choose rock, paper or scissors?");
        console.log(playRound(playerSelection, computerSelection));
        let round = playRound(playerSelection, computerSelection);
        if (round === "you won") playerScore++;
        else if (round === "you lose") computerScore++;
        else tie++;

    }//end of for loop

    if (playerScore > computerScore)
        console.log(`you won with ${playerScore} scores`);
    else if (computerScore > playerScore)
        console.log(`computer beats you with ${computerScore} scores`);
    else console.log("it's a tie")

}//end of playGame function

//calling playGame function
playGame();