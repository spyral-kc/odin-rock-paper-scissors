const computerChoices = ["Rock", "Paper", "Scissor"]

let roundNumber = 1
let computerScore = 0
let playerScore = 0

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const reset = document.querySelector('#reset')

const round = document.querySelector('#round')
const selection = document.querySelector('#selection')
const result = document.querySelector('#result')
const score = document.querySelector('#score')
const gameResult = document.querySelector('#gameResult')

//-------------------------------------------------------------//

function playRound(playerSelection) {

    let computerSelection = computerChoices[Math.floor(Math.random() * 
                            computerChoices.length)]

    round.textContent = "Round: " + roundNumber
    selection.textContent = "Computer: " + computerSelection + "   |   " 
                            + "You: " + playerSelection

    if (computerSelection === "Rock" && playerSelection === "Scissor" || 
        computerSelection === "Paper" && playerSelection === "Rock" ||
        computerSelection === "Scissor" && playerSelection === "Paper") {
        result.textContent = `You Lose! ${computerSelection} 
                                beats ${playerSelection}.`
        computerScore = ++computerScore
    }

    if (computerSelection === "Rock" && playerSelection == "Paper" || 
        computerSelection === "Paper" && playerSelection === "Scissor" ||
        computerSelection === "Scissor" && playerSelection === "Rock") {
        result.textContent = `You Win! ${playerSelection} 
                                beats ${computerSelection}.`
        playerScore = ++playerScore
    }

    if (computerSelection === playerSelection) {
        result.textContent = `You Tie! ${computerSelection} 
                                ties with ${playerSelection}.`
    }   

    score.textContent = "Computer Score: " + computerScore + "   |   " 
                        + "Your Score: " + playerScore

    roundNumber = ++roundNumber
}

//-------------------------------------------------------------//

function playGame (roundNumber, playerSelection) {
    
    if (roundNumber < 6){
        playRound (playerSelection)
    }

    if (roundNumber === 5) {
        if (playerScore > computerScore) {
            gameResult.textContent = "YOU WIN THE GAME!"
        }
        if (playerScore < computerScore) (
            gameResult.textContent = "YOU LOSE THE GAME!"
        )
        if (playerScore === computerScore) {
            gameResult.textContent = "YOU TIE THE GAME!"
        }
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissor").disabled = true;
    } 
}

//-------------------------------------------------------------//

rock.addEventListener('click', () => playGame(roundNumber, "Rock"))
paper.addEventListener('click', () => playGame(roundNumber, "Paper"))
scissor.addEventListener('click', () => playGame(roundNumber, "Scissor"))
reset.addEventListener('click', () => {
    roundNumber = 1
    computerScore = 0
    playerScore = 0
    round.textContent = ""
    selection.textContent = ""
    result.textContent = ""
    score.textContent = ""
    gameResult.textContent = ""
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissor").disabled = false;
}
)

