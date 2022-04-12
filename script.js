

function computerPlay() {
    const n = Math.floor((Math.random() * 3));
    const options = ['rock','paper','scissors']
    return options[n];
}
const gameResult = ""
const playerScoreHeading = document.querySelector('.player-score')
const computerScoreHeading = document.querySelector('.computer-score')
let playerScore = 0;
let computerScore = 0;
function declareGameLost() {
    resultDiv.innerHTML = "";
    const resultHeading = document.createElement('h1')
    resultDiv.appendChild(resultHeading)
    resultHeading.textContent = "GAME OVER!\nYOU LOST. I'M TAKING ALL YOUR COOKIES."
}
function declareGameWon() {
    resultDiv.innerHTML = "";
    const resultHeading = document.createElement('h1')
    resultDiv.appendChild(resultHeading)
    resultHeading.textContent = "CONGRATS! YOU WON $1M WORTH OF COOKIES."
}
function resetScores() {
    playerScore = 0;
    computerScore = 0;
    playerScoreHeading.textContent = 0;
    computerScoreHeading.textContent = 0;
}
function playRound(playerSelection, computerSelection) {

    const resultHeading = document.createElement('h1')
    resultHeading.classList.add('resultText')
    // resultDiv.removeChild();
    const a = playerSelection;
    console.log(a)
    const b = computerPlay();
    console.log(b)
    if (playerSelection == computerSelection) {
        resultHeading.textContent = "DRAW!"
        resultDiv.appendChild(resultHeading)
        return
    } else if (a == 'rock' && b == 'paper') {
        resultHeading.textContent = "LOSE!"
        resultDiv.appendChild(resultHeading)
        computerScore += 1;
        playerScoreHeading.textContent = playerScore;
        if (computerScore > 4) {
            declareGameLost();
            resetScores()
        }
        resetScores()
        return
    } else if (a == 'rock' && b == 'scissors') {
        playerScore += 1;
        playerScoreHeading.textContent = playerScore;
        resultHeading.textContent = "WIN!"
        resultDiv.appendChild(resultHeading)
        if (playerScore > 4) {
            declareGameWon();
            resetScores()
        }
        
        return
    } else if (a == 'scissors' && b == 'paper') {
        playerScore += 1;
        playerScoreHeading.textContent = playerScore;
        resultHeading.textContent = "WIN!"
        resultDiv.appendChild(resultHeading)
        if (playerScore > 4) {
            declareGameWon();
            resetScores()

        }
        return
    } else if (a == 'scissors' && b == 'rock') {
        computerScore += 1;
        computerScoreHeading.textContent = computerScore;
        resultHeading.textContent = "LOSE!"
        resultDiv.appendChild(resultHeading)
        if (computerScore > 4) {
            declareGameLost();
            resetScores()

        }
        return
    } else if (a == 'paper' && b == 'scissors') {
        computerScore += 1;
        computerScoreHeading.textContent = computerScore;

        resultHeading.textContent = "LOSE!"
        resultDiv.appendChild(resultHeading)
        if (computerScore > 4) {
            declareGameLost();
            resetScores()

        }
        return
    } else if (a == 'paper' && b == 'rock') {
        playerScore += 1;
        playerScoreHeading.textContent = playerScore;
        resultHeading.textContent = "WIN!"
        resultDiv.appendChild(resultHeading)
        if (playerScore > 4) {
            declareGameWon();
            resetScores()

        }
    } else {
        computerScore += 1;
        computerScoreHeading.textContent = computerScore;
        resultHeading.textContent = "LOSE!"
        resultDiv.appendChild(resultHeading)
        if (computerScore > 4) {
            declareGameLost();
            resetScores()

        }
        return
    }
    console.log(playRound())
}

function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
        playRound()
     }
}


// document.querySelector('.playButton').addEventListener('click', function() {
//     game()
// })

const rockSelected = document.querySelector('.rock')
const scissorsSelected = document.querySelector('.scissors')
const paperSelected = document.querySelector('.paper')
const resultDiv = document.querySelector('.result')

rockSelected.addEventListener('click', ()=>{
    playRound(playerSelection='rock', computerSelection=computerPlay())
    console.log('rock sele')

})

paperSelected.addEventListener('click', ()=>{
    playRound(playerSelection='paper', computerSelection=computerPlay())
    console.log('paper sele')
})

scissorsSelected.addEventListener('click', ()=>{
    playRound(playerSelection='scissors', computerSelection=computerPlay())
    console.log('scissors sele')
})

