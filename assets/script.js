// where the start button and then answers are housed
var quizbox = document.querySelector('#box')

// where the question is displayed
var questionbox = document.querySelector("#question")

// questions array
var questions = [
  {question: "Which is 1?",
  answer: "1",
  choices: ["A", "B", "1", "D"]},

  {question: "Which is 2?",
  answer: "2",
  choices: ["A", "B", "2", "D"]},

  {question: "Which is 3?",
  answer: "3",
  choices: ["A", "3", "C", "D"]},

  {question: "Which is 4?",
  answer: "4",
  choices: ["4", "B", "C", "D"]},

  {question: "Which is 5?",
  answer: "5",
  choices: ["A", "B", "C", "5"]}
]

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
start.addEventListener('click', function() {
  // disappears start button
  start.style.display = "none";

  // creates choice buttons
  var cA = document.createElement("button")
  var cB = document.createElement('button')
  var cC = document.createElement('button')
  var cD = document.createElement('button')
  quizbox.appendChild(cA)
  quizbox.appendChild(cB)
  quizbox.appendChild(cC)
  quizbox.appendChild(cD)

  // starts actual quiz
  quiztime()
  function quiztime () {
    questionbox.textContent = questions[0].question

    cA.textContent = questions[0].choices[0]
    cA.addEventListener('click', function() {
      if (questions[0].choices[0] === questions[0].answer) {
        console.log("correct!")
        // and go to next question
      } else {
        console.log("wrong")
        // take 5 seconds off timer
        // and go to next question
      }

    })
    cB.textContent = questions[0].choices[1]
    cB.addEventListener('click', function () {
      if (questions[0].choices[1] === questions[0].answer) {
        console.log("correct!")
        // and go to next question
      } else {
        console.log("wrong")
        // take 5 seconds off timer
        // and go to next question
      }

    })
    cC.textContent = questions[0].choices[2]
    cC.addEventListener('click', function () {
      if (questions[0].choices[2] === questions[0].answer) {
        console.log("correct!")
        // and go to next question
      } else {
        console.log("wrong")
        // take 5 seconds off timer
        // and go to next question
      }

    })
    cD.textContent = questions[0].choices[3]
    cD.addEventListener('click', function () {
      if (questions[0].choices[3] === questions[0].answer) {
        console.log("correct!")
        // and go to next question
      } else {
        console.log("wrong")
        // take 5 seconds off timer
        // and go to next question
      }

    })
  }}

  
  

) 
// ^^^closing par of start button func


// var questionset = questions[Symbol.iterator]()


