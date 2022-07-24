let hScore = 0
let gScore = 0

//home score functions
function increment1() {
    console.log("Scored 1 point")
    hScore++
    console.log(hScore)
    homeScore.innerText = hScore
}

function increment2() {
    console.log("Scored 2 point")
    hScore += 2
    console.log(hScore)
    homeScore.innerText = hScore
}

function increment3() {
    console.log("Scored 3 point")
    hScore += 3
    console.log(hScore)
    homeScore.innerText = hScore
}

//Guest score functions
function incrementG1() {
    console.log("Scored 1 point")
    gScore++
    console.log(gScore)
    guestScore.innerText = gScore
}

function incrementG2() {
    console.log("Scored 2 point")
    gScore += 2
    console.log(gScore)
    guestScore.innerText = gScore
}

function incrementG3() {
    console.log("Scored 3 point")
    gScore += 3
    console.log(gScore)
    guestScore.innerText = gScore
}

//New Game function

function newGame(){
  hScore = 0
  gScore = 0
  homeScore.innerText = hScore
  guestScore.innerText = gScore
}
