let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    

    let position = Math.floor((Math.random()*10)%3)
    switch(position) {
        case 0: return "rock"
        case 1: return "paper"
        case 2: return "scissors"
    }
}
function getHumanChoice() {
    return(prompt("Enter your choice: "))
}

// const computerSelection = getComputerChoice()
// const humanSelection = getHumanChoice()

function playRound(humanChoice,computerChoice) {
    let choice = humanChoice.toLowerCase()
    switch(choice) {
        case "rock":
            if(computerChoice == "paper") { 
                console.log("You lose! Paper beats Rock")
                computerScore++
            }
            else if(computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors")
                humanScore++
            } 
            else console.log("It's a Draw!")
            break
        case "paper":
            if(computerChoice == "scissors") {
                console.log("You lose! Scissors beat Paper")
                computerScore++
            } 
            else if(computerChoice == "rock") {
                console.log("You win! Paper beats Rock")
                humanScore++
            }
            else console.log("It's a Draw!")
            break
         case "scissors":
            if(computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors")
                computerScore++
            } 
            else if(computerChoice == "paper") {
                console.log("You win! Scissors beats Paper")
                humanScore++
            }
            else console.log("It's a Draw!")
            break
    }
    console.log(`Human score: ${humanScore}`)
    console.log(`Computer score: ${computerScore}`)

}

playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())
playRound(getHumanChoice(),getComputerChoice())

if(humanScore >= computerScore) 
    alert("You are the winner!")
else
    alert("Computer is the winner!")