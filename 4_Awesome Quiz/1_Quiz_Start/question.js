//creates Question function and passes in text, choices, & answer
function Question(text, choices, answer) {
  //creates object
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

//creates Question prototype for to check user answer passed in through choice
Question.prototype.isCorrectAnswer = function(choice) {
  //return boolean of whether answer equals choice made by user
  return this.answer === choice;
}
