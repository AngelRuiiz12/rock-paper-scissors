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

    if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Gana el Ordenador!")
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Gana el Humano!")
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Gana el Humano!")
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Gana el Ordenador!")
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Gana el Humano!")
    } else if (humanChoice == "Scissors" && computerChoice === "Rock") {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Gana el Ordenador!")
    }else {
        console.log("Humano: " + humanChoice)
        console.log("Ordenador: " + computerChoice)
        console.log("Empate!!!")
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
