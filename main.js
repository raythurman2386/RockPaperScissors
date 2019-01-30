let winHead = document.querySelector('h3');
let playerScoreHead = document.querySelector('#score1');
let compScoreHead = document.querySelector('#score2');
var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');

function computerPlay() {
    var choices = ['rock', 'paper', 'scissors'];
    result = choices[Math.floor(Math.random() * choices.length)]
    return result;
}

let playerChoice = () => {
    result = prompt('Pick Rock, Paper, or Scissors');
    return result;
}


function winner(playerChoice, computerPlay) {
    if (playerChoice == "rock" && computerPlay == "scissors" || playerChoice == "paper" && computerPlay == "rock" ||
        playerChoice == "scissors" && computerPlay == "paper") {
        winHead.textContent = `You win! ${playerChoice} beats ${computerPlay}`;
        return `You win! ${playerChoice} beats ${computerPlay}`;
    } else if (playerChoice == "rock" && computerPlay == "paper" ||
        playerChoice == "paper" && computerPlay == "scissors" ||
        playerChoice == "scissors" && computerPlay == "rock") {
        winHead.textContent = `You lose! ${computerPlay} beats ${playerChoice}`
        return `You lose! ${computerPlay} beats ${playerChoice}`;
    } else {
        winHead.textContent = "It's a tie. No one scores"
        return "It's a tie. No one Scores"
    }
}

function validateInput(input) {
    if (input != "paper" && input != "scissors" && input != "rock") {
        console.log("Wrong input")
        playerChoice();
    } else {
        return input;
    }
}

function endscore(computerScore, playerScore) {
    if (computerScore > playerScore) {
        message = "You lost";
    } else if (computerScore < playerScore) {
        message = "You won ";
    } else {
        message = "Its a tie";
    }
    winHead.textContent = message + " : " + playerScore + " against " + computerScore
}

function playGame() {
    let playerScore = 0
    let computerScore = 0
    for (i = 1; i <= 5; i++) {
        let computerChoice = computerPlay()
        let personChoice = playerChoice()
        let checkedChoicePerson = validateInput(personChoice)
        solution = winner(checkedChoicePerson, computerChoice)
        console.log(solution)
        if (solution.includes("win")) {
            playerScore++;
            playerScoreHead.textContent = playerScore;

        }
        if (solution.includes("lose")) {
            computerScore++
            compScoreHead.textContent = computerScore;
        }
    }
    endscore(computerScore, playerScore)

}
playGame()