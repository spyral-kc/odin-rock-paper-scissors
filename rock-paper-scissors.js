const computerChoices = ["rock", "paper", "scissors"]

let computerScore = 0
let playerScore = 0
//

function playRound () {

let playerSelection = prompt("Pick rock, paper, or scissors.", "").toLowerCase()
let computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)]

console.log("Computer:" + computerSelection + "   " + "You:" + playerSelection)

if (computerSelection === "rock" && playerSelection === "scissor" || 
    computerSelection === "paper" && playerSelection === "rock" ||
    computerSelection === "scissors" && playerSelection === "paper") {
    console.log (`You Lose! ${computerSelection} beats ${playerSelection}.`)
    computerScore = ++computerScore
    
}
if (computerSelection === "rock" && playerSelection == "paper" || 
    computerSelection === "paper" && playerSelection === "scissors" ||
    computerSelection === "scissors" && playerSelection === "rock") {
    console.log (`You Win! ${playerSelection} beats ${computerSelection}.`)
    playerScore = ++playerScore
}
if (computerSelection === playerSelection) {
    console.log (`You Tie! ${computerSelection} ties ${playerSelection}.`) 
}    
console.log("Computer Score:" + computerScore + "   " 
            + "Your Score:" + playerScore)
}

function game() {
    console.log("Round:1")
    playRound()
    console.log("Round:2")
    playRound()
    console.log("Round:3")
    playRound()
    console.log("Round:4")
    playRound()
    console.log("Round:5")
    playRound()
}