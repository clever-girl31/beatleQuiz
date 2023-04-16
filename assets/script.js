// where the start button and then answers are housed
var quizbox = document.querySelector('#box')

// where the question is displayed
var questionbox = document.querySelector("#question")

// questions array
var questions = [
  {question: "Which is Z?",
  answer: "Z",
  choices: ["A", "B", "Z", "D"]},

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
  
  // starts clock
  var startclock = setInterval(function() {
    seconds--
    timer.textContent = "Time left: " + seconds
    if (seconds <= 0) {
      clearInterval(startclock)
      timer.textContent = "Time left: 0"
      console.log("game over")
      // replace this with nav to score screen.
    }
  }, 1000)
  
  // starts actual quiz
  quiztime(0)
  function quiztime (i) {
    questionbox.textContent = questions[i].question
    
    cA.textContent = questions[i].choices[0]
    cA.addEventListener('click', function() {
      if (questions[i].choices[0] == questions[i].answer) {
        console.log("correct!")
        // add 1 to score, store to storage.
        quiztime(i + 1)
      } else {
        if (seconds < 5) {
          seconds = 0
          // } if (i > 4) {
          // funtion -- go to score screen
        } else { 
          seconds -=5
          timer.textContent = "Time left: " + seconds
          console.log("wrong")
          quiztime(i + 1)
          return
      }
    }})

    cB.textContent = questions[i].choices[1]
    cB.addEventListener('click', function () {
      if (questions[i].choices[1] == questions[i].answer) {
        console.log("correct!")
        // add 1 to score, store to storage.
        quiztime(i + 1)
      } else {
        if (seconds < 5) {
          seconds = 0
          // } if (i > 4) {
          // funtion -- go to score screen
        } else {
          seconds -= 5
          timer.textContent = "Time left: " + seconds
          console.log("wrong")
          quiztime(i + 1)
          return
        }
    }})

    cC.textContent = questions[i].choices[2]
    cC.addEventListener('click', function () {
      if (questions[i].choices[2] == questions[i].answer) {
        console.log("correct!")
        // add 1 to score, store to storage
        quiztime(i + 1)
      } else {
        if (seconds < 5) {
          seconds = 0
          // } if (i > 4) {
          // funtion -- go to score screen
        } else {
          seconds -= 5
          timer.textContent = "Time left: " + seconds
          console.log("wrong")
          quiztime(i + 1)
          return
        }
    }})

    cD.textContent = questions[i].choices[3]
    cD.addEventListener('click', function () {
      if (questions[i].choices[3] == questions[i].answer) {
        console.log("correct!")
        // add 1 to score, store to storage.
        quiztime(i + 1)
      } else {
        if (seconds < 5) {
          seconds = 0
          // } if (i > 4) {
          // funtion -- go to score screen
        } else {
          seconds -= 5
          timer.textContent = "Time left: " + seconds
          console.log("wrong")
          quiztime(i + 1)
          return
        }
    }})

  }}

  
  

) 
// ^^^closing par of start button func


// var questionset = questions[Symbol.iterator]()


