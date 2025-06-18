function getComputerChoice() {
    // Create random number from 1 to 3 using Math.random. Since this method generates value from 0 to 1, 
    let x = Math.random();
    // if value is less than 0.333 assign rock to it; else if it is less than 0.666, assign paper; else assign scissors
    let computerChoice = ''
    if (x < 0.333) {
        computerChoice = 'rock';
    }
    else if (x >= 0.333 && x < 0.666) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }
    return computerChoice
 /*   
    // show output*/
}

function getHumanChoice() {
    // take human input.
    console.log('Type in rock, paper or scissors:')
    humanChoice = prompt('Type in rock, paper or scissors: ');
    return humanChoice;
}
// If human wins a round, he gets point. If human loses round, computer gets a point. Otherwise it is a draw
let humanScore = 0;
let computerScore = 0;

/*  Create play a round function, take human and computer computerChoices as arguments. If human wins, increment humanScore and print 
    'You won'. 
    If computer wins, increment computerScire and print 'You lost'
    Else print 'Draw'
*/ 
function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    // if human enters scissors and computer is on rock, computer wins; else if computer has paper, human wins; else if scissors, its a draw
    if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore += 1;
        console.log('You lost - Rock beats scissors');
    }
    else if (computerChoice === 'scissors' && humanChoice === 'scissors') {
        console.log('It is a draw');
    }
    else if (computerChoice === 'paper' && humanChoice === 'scissors') {
        humanScore += 1;
        console.log('You won - Scissors beat paper');
    }
    // if human enter rock and computer is on rock, its a draw; else if computer has paper, computer wins; else if scissors, human wins
    if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore += 1;
        console.log('You los - Paper beats rock');
    }
    else if (computerChoice === 'rock' && humanChoice === 'rock') {
        console.log('It is a draw');
    }
    else if (computerChoice === 'scissors' && humanChoice === 'rock') {
        humanScore += 1;
        console.log('You won - Rock beats scissors');
    }
    // if human enters paper and computer is on rock, human wins; else if computer has paper, it is a draw; else if scissors, human loses
    if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore += 1;
        console.log('You lost - Scissors beat paper');
    }
    else if (computerChoice === 'paper' && humanChoice === 'paper') {
        console.log('It is a draw');
    }
    else if (computerChoice === 'rock' && humanChoice === 'paper') {
        humanScore += 1;
        console.log('You won - Paper beats rock');
    }
}

/*
    Create function playGame where function playRound will be called five times using loop. 
    While calling playRound, either humanScore, or computerScore will increment by 1, or will not at all. 
    After loop execution complete, if computerScore has greater value return "Computer won the game", else if
    humanScore has greater value, return "Human won the game", else return "No one won the game"  
*/
function playGame() {
    let n = 5;
    while (n > 0) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(computerSelection, humanSelection);
        n -= 1;
    }
    if (computerScore > humanScore) {
        console.log('Congratulations, You just lost the game');
    }
    else if (computerScore < humanScore) {
        console.log('You won the game');
    }
    else {
        console.log('We are equals');
    }
}


playGame()