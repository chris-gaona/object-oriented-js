//defines intial quiz object
var QuizUI = {
    //defines displayNext key & anonymous function as value
    displayNext: function () {
        //if quiz has ended - found in quiz.js
        if (quiz.hasEnded()) {
            //display the user score - found below
            this.displayScore();
        } else {
            //display the question
            this.displayQuestion();
            //display the choices the user can choose from
            this.displayChoices();
            this.displayProgress();
        }
    },

    //defines displayQuestion key & anonymous function as value
    displayQuestion: function() {
        //populates the html on index.html...passes in 'question' string to
        //find the correct id &
        //passes in text of current question - found in quiz.js
        this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    },

    //defines displayQuestion key & anonymous function as value
    displayChoices: function() {
        //defines choices variable as the available choices
        //quiz.getCurrentQuestion - found in quiz.js
        //.choices - found in question.js
        var choices = quiz.getCurrentQuestion().choices;

        //for loop to iterate through the choices
        for(var i = 0; i < choices.length; i++) {
            //adds choice to html page...id is passed in starting at 'choice0'
            this.populateIdWithHTML("choice" + i, choices[i]);
            //adds guess to html page...id is passed in staring at 'guess0'
            this.guessHandler("guess" + i, choices[i]);
        }
    },

    //defines displayScore key & anonymous function as value
    displayScore: function() {
        //creates html strings to show the score
        var gameOverHTML = "<h1>Game Over</h1>";
        //quiz.score - found in quiz.js
        gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
        //calls populateIdWithHTML & passes in 'quiz' string & gameOverHTML
        this.populateIdWithHTML("quiz", gameOverHTML);
    },

    //defines populateIdWithHTML key & anonymous function as value
    //'quiz' string is passed in through id & gameOverHTML through text
    populateIdWithHTML: function(id, text) {
        //defines element variable to get proper id from html page
        var element = document.getElementById(id);
        //adds text as innerHTML
        element.innerHTML = text;
    },

    //defines guessHandler key & anonymous function as value
    guessHandler: function(id, guess) {
        //gets proper button from dom
        var button = document.getElementById(id);
        //on click of button...
        button.onclick = function() {
            //calls guess function - found in quiz.js
            //& passes in the guess to check if it's the correct answer
            quiz.guess(guess);
            //display next question
            QuizUI.displayNext();
        }
    },

    //defines displayProgress key & anonymous function as value
    displayProgress: function() {
        //defines currentQuestionNumber variable that holds the
        //currentQuestionIndex but adds 1 to make the quiz count 1 & 2 & not
        //0 & 1
        var currentQuestionNumber = quiz.currentQuestionIndex + 1;
        //adds visual progress to user
        this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
    }
};
