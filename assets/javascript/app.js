//List of questions
/*var questions = [
	{
		question: "What planet is this?",
		answers: ["Mars", "Venus", "Earth"],
		correctAnswer: "Earth"
	},
	
	{
		question: "What is the greek name for our solar system?",
		answers: ["Terra", "Gaia", "Sol"],
		correctAnswer: "Sol"
	},

	{
		question: "Are light years the measure of speed, distance or time?",
		answers: ["Speed", "Distance", "Time"],
		correctAnswer: "Distance"
	}];*/

//counters for response
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object

//create timer
//Interval Demonstration
var number = 60;

var intervalId;

function run() {
	intervalId = setInterval(decrement,1000);
}
//decrement function
function decrement() {
	number--;
	//show number in timer.
	$("#timer").html(number);
	//Once the number hits zero
	if (number === 0) {
		
	}

}

run();

//On click for all answers.



 

//for loop index questions
/*for (var i = 0; i < questions.length; i++) {

	var newQ = $("<h4>").html(questions[i].question);

	//for loop for answers
	for (var j = 0; j < questions[i].answers.length; j++) {

		var newA = $("<input type='radio'><h4>").html(questions[i].answers[j]);

		$(newQ).append(newA);

		//radio buttons
		
	}
	$("#quiz").append(newQ);
}*/


// Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
}();