var quizbox = document.querySelector('#box')
var start = document.createElement("button")

quizbox.appendChild(start)
start.textContent = 'Click to Start'

start.addEventListener('click', function() {
  console.log('hello world')
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

console.log(questions[0].answer)

