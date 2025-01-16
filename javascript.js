function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    return number;
}

function getHumanChoice() {
    let choice = prompt("Please enter either rock, paper, or scissors.");
    return choice.toLowerCase();
}

function playRound() {
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 5 && computerScore < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        switch(humanChoice) {
            case "rock":
                if (computerChoice == 0) {
                    console.log("Tie! Rock ties with rock!")
                } else if (computerChoice == 1) {
                    console.log("You Lose! Rock loses to paper!")
                    computerScore++;
                } else {
                    console.log("You Win! Rock wins against rock!")
                    humanScore++;
                }
                break;
            case "paper":
                if (computerChoice == 0) {
                    console.log("You Win! Paper beats rock!");
                    humanScore++;
                } else if (computerChoice == 1) {
                    console.log("Tie! Paper ties with paper!");
                } else {
                    console.log("You Lose! Paper loses against scissors!");
                    computerScore++;
                }
                break;
            case "scissors":
                if (computerChoice == 0) {
                    console.log("You Lose! Scissors loses to rock!");
                    computerScore++;
                } else if (computerChoice == 1) {
                    console.log("You Win! Scissors wins against paper!");
                    humanScore++;
                } else {
                    console.log("Tie! Scissors ties with scissors!");
                }
                break;
            default:
                console.log("Something went wrong!");
                break;
        }   
    }
    if (computerScore == 5) {
        console.log("Computer Wins! Try again next time.");
    }
    else {
        console.log("Congratulations! You won!")
    }
}