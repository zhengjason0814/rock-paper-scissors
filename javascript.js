let humanScore = 0;
let computerScore = 0;

let buttons = document.querySelector(".choices");
buttons.addEventListener("click", playRound);

const body = document.querySelector("body");

const message = document.createElement("p");
const playerScore = document.createElement("p");
const botScore = document.createElement("p");

message.style.textAlign = "center";
playerScore.style.textAlign = "center";
botScore.style.textAlign = "center";

message.textContent = "Press any button choice to play a round!";

body.appendChild(message);
body.appendChild(playerScore);
body.appendChild(botScore);

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(event) {
        target = event.target.id;
        let computerChoice = getComputerChoice();

        switch(target) {
            case "rock":
                if (computerChoice == 0) {
                    message.textContent = "Tie! Rock ties with rock!";
                } else if (computerChoice == 1) {
                    message.textContent = "You Lose! Rock loses to paper!";
                    computerScore++;
                    playerScore.textContent = `Player Score: ${humanScore}`
                    botScore.textContent = `Computer Score: ${computerScore}`
                } else {
                    message.textContent = "You Win! Rock wins against scissors!";
                    humanScore++;
                    playerScore.textContent = `Player Score: ${humanScore}`
                    botScore.textContent = `Computer Score: ${computerScore}`
                }
                break;
            case "paper":
                if (computerChoice == 0) {
                    message.textContent = "You Win! Paper beats rock!";
                    humanScore++;
                    playerScore.textContent = `Player Score: ${humanScore}`
                    botScore.textContent = `Computer Score: ${computerScore}`
                } else if (computerChoice == 1) {
                    message.textContent = "Tie! Paper ties with paper!";
                } else {
                    message.textContent = "You Lose! Paper loses against scissors!";
                    computerScore++;
                    playerScore.textContent = `Player Score: ${humanScore}`
                    botScore.textContent = `Computer Score: ${computerScore}`
                }
                break;
            case "scissors":
                if (computerChoice == 0) {
                    message.textContent = "You Lose! Scissors loses to rock!";
                    computerScore++;
                    playerScore.textContent = `Player Score: ${humanScore}`
                    botScore.textContent = `Computer Score: ${computerScore}`
                } else if (computerChoice == 1) {
                    message.textContent = "You Win! Scissors wins against paper!";
                    humanScore++;
                    playerScore.textContent = `Player Score: ${humanScore}`
                    botScore.textContent = `Computer Score: ${computerScore}`
                } else {
                    message.textContent = "Tie! Scissors ties with scissors!";
                }
                break;
            default:
                console.log("Something went wrong!");
                break;
        } 
    if (computerScore === 5) {
        message.textContent = "Computer Wins! Try again next time.";
        computerScore = 0;
        humanScore = 0;
    }
    else if (humanScore === 5) {
        message.textContent = "Congratulations! You won!";
        computerScore = 0;
        humanScore = 0;
    }
}