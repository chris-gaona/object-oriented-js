//app ties everything together

//create questions array
var questions = [
  //first part is the text...second part are the choices...thid part
  //is the answer
  new Question("Who was the first President of the United States?", [ "George Washington", "Thomas Jefferson" ], "George Washington"),
  //first part is the text...second part are the choices...thid part
  //is the answer
  new Question("What is the answer to the Ultimate Question of Life, the Universe, and Everything?", ["Pi","42"], "42")
];

//create Quiz
var quiz = new Quiz(questions);

//display quiz
QuizUI.displayNext();
