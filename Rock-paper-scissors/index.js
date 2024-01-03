let options = ["rock", "paper", "scissors"];
let lives = 3;

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
}

function game() {
    for (let i = 0; i < 5 && lives > 0; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Choose rock, paper, scissors").toLocaleLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log("You have " + lives + " lives left.");
    }
    if (lives == 0) {
        console.log("You have lost the game.");
    }else{
        console.log("You have won the game.");
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!\nPlayer chose: " + playerSelection + "\ncomputer chose: " + computerSelection);
        return playRound(playerSelection, getComputerChoice());
    } else if ((playerSelection === options[0] && computerSelection === options[2]) || (playerSelection === options[1] && computerSelection === options[0]) || (playerSelection === options[2] && computerSelection === options[1])) {
        return result = "It's a win!\nPlayer chose: " + playerSelection + "\ncomputer chose: " + computerSelection;
    } else {
        lives--;
        return result = "It's a lose!\nPlayer chose: " + playerSelection + "\ncomputer chose: " + computerSelection;
    }
}

game();


