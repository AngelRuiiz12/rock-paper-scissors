const btn_list = document.querySelectorAll(".btn")
const scores = document.querySelector(".scores")
const score_list = document.querySelector(".score-list")

const options = ["rock", "paper", "scissors"]

let playerScore = 0
let computerScore = 0

function getComputerChoice() {

    const random_index = Math.floor(Math.random() * options.length)
    return options[random_index]
}


function playRound_2(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Empate!"
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore += 1
        return "Gana el jugador!"
    } else {
        computerScore += 1
        return "Gana el ordenador!"
    }
}

btn_list.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const playerChoice = e.target.id
        const computerChoice = getComputerChoice()

        const winner = playRound_2(playerChoice, computerChoice)

        // Indico por la terminal los datos de la partida
        console.log("Player Choice: " + playerChoice)
        console.log("Computer Choice: " + computerChoice)
        console.log(winner)
        console.log(`SCORES: Player: ${playerScore} // Computer: ${computerScore}`)
        console.log("--------------------------")

        // Añado el resultado a la lista de SCORE
        const li = document.createElement("li")
        li.textContent = `Player: ${playerScore} // Computer: ${computerScore}`
        score_list.appendChild(li)

        // Compruebo si ya se han jugado 5 partidas para indicar quien ha ganado
        const score_list_li = document.querySelectorAll(".score-list li")

        if (score_list_li.length === 5) {
            if (playerScore > computerScore) {
                alert(`Gana el jugador!!! --> Player: ${playerScore} // Computer: ${computerScore}`)
            } else {
                alert(`Gana el ordenador!!! --> Player: ${playerScore} // Computer: ${computerScore}`)
            }
        }
    })
})


// 1. el juego debe empezar cuando clicko sobre uno de los botones 
// 2. al click sobre uno de los botones se crea la playerChoice y se genera tambien la computerChoice
// 3. se activa la func playRound() y se le pasa por parametros playerChoice y computerChoice
// 4. al terminar playRound() se debe actualizar la tabla de Scores, indicando la playerChoice, la computerChoice y el ganador.
// 5. se añade un punto de victoria a la score del ganador (player o computer)
// 6. se repite este proceso 5 veces.
// 7. al acabar las 5 vueltas, se debe mostrar en la pagina web quien ha ganado (alert() indicando el ganador)