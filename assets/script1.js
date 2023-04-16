// where the start button and then answers are housed
var quizbox = document.querySelector('#box')

// where the question is displayed
var questionbox = document.querySelector("#question")


// setting timer
var seconds = 60
var timer = document.getElementById("timer")
timer.textContent = "Time left: " + seconds

// create start button
var start = document.createElement("button")
// stick start button in the quizbox
quizbox.appendChild(start)
start.textContent = 'Click to Start'

// assigning what happens when start is clicked
start.addEventListener('click', function () {
  // disappears start button
  start.style.display = "none";
  
  // creates choice buttons
  
  // starts clock
  var startclock = setInterval(function () {
    seconds--
    timer.textContent = "Time left: " + seconds
    if (seconds <= 0) {
      clearInterval(startclock)
      timer.textContent = "Time left: 0"
      console.log("game over")
      // replace this with nav to score screen.
    }
  }, 1000)
  
  makebuttons()
})

var questions = [
  {
    question: "Which is Z?",
    answer: "Z",
    choices: ["A", "B", "Z", "D"]
  },

  {
    question: "Which is 2?",
    answer: "2",
    choices: ["A", "B", "2", "D"]
  },

  {
    question: "Which is 3?",
    answer: "3",
    choices: ["A", "3", "C", "D"]
  },

  {
    question: "Which is 4?",
    answer: "4",
    choices: ["4", "B", "C", "D"]
  },

  {
    question: "Which is 5?",
    answer: "5",
    choices: ["A", "B", "C", "5"]
  }
]
function makebuttons() {
  var cA = document.createElement("button")
  var cB = document.createElement('button')
  var cC = document.createElement('button')
  var cD = document.createElement('button')
  quizbox.appendChild(cA)
  quizbox.appendChild(cB)
  quizbox.appendChild(cC)
  quizbox.appendChild(cD)
  var i = 0
  letsGo(i)
  
  
  function letsGo() {
  // questions array
  if (i >= 5) {
    console.log("end of game")
    return
  }
  
  
  questionbox.textContent = questions[i].question
  
  cA.textContent = questions[i].choices[0]
  cA.removeEventListener("click", checker)
  cA.addEventListener("click", checker)

  cB.textContent = questions[i].choices[1]
  cB.removeEventListener("click", checker)
  cB.addEventListener("click", checker)

  cC.textContent = questions[i].choices[2]
  cC.removeEventListener("click", checker)
  cC.addEventListener("click", checker)

  cD.textContent = questions[i].choices[3]
  cD.removeEventListener("click", checker)
  cD.addEventListener("click", checker)
}

// checks the answers and advances to next
function checker () {
  if (this.textContent === questions[i].answer) {
    console.log("correct!")
    i += 1
    // add 1 to score, store to storage.
    letsGo(i)
    return
  } else {
    if (seconds > 5 && this.textContent != questions[i].answer) {
      seconds -= 5
      timer.textContent = "Time left: " + seconds
      console.log("wrong")
      i += 1
      letsGo(i)
      return
      } 
      else {
      seconds = 0
  
    }
  }
}}