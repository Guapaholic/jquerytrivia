var gameQuestions = [
  { 
  question: "Which of the following created the the video game series Dark Souls & Bloodborne?",
  answer: ["Hedeo Kojima", "Shigeru Miyamoto", "Hidetaka Miyazaki","Yasumi Matsuno"],
  correctAnswer: '1',
},
{
  question: "Which of the following was developed by Rockstar Games?",
  answer: ["Grand Theft Auto", "Jak and Daxter", "Ratchet and Clank", "Saints Row"],
  correctAnswer: '0',
},
{
  question: "Which of the following legendary weapons is weilded by the \"Hero of Time\"?",
  answer: ["The Master Sword", "Gorehowl", "Keyblade", "Frostmourne"],
  correctAnswer: '0',
},
{
  question: "Which of the following Warcraft heroes is the only mortal to ever singlehandedly wound the Mad Titan Sargeras?",
  answer: ["Thrall", "Broxigar the Red", "Illidan Stormrage", "Uther Lightbringer"],
  correctAnswer: '1',
},
{
  question: "What is the protagonists name in the Hitman series?",
  answer: ["Agent Zero", "Agent 47", "Agent 12", "The protagonist is nameless"],
  correctAnswer: '1',
},
{
  question: "Coming from the Metal Gear Solid series, this character is usually found spinning his pair of Colt Single Action Army revolvers.",
  answer: ["Solid Snake", "Liquid Snake", "Ocelot", "The Boss"],
  correctAnswer: '2',
},
{
  question: "In Final Fantasy VII, what is the name of Cloud Strife's weapon of choice?",
  answer: ["Masamune", "Muramasa", "Buster Sword", "Excalibur"],
  correctAnswer: '3',
},    
{
  question: "In Sonic the Hedgehog, the series antagonist is called Dr. Robotnik, but he also goes by: ",
  answer: ["Dr. Eggman", "Dr. Giro", "Dr. Boom", "Dr. Doom"],
  correctAnswer: '0',
},  
{
  question: "In Super Mario 64, the object of the game is to collect all of the _______?",
  answer: ["Stars", "Fire Flowers", "Ghosts", "Mushrooms"],
  correctAnswer: '0',
},  
{
  question: "Donkey Kong is a gorilla, but he wears a single piece of human clothing. What is it?",
  answer: ["A shirt", "A tie", "A pair of gloves", "A pair of shoes"],
  correctAnswer: '1',
},  
];
console.log(gameQuestions);

var score = 0
var timeout

var score = 0
var timeout

function clearDiv () {
  $('#answer-div').empty();
  createQuestion()
}
console.log(timeout)

function stopTimer(timer) {
  clearTimeout(timer)
}

function startTimer() {
  return setTimeout(clearDiv, 10000)
}

function checkAnswer(index, question) {
  if (index === +question.correctAnswer) {
    score += 1
  }
  clearDiv()
}

function createQuestion () {
  let currentQuestion = gameQuestions.pop()
  if (gameQuestions.length < 1) {
  $("answer-div").empty()
  $("answer-div").text("Game over! You scored" + score + "points!")
  }
  console.log(currentQuestion)
  $('#question-div').text(currentQuestion.question)
  const questionTimer = startTimer()
  for (i = 0 ; i < currentQuestion.answer.length ; i++) {
    let answerButton = document.createElement('button')
    answerButton.innerText = currentQuestion.answer[i]
    answerButton.dataset.answerChoice = i
    // console.log(currentAnswer.attr('id'))
    // console.log(currentQuestion.correctAnswer)
    // console.log(currentAnswer)
    answerButton.onclick = () => {
      stopTimer(questionTimer)
      checkAnswer(i, currentQuestion)
    }
    $('#answer-div').append(answerButton)
    // console.log(currentAnswer)
    console.log(score)
  }
  // setTimeout(function() {
  //     $('#answer-div').empty()
  //     createQuestion()},10000)
}

$('#start-button').click(createQuestion)
// $('#start-button').click(function () {
//     $('#start-button').hide()
// })

// function generateQuestion() {
//     //here we select a question from our gameQuestions array and move it into the HTML
//     var i = 0;
//     timer = setInterval(this.countDown, 15000);
//     $("solution-div").text(gameQuestions.question[i]);
//     i++;
// }
console.log(timeout)


console.log(gameQuestions)