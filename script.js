const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const restart = document.querySelector("#restart-btn");

let playerScore = 0;
let computerScore = 0;
let gameEnded = false;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0)
        return "rock";
    else if (randomNumber === 1)
        return "paper";
    else
        return "scissors";
}

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
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors")) {
        return "tie"; 
    }

    else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")) {
        ++playerScore;
        return "you won";
    }

    else if ((playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors")) {
        ++computerScore;
        return "you lose"; 
    }


}//end of playRound function


function endOfGame() {
    if (computerScore === 5 || playerScore === 5) {
        gameEnded = true;
        if (computerScore === 5) {
            result.innerHTML = `
            You lost the game <br> <br>(╥﹏╥)
            `;
            result.style.color = "rgb(107, 20, 20)";
            result.style.fontWeight = "700"
        }
        else if (playerScore === 5) {
            result.innerHTML = `
            You won the game <br> <br> (๑´>᎑<)~*
            `;
            result.style.color = "rgb(55, 29, 147)"
            result.style.fontWeight = "700"
        }
    }
};


function restartGame() {
    playerScore = 0; 
    computerScore = 0; 
    gameEnded = false; 
    result.innerHTML = `Rock Paper Scissors<br><br>Click R, P, or S<br><br>**start**`; 
    result.style.color = ""; 
    result.style.fontWeight = "";
    score.innerHTML =""
}

//Event listeners:

rockBtn.addEventListener('click', () => {
    if (!gameEnded) {
        const computerSelection = getComputerChoice();
        const playerSelection = "rock";
        let round = playRound(playerSelection, computerSelection);
        result.innerHTML = `
        You chose:<br>${playerSelection}<br><br>
        Comp chose:<br> ${computerSelection}<br><br><br>
        <strong> -- ${round} -- </strong>
        `;   
        score.innerHTML =`
        you: ${playerScore} comp: ${computerScore}
        `
        endOfGame();
    }
});


paperBtn.addEventListener('click', () => {
    if (!gameEnded) {
        const computerSelection = getComputerChoice();
        const playerSelection = "paper";
        let round = playRound(playerSelection, computerSelection);
        result.innerHTML = `
        You chose:<br>${playerSelection}<br><br>
        Comp chose:<br> ${computerSelection}<br><br><br>
        <strong> -- ${round} -- </strong>
        `;    
        score.innerHTML =`
        you: ${playerScore} comp: ${computerScore}
        ` 
        endOfGame();
    }
});

scissorsBtn.addEventListener('click', () => {
    if (!gameEnded) {
        const computerSelection = getComputerChoice();
        const playerSelection = "scissors";
        let round = playRound(playerSelection, computerSelection);
        result.innerHTML = `
        You chose:<br>${playerSelection}<br><br>
        Comp chose:<br> ${computerSelection}<br><br><br>
        <strong> -- ${round} -- </strong>
        `;  
        score.innerHTML =`
        you: ${playerScore} comp: ${computerScore}
        `   
        endOfGame();
    }
});

restart.addEventListener('click', restartGame);