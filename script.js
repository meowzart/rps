

function computerPlay() {
    const n = Math.floor((Math.random() * 3));
    const options = ['rock','paper','scissors']
    return options[n];
}

function playRound() {
    const a = prompt('Ready?').toLowerCase();
    console.log(a)
    const b = computerPlay();
    console.log(b)

    if (a == 'rock' && b == 'rock') {
        console.log('draw')
        return 'draw'
    } else if (a == 'rock' && b == 'paper') {
        console.log('lose')

        return 'lose'
    } else if (a == 'rock' && b == 'scissors') {
        console.log('win')

        return 'win'
    } else if (a == 'scissors' && b == 'scissors') {
        console.log('draw')

        return 'draw'
    } else if (a == 'scissors' && b == 'paper') {
        console.log('win')

        return 'win'
    } else if (a == 'scissors' && b == 'rock') {
        console.log('lose')

        return 'lose'
    } else if (a == 'paper' && b == 'paper') {
        console.log('draw')

        return 'draw'
    } else if (a == 'paper' && b == 'scissors') {
        console.log('lose')

        return 'lose'
    } else {
        console.log('win')

        return 'win'
    }
    console.log(playRound())
}

function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!
        playRound()
     }
}


document.querySelector('.playButton').addEventListener('click', function() {
    game()
})