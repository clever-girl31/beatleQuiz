var quizbox = document.querySelector('#box')
var start = document.createElement("button")

quizbox.appendChild(start)
start.textContent = 'Click to Start'

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

  

})

var questions = [
  {question: "Which is 1?",
  answer: "1",
  choices: ["A", "B", "1", "D"]},

  {question: "Which is 2?",
  answer: "2",
  choices: ["A", "B", "1", "D"]},

  {question: "Which is 3?",
  answer: "3",
  choices: ["A", "B", "1", "D"]},

  {question: "Which is 4?",
  answer: "4",
  choices: ["A", "B", "1", "D"]},

  
  {question: "Which is 5?",
  answer: "5",
  choices: ["A", "B", "1", "D"]}
]

var questionset = questions[Symbol.iterator]()


