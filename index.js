
let card1El = document.getElementById("card1-el")
let card2El = document.getElementById("card2-el")
let sumEl = document.getElementById("sum-el")
let resEl = document.getElementById("result-el")
let ecardEl = document.getElementById("extra-cards")

let startEl = document.getElementById("start-el")
let newCardEl = document.getElementById("next-el")

let sum = 0
let isAlive = false


function startgame() {

    // Game is starting/restarting
    isAlive = true

    // Change button to RESTART GAME
    startEl.textContent = "RESTART GAME"

    // Clear all cards and previous result
    card1El.textContent = ""
    card2El.textContent = ""
    ecardEl.textContent = ""
    sumEl.textContent = ""
    resEl.textContent = ""

    // Get first two cards
    let card1 = setcard()
    card1El.textContent = card1

    let card2 = setcard()
    card2El.textContent = card2

    // Calculate sum
    sum = card1 + card2

    sumEl.textContent = sum

    message()
}


function setcard() {

    let card = Math.floor(Math.random() * 13) + 1

    if (card === 1) {
        return 11
    }

    else if (card > 10) {
        return 10
    }

    else {
        return card
    }
}


function message() {

    if (sum === 21) {

        resEl.textContent = "You Won!!!!!!!✌🏻"

        // Game ended
        isAlive = false

        // Hide NEW CARD
        newCardEl.style.display = "none"

        // Change button back to START GAME
        startEl.textContent = "START GAME"
    }

    else if (sum > 21) {

        resEl.textContent = "Lost! Better luck next time 😌"

        // Game ended
        isAlive = false

        // Hide NEW CARD
        newCardEl.style.display = "none"

        // Change button back to START GAME
        startEl.textContent = "START GAME"
    }

    else {

        resEl.textContent = "Another Chance! Pick the new card"

        // Game is still running
        isAlive = true

        // Show NEW CARD
        newCardEl.style.display = "block"

        // Game is in progress
        startEl.textContent = "RESTART GAME"
    }
}


function newcard() {

    // Don't allow NEW CARD after game ends
    if (!isAlive) {
        return
    }

    let newc = setcard()

    // Create a new card block
    let newCard = document.createElement("p")

    // Put the number inside the card
    newCard.textContent = newc

    // Add the card to the page
    ecardEl.appendChild(newCard)

    // Add the new card to the existing sum
    sum = sum + newc

    sumEl.textContent = sum

    // Check the result
    message()
}

