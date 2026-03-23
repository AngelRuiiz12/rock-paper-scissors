function getComputerChoice() {

    let computerChoice = undefined
    let randint = Math.random()

    if (randint < 0.33) {
        computerChoice = 'Rock'
    } else if (randint > 0.33 && randint < 0.66) {
        computerChoice = 'Paper'
    } else {
        comp = 'Scissors'
    }

    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Select 'Rock', 'Paper' or 'Scissors': ")

    return humanChoice
}


function playRound(humanChoice, computerChoice) {

    let winner = undefined

    if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Gana el Ordenador!")

        winner = "Ordenador"
        return winner

    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Gana el Humano!")

        winner = "Humano"
        return winner

    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Gana el Humano!")

        winner = "Humano"
        return winner

    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Gana el Ordenador!")

        winner = "Ordenador"
        return winner
        
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Gana el Humano!")

        winner = "Humano"
        return winner

    } else if (humanChoice == "Scissors" && computerChoice === "Rock") {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Gana el Ordenador!")

        winner = "Ordenador"
        return winner

    }else {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Empate!!!")
    }
}


function playGame() {

    let humanScore = 0
    let computerScore = 0

    for (let i = 0; i <= 4; i++) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let winner = playRound(humanSelection, computerSelection);

        if (winner === "Humano") {
            humanScore += 1
        } else {
            computerScore += 1
        }
    }
    
    console.log("Resultados:")
    console.log("Puntos Humano: " + humanScore)
    console.log("Puntos Ordenador: " + computerScore)

    if (humanScore > computerScore) {
        console.log("Gana la partida el Humano!!!")
    } else if (humanScore < computerScore) {
        console.log("Gana la partida el Ordenador!!!")
    } else {
        console.log("Habeis quedado empate!!!")
    }

}


playGame()
