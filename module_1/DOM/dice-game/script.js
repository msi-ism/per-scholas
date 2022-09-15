//================ Task 1 ==============================
// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)

// If the player's dice roll is higher than the computer dice roll,
// console.log("PLAYER WINS")
// otherwise, log ("COMPUTER WINS")
// Use a ternary to check for the winner
// ----- After testing it, remove the console.log()
// leaving just the string "PLAYER WINS" or "COMPUTER WINS" and save it to a variable (winner)
// FINALLY: return all three variables using an array
// return [VALUE1, VALUE2, VALUE3]

// ============ Task 2 ==============================
// Let's update our UI (User Interface)
// Create a function (displayScore)
// Create a new a div displaying:
// Computer Score: , Player Score:  & the Winner:
// so there is a running record of game data.
// Append the new div to the parent div on the HTML.

// Create a Reset Function (resetGame)
// REMOVE the div with the game score, leaving just the parent div
// creating a clean slate for a new set of games :)

// ==== Final Step =====================
// Create a new function (playGame):
// Call the rollDice and the displayScore function inside this function

// ========= Don't forget to add your events listeners
// Attach the (playGame) function to the play game button
// Attach the (resetGame) function to the reset button

// ===== Now let's host this game in GITHUB PAGES and style it !!!





console.log(`script is running...`)

// ** Setting Global Functions

let winnerArray = []
let playerValue
let cpuValue
let winner


// ** Die Image Address Array
let dieArray = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"]

let playerDieImage = document.getElementById('player-die')
let cpuDieImage = document.getElementById('cpu-die')

// ** Roll Dice Function

const rollDice = () => {

    playerValue = Math.ceil(Math.random() * 6)
    cpuValue = Math.ceil(Math.random() * 6)
    // winner = playerValue > cpuValue ? "Player Wins!" : "CPU Wins!";
    winner = playerValue === cpuValue ? "It's a tie! 🤝" : playerValue > cpuValue? "Player Wins! 🎉" : "CPU Wins! 😢"
    playerDieImage.src = dieArray[playerValue - 1]
    cpuDieImage.src = dieArray[cpuValue - 1]
    console.log(winner)
    winnerArray.push(playerValue)
    winnerArray.push(cpuValue)
    winnerArray.push(winner)
    return winnerArray
}


scoreBoard = rollDice()
let scoreDiv = document.querySelector('body')

// ** Display Score Function

const displayScore = () => {
    let displayDiv = document.createElement('div')
    scoreDiv.appendChild(displayDiv)
    displayDiv.className = 'scores'
    displayDiv.textContent = (`Player score: ${playerValue} || Computer score: ${cpuValue} || Winner: ${winner}`)
}

// ** Play Game Function

const playGame = () => {
    rollDice()
    displayScore()
}

// ** Play Button
playBtn = document.querySelector('#play-game')
playBtn.addEventListener('click', playGame)


// ** Reset Function
const reset = () => {
    while (scoreDiv.children.length > 4) {
        document.querySelector('.scores').remove()
    }
}

// ** Reset Button
resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', reset)





