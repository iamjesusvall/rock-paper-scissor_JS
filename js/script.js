// DOM elements
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_p = document.querySelector('.result > p')
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissor_div = document.getElementById('scissor')

// Variables
let userScore = 0
let computerScore = 0

// Event Listeners
function main () {
  rock_div.addEventListener('click', (ev) => game('rock') )
  paper_div.addEventListener('click', (ev) => game('paper') )
  scissor_div.addEventListener('click', (ev) => game('scissor') )
}

// Game's functions
function game (userChoice) {
  const computerChoice = getComputerChoice()

  switch ( userChoice + computerChoice ) {
    case 'rockscissor':
    case 'paperrock':
    case 'scissorpaper':
      win( userChoice, computerChoice )
      break;
    case 'rockpaper':
    case 'paperscissor':
    case 'scissorrock':
      lose( userChoice, computerChoice )
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorscissor':
      draw( userChoice, computerChoice )
      break;
  
  }
}

function getComputerChoice () {
  const choices = ['rock', 'paper', 'scissor']
  const randomNumber = Math.floor( ( Math.random() * 3 ) )
  return choices[randomNumber]
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function resultAction ( condition, userChoice, computerChoice ) {
  const smallUserTag = 'user'.fontsize(3).sup()
  const smallCompTag = 'comp'.fontsize(3).sup()
  const choice_div = document.getElementById( userChoice )
  const animationTime = 300
  if (condition === 'win') {
    result_p.innerHTML = `${ capitalize(userChoice) }${smallUserTag} beats ${ capitalize( computerChoice) }${smallCompTag}. You win!`
    choice_div.classList.add('green-glow')
    setTimeout( () => {choice_div.classList.remove('green-glow')}, animationTime )
  } else if (condition === 'lose') {
    result_p.innerHTML = `${ capitalize(userChoice) }${smallUserTag} loses to ${ capitalize( computerChoice) }${smallCompTag}. You lost...`
    choice_div.classList.add('red-glow')
    setTimeout( () => {choice_div.classList.remove('red-glow')}, animationTime )
  } else {
    result_p.innerHTML = `${ capitalize(userChoice) }${smallUserTag} equals ${ capitalize( computerChoice) }${smallCompTag}. It's a draw.`
    choice_div.classList.add('gray-glow')
    setTimeout( () => {choice_div.classList.remove('gray-glow')}, animationTime )
  }
}

function win( userChoice, computerChoice ) {
  userScore++
  userScore_span.innerHTML = userScore
  resultAction('win', userChoice, computerChoice)
}

function lose( userChoice, computerChoice ) {
  computerScore++
  computerScore_span.innerHTML = computerScore
  resultAction('lose', userChoice, computerChoice)
}

function draw( userChoice, computerChoice ) {
  resultAction('draw', userChoice, computerChoice)  
}

// Load the main function
document.onload = main()