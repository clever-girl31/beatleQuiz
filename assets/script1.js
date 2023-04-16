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
var nameentry = document.querySelector('#entername')

// high score table
var highscoretable = document.querySelector("#highscorebody")
var startOver= document.querySelector("#startOverBox")

// setting timer
var seconds = 60
var timer = document.getElementById("timer")
timer.textContent = "Time left: " + seconds

// create start button
var start = document.createElement("button")
// stick start button in the quizbox
quizbox.appendChild(start)
start.textContent = 'Click to Start'
start.style.backgroundColor = 'white'
start.style.height = 'fit-content'
start.style.padding = '4px 30px'
start.style.width = 'fit-content'
start.style.borderRadius = '25px'
start.style.fontSize = '20px'

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
      gameOver()
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
    question: "Days A Week",
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
  cA.style.backgroundColor = 'white'
  cA.style.height = 'fit-content'
  cA.style.padding = '4px 30px'
  cA.style.width = 'fit-content'
  cA.style.borderRadius = '25px'
  cA.style.fontSize = '20px'
  cB.style.backgroundColor = 'white'
  cB.style.height = 'fit-content'
  cB.style.padding = '4px 30px'
  cB.style.width = 'fit-content'
  cB.style.borderRadius = '25px'
  cB.style.fontSize = '20px'
  cC.style.backgroundColor = 'white'
  cC.style.height = 'fit-content'
  cC.style.padding = '4px 30px'
  cC.style.width = 'fit-content'
  cC.style.borderRadius = '25px'
  cC.style.fontSize = '20px'
  cD.style.backgroundColor = 'white'
  cD.style.height = 'fit-content'
  cD.style.padding = '4px 30px'
  cD.style.width = 'fit-content'
  cD.style.borderRadius = '25px'
  cD.style.fontSize = '20px'
  var i = 0
  letsGo(i)
  
  
  function letsGo() {
    if (i >= 5) {
      console.log("end of game")
      clearInterval(startclock)
      timer.style.display = "none"
      gameOver()
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

function gameOver () {
  console.log("welcome to the score screen")
  timer.style.display = "none"
  quizbox.style.display = "none"
  header.textContent = "Game Over"
  questionbox.textContent = "Your Score: " + userscore
  console.log(userscore)

  // enter username
  var entername = document.createElement('input')
  nameentry.appendChild(entername)
  entername.setAttribute('placeholder', 'Enter Name')
  entername.style.fontSize = '20px'
  entername.style.height = 'fit-content'

  // save button
  var save = document.createElement("button")
  nameentry.appendChild(save)
  save.textContent = "Save Score"
  save.style.backgroundColor = 'white'
  save.style.height = 'fit-content'
  save.style.padding = '4px 30px'
  save.style.width = 'fit-content'
  save.style.borderRadius = '25px'
  save.style.fontSize = '20px'
  save.addEventListener('click', function() {
    var nameInput = entername.value;
    var userScore = userscore;
    var pastNames = localStorage.getItem('nameInput')
    var pastScores = localStorage.getItem('userScore')
    if (pastNames && pastScores) {
      localStorage.setItem('nameInput', pastNames + ',' + nameInput)
      localStorage.setItem('userScore', pastScores + ',' + userScore)
    } else {
      localStorage.setItem('nameInput', nameInput)
      localStorage.setItem('userScore', userScore)
    }
    highScore()
    
    function highScore() {
      header.textContent = "High Scores"

      // hide unused elements
      questionbox.style.display = "none"
      nameentry.style.display = "none"

      // create element to display user's score on screen
      var li1 = document.createElement("li")
      highscoretable.appendChild(li1)
      li1.textContent = nameInput + ": " + userScore
      
      // if statement to resolve bug when local storage is empty on first play
      if (pastNames !== null) {
        // turn past game data in local storage into two separate arrays
        datPastNames = pastNames.split(',')
        datPastScores = pastScores.split(',')
        
        // create a new line and display text for every past name and score in local storage
        for (e = 0; e < datPastNames.length; e++) {
          var li2= document.createElement("li")
          highscoretable.appendChild(li2)
          li2.textContent = datPastNames[e] + ": " + datPastScores[e];
        }

        // turn data from all list items into a new array
        var finalList = Array.from(document.querySelectorAll('li'))
        
        // sort the final list by descending score, by using slice(-1) to look at the last character of each line, and then sorting by that value.
        finalList.sort((a,b) => b.textContent.slice(-1) - a.textContent.slice(-1))

        finalList.forEach(item => highscoretable.appendChild(item))
        console.log(finalList)
        // create button to play again
        var playAgain = document.createElement("button")
        startOver.appendChild(playAgain)
        playAgain.textContent = 'Play Again!'
        playAgain.style.backgroundColor = 'white'
        playAgain.style.height = 'fit-content'
        playAgain.style.padding = '4px 30px'
        playAgain.style.width = 'fit-content'
        playAgain.style.borderRadius = '25px'
        playAgain.style.fontSize = '20px'
        // button refreshes page
        playAgain.addEventListener('click', function() {
          location.reload()
        })
      } else { 
        // create play again button for first play
        var playAgain = document.createElement("button")
        startOver.appendChild(playAgain)
        playAgain.textContent = 'Play Again!'
        playAgain.style.backgroundColor = 'white'
        playAgain.style.height = 'fit-content'
        playAgain.style.padding = '4px 30px'
        playAgain.style.width = 'fit-content'
        playAgain.style.borderRadius = '25px'
        playAgain.style.fontSize = '20px'
        // button refreshes page
        playAgain.addEventListener('click', function () {
          location.reload()
        })
        }
}})
}


