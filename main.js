let winHead = document.querySelector('h3')
let playerScoreHead = document.querySelector('#score1')
let compScoreHead = document.querySelector('#score2')
var button = document.querySelectorAll('#buttons')

button.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(button.className);
    });
});

function computerPlay() {
    choice = Math.random();
    if (choice <= 0.33) {
        return 'rock';
    } else if (choice <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playerChoice() {
    result = prompt('Choose Rock, paper, or scissors: ');
    return result = result.toLowerCase();
    // alert(playerChoice)
};


function winner(playerChoice, computerPlay) {
    if (playerChoice == "rock" && computerPlay == "scissors") {
        winHead.textContent = "You win! Rocks beats scissors"
        return "You win! Rocks beats scissors"
    }
    if (playerChoice == "rock" && computerPlay == "paper") {
        winHead.textContent = "You lose! Paper beats rock"
        return "You lose! Paper beats rock"
    }
    if (playerChoice == "paper" && computerPlay == "rock") {
        winHead.textContent = "You win! Paper beats rock"
        return "You win! Paper beats rock"
    }
    if (playerChoice == "paper" && computerPlay == "scissors") {
        winHead.textContent = "You lose! Scissors beats paper"
        return "You lose! Scissors beats paper"
    }
    if (playerChoice == "scissors" && computerPlay == "rock") {
        winHead.textContent = "You lose! Rock beats scissors"
        return "You lose! Rock beats scissors"
    }
    if (playerChoice == "scissors" && computerPlay == "paper") {
        winHead.textContent = "You win!  Scissors beats paper "
        return "You win!  Scissors beats paper "
    }
    if (playerChoice == computerPlay) {
        winHead.textContent = "It's a tie. No one scores"
        return "It's a tie. No one Scores"
    }
}

function validateInput(input) {
    if (input != "paper" && input != "scissors" && input != "rock") {
        console.log("Wrong input")
        personPlay()
    } else {
        return input
    }
}

function endscore(computerScore, playerScore) {
    if (computerScore > playerScore) {
        message = "You lost"
    } else if (computerScore < playerScore) {
        message = "You won "
    } else {
        message = "Its a tie"
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