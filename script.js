const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");

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
let gameEnded = false;


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
        // const para = document.createElement("p");
        // para.textContent = "tie";
        // result.appendChild(para);
        return "tie"; //to be removed
    }

    else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper")) {
        ++playerScore;
        const para = document.createElement("p");
        // para.textContent = `you won, you chose ${playerSelection} and computer chose ${computerSelection}, your score = ${playerScore}`;
        // result.appendChild(para);
        return "you won"; //to be removed
    }

    else if ((playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors")) {
        ++computerScore;
        // const para = document.createElement("p");
        // para.textContent = `you lose, you chose ${playerSelection} and computer chose ${computerSelection}, computer score = ${computerScore}`;
        // result.appendChild(para);
        return "you lose"; //to be removed
    }


}//end of playRound function



rockBtn.addEventListener('click', () => {
    if (!gameEnded) {
        const computerSelection = getComputerChoice();
        const playerSelection = "rock";
        let round = playRound(playerSelection, computerSelection);
        console.log(round); //to be removed
        result.innerHTML = `
        ${round}<br><br>
        You chose: ${playerSelection}<br>
        Computer chose: ${computerSelection}`; //to be removed or edited   
        endOfGame();
    }
});


paperBtn.addEventListener('click', () => {
    if (!gameEnded) {
        const computerSelection = getComputerChoice();
        const playerSelection = "paper";
        let round = playRound(playerSelection, computerSelection);
        console.log(round); // to be removed
        result.innerHTML = `
        ${round}<br><br>
        Your choice:${playerSelection}<br>
        Computer chose: ${computerSelection}`; //to be removed or edited      
        endOfGame();
    }
});

scissorsBtn.addEventListener('click', () => {
    if (!gameEnded) {
        const computerSelection = getComputerChoice();
        const playerSelection = "scissors";
        let round = playRound(playerSelection, computerSelection);
        console.log(round); //to be removed
        result.innerHTML = `
        ${round}<br><br>
        You chose: ${playerSelection}<br>
        Computer chose: ${computerSelection}`; //to be removed or edited    
        endOfGame();
    }
});


function endOfGame() {
    if (computerScore === 5 || playerScore === 5){
        gameEnded = true;
    if (computerScore === 5) {
        result.innerHTML = `
        You lost the game <br> <br>(╥﹏╥)
        `;
    }
    else if (playerScore === 5) {
        result.innerHTML = `
        You won the game
        `;
    }
}
};

endOfGame();
//

//TODOs:
/*
      - implement restart button
*/