// header element
var header = document.querySelector("h1")
header.textContent = ("The Beatles Quiz")
// where the start button and then answers are housed
var quizbox = document.querySelector('#box')

// where the question is displayed
var questionbox = document.querySelector("#question")

// keepscore
var userscore = 0

// username entry field


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
  
  // starts clock
  var startclock = setInterval(function () {
    seconds--
    timer.textContent = "Time left: " + seconds
    if (seconds <= 0) {
      clearInterval(startclock)
      timer.textContent = "Time left: 0"
      console.log("game over")
      scoreScreen()
      return
    }
  }, 1000)
  
  makebuttons(startclock)
})

var questions = [
  {
    question: "I am the Walrus",
    answer: "Kookookachoo!",
    choices: ["Cowabunga!", "Kookookachoo!", "Yipee Ki-Yay!", "By Jove!"]
  },

  {
    question: "Lonely Hearts Club Band",
    answer: "Sgt. Peppers'",
    choices: ["General Studies'", "Captain Crunch's", "Corporal Kahlua's", "Sgt. Peppers'"]
  },

  {
    question: "Hey",
    answer: "Jude",
    choices: ["What's Going On?", "I'm Walkin' Here!", "Jude", "What's the Big Idea?"]
  },

  {
    question: "Ain't Got Nothing But Love Babe, '_' Days A Week",
    answer: "8",
    choices: ["5", "8", "9", "2"]
  },

  {
    question: "All My Troubles Seemed So Far Away",
    answer: "Yesterday",
    choices: ["Yesterday", "Back in the USSR", "Before Covid Hit", "Back When US Currency Was Still Backed by Gold"]
  }
]

function makebuttons(startclock) {
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
    if (i >= 5) {
      console.log("end of game")
      clearInterval(startclock)
      timer.style.display = "none"
      scoreScreen()
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
      userscore ++
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
  }
}

function scoreScreen () {
  console.log("welcome to the score screen")
  timer.style.display = "none"
  quizbox.style.display = "none"
  header.textContent = "Game Over"
  questionbox.textContent = "Your Score: " + userscore
  console.log(userscore)
  var entername = document.createElement('input')

  

}