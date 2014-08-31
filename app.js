$(document).ready(function() {

	$(".next, .score").hide();
	

	var questions = [
		{
		},
		{
			question: "Kobe Bryant was drafted when, by who, and from what school?", 
			answerOptions: ["June 2nd, 1996; 13th Pick – Charlotte Hornets; Lower Merion HS, PA", "June 6th, 1996; 1st Pick – Los Angeles Lakers; West Philly HS, PA", "June 2nd, 1995; 3rd Pick – New Orleans Hornets; Roselle HS, Italy", "June 13th, 1998; 33rd Pick – Charlotte Hornets; Duke University, NC"], 
			correct: 0,
			fact: "Welp, either you know Kobe or Google is your best friend!"
		},
		{
			question: "Kobe Bryant has how may career points?", 
			answerOptions: ["35, 000 total points", "31, 700 total points", "30, 700 total points", "32, 750 total points"], 
			correct: 1, 
			fact: "31,700 currently puts Kobe 4th All-Time in NBA History"
		},
		{
			question: "Kobe Bryant started in his first All-Star game at what age?", 
			answerOptions: ["21", "18", "19", "20"], 
			correct: 2, 
			fact: "At that time Kobe was the youngest to ever start in an All-Star Game"
		},
		{
			question: "Kobe Bryant has how many “Olympic Gold-Medals”?", 
			answerOptions: ["Three", "Two", "One", "Four"], 
			correct: 1, 
			fact: "Kobe is tied with Michael Jordan for All-Time Gold Medals"
		},
		{
			question: "Kobe Bryant won the dunk contest when?", 
			answerOptions: ["February 1998", "February 1999", "February 1997", "February 1996"], 
			correct: 2, 
			fact: "Wouldnt it be nice if Lebron could accomplish this?"
		}
	];

	var currentQuestion = 1;
	var numberCorrect = 0;
	
	$(".about").click(function() {
		$(".boxDescription").show();
		$(".scoreBoard").hide();
	});

	$(".checkRock").click(function() {
		$(".boxDescription").hide();
	});

	$(".submit").click(function() {
		$(".submit").hide();
		var newComment = '<div class="comment"><p>'+questions[currentQuestion].fact+'</p></div>';
		$(".comment").html(newComment);
		$(".comment").show();
		$(".next").show();
		checkAnswer();
	});

	function checkAnswer() {
		var answer = $('input[type="radio"]:checked').val();
		if (answer == questions[currentQuestion].correct) {
			numberCorrect++;
		};
	};

	$(".next").click(function() {
		 moveOn();
	});
	
	function moveOn() {
		if (currentQuestion < 5) {
			currentQuestion++;
			$(".submit").show();
			$(".comment").hide();
			$(".next").hide();
			var newQuestion = '<div class="questionSection"><h3 class="questionNumber">Question #' + currentQuestion + '</h3><p class="question">' + questions[currentQuestion].question + '</p><form class="answerOptions"><input type="radio" name="option" value="0"><span class="option">' + questions[currentQuestion].answerOptions[0] + '</span><br><input type="radio" name="option" value="1"><span class="option">' + questions[currentQuestion].answerOptions[1] + '</span><br><input type="radio" name="option" value="2"><span class="option">' + questions[currentQuestion].answerOptions[2] + '</span><br><input type="radio" name="option" value="3"><span class="option">' + questions[currentQuestion].answerOptions[3] + '</span><br></form></div>';
			$(".questionSection").html(newQuestion);
		} else {
			$(".score").show();
		};
	};

	$(".score").click(function() {
		$("#scoreBoardInput").html("");
		$(".scoreBoard").show();
		$(".scoreBoardHeader").show();
		$(".tryAgain").show();
		$("#scoreBoardInput").append(numberCorrect + " out of 5").show();
		if (numberCorrect == 0) {
			$(".total0").show();
		} if (numberCorrect == 1) {
			$(".total1").show();
		} if (numberCorrect == 2) {
			$(".total2").show();
		} if (numberCorrect == 3) {
			$(".total13").show();
		} if (numberCorrect == 4) {
			$(".total4").show();
		} if (numberCorrect == 5) {
			$(".total5").show();
		};
	});

	$(".restart, .tryAgain").click(function() {
		reStart();
		$(".scoreBoard").hide();
		$(".submit").show();
	});

	function reStart() {
		numberCorrect == 0;
		currentQuestion = 1;
		$(".total0").hide();
		$(".total1").hide();
		$(".total2").hide();
		$(".total3").hide();
		$(".total4").hide();
		$(".total5").hide();
		$(".comment").hide();
		$(".next").hide();
		$(".score").hide();
		var newQuestion = '<div class="questionSection"><h3 class="questionNumber">Question #' + currentQuestion + '</h3><p class="question">' + questions[currentQuestion].question + '</p><form class="answerOptions"><input type="radio" name="option" value="0"><span class="option">' + questions[currentQuestion].answerOptions[0] + '</span><br><input type="radio" name="option" value="1"><span class="option">' + questions[currentQuestion].answerOptions[1] + '</span><br><input type="radio" name="option" value="2"><span class="option">' + questions[currentQuestion].answerOptions[2] + '</span><br><input type="radio" name="option" value="3"><span class="option">' + questions[currentQuestion].answerOptions[3] + '</span><br></form></div>';
		$(".questionSection").html(newQuestion);
	};

	$(".checkRock").click(function() {
		$(".scoreBoard").hide();
		numberCorrect = 0;
	});
});
