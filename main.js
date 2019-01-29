    let roundCount = 1;
    let playerScore = 0;
    let computerScore = 0;
    let pScore = document.querySelector('.player-score');
    let cScore = document.querySelector('.computer-score');
    let winner = document.querySelector('.winner')

    function playRound(playerSelection, computerSelection) {
        let playerChoice = playerSelection().toLowerCase();
        let computerChoice = computerSelection();


        function computerSelection() {
            var choices = ['rock', 'paper', 'scissors'];
            computerSelection = choices[Math.floor(Math.random() * choices.length)];
            return computerSelection;
        };

        function playerSelection() {
            playerSelection = prompt('Please pick Rock Paper or Scissors');
            return playerSelection;
        };

        console.log(playerChoice, computerChoice)
    };