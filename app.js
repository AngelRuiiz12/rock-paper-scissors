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
        return "Tie!"
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore += 1
        return "Player Wins!"
    } else {
        computerScore += 1
        return "Computer Wins!"
    }
}

btn_list.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const playerChoice = e.target.id
        const computerChoice = getComputerChoice()

        const winner = playRound_2(playerChoice, computerChoice)


        // Indico el desarrollo de la partida por el Game Status
        const game_status = document.querySelector(".game-status")
        game_status.innerHTML = `Player Choice: ${playerChoice} <br>
        Computer Choice: ${computerChoice} <br>
        <strong>${winner}<strong>`

        // Añado el resultado a la lista de SCORE
        const li = document.createElement("li")
        li.textContent = `Player: ${playerScore} // Computer: ${computerScore}`
        score_list.appendChild(li)

        // Compruebo si ya se han jugado 5 partidas para indicar quien ha ganado
        const score_list_li = document.querySelectorAll(".score-list li")

        if (score_list_li.length === 5) {
            if (playerScore > computerScore) {
                alert(`Player Wins!!! --> Player: ${playerScore} // Computer: ${computerScore}`)
            } else {
                alert(`Computer Wins!!! --> Player: ${playerScore} // Computer: ${computerScore}`)
            }
        }
    })
})
