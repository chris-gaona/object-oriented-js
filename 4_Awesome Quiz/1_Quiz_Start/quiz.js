//creates Quiz function and passes in questions array from app.js
function Quiz(questions) {
  //creates Quiz object
  this.score = 0;
  this.questions = questions;
  this.currentQuestionIndex = 0;
}

//creates Quiz prototype for the user guess & passes in the answer
Quiz.prototype.guess = function(answer) {
  //if the user got the correct answer for the current question
  if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
    //increment the score by 1
    this.score++;
  }
  //go to the next question
  this.currentQuestionIndex++;
}

//creates Quiz prototype to obtain current question
Quiz.prototype.getCurrentQuestion = function() {
  //returns correct array item in questions array
  return this.questions[this.currentQuestionIndex];
}

//creates Quiz prototype to see if all question have been asked
Quiz.prototype.hasEnded = function() {
  //returns boolean & checks to see if currentQuestionIndex is greater
  //than for equal to question array length
  return this.currentQuestionIndex >= this.questions.length;
}
