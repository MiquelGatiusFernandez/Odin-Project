let options = ["rock", "paper", "scissors"];
let lives = 3;
let rounds = 0;
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
}

function game(playerSelection) {
    if (lives > 0 && rounds < 5) {
        let computerSelection = getComputerChoice();
        document.querySelector('.result').textContent = playRound(playerSelection, computerSelection);
        document.querySelector('.lives').textContent = `You have ${lives} lives left.`;
        rounds++;
        if (lives <= 0) {
            alert("You've lost.");
        } else if (rounds >= 5) {
            alert("You've won.");
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!\nPlayer chose: " + playerSelection + "\ncomputer chose: " + computerSelection + " \n";
    } else if ((playerSelection === options[0] && computerSelection === options[2]) || (playerSelection === options[1] && computerSelection === options[0]) || (playerSelection === options[2] && computerSelection === options[1])) {
        return "It's a win!\nPlayer chose: " + playerSelection + "\ncomputer chose: " + computerSelection;
    } else {
        lives--;
        return "It's a lose!\nPlayer chose: " + playerSelection + "\ncomputer chose: " + computerSelection;
    }
}

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
            game(event.target.value);
    });
});




