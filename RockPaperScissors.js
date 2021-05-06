let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function rockPaperScissors(){
let decision = Math.floor(Math.random()*3)
let outcome = hands[decision]
console.log(outcome)   
}
rockPaperScissors()