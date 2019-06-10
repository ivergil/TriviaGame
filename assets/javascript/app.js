var intervalId;
var timeoutId;
var time;
var questions = ["Primera", "Segunda", "Tercera"];
var asnwer1 = ["resp1", "resp2", "resp3", "resp4"];
var correctAnswer1 = "resp3";
// var questions2 = "Segunda pregunta";
var asnwer2 = ["Segunda1", "Segunda2", "Segunda3", "Segunda4"];
var correctAnswer2 = "Segunda1";
// var questions3 = "Tercera pregunta";
var asnwer3 = ["Tercera1", "Tercera2", "Tercera3", "Tercera4"];
// var correctAnswer3 = "Tercera4";
var questionCounter = 0;
var wins = 0;
var losses = 0;
var none = 0;
var userAnswer = false;

$(".btn").on("click", function () {
    start();
    clearBtn();
});
function clearBtn() {
    $("#btn-start").html('');
}

function start() {
    initTime();
    runInterval();
    showFirstQuestion();
    // displayQuestion();
    $("#start-over").html("");
}
function runInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function showFirstQuestion() {
    $("#question").html("Primera Pregunta");
    $("#opt1").html(" P1");
    $("#opt2").html(" P2");
    $("#opt3").html(" P3");
    $("#opt4").html(" P4");
}

function decrement() {
    time--;
    $("#timeLeft").html(time);

    if (time === 0) {
        alert("Time's Up!");
        stop();
        displayCorrectAnswer();    
    }
}

function displayCorrectAnswer() {
    $("#question").html("Respuesta");
    clear();
    timeoutId = setTimeout(displayQuestion, 1000 * 2);
    questionCounter++
    none++
    console.log(none);
}

// if (questionCounter > 3) {
//     showResults();
//     resetVar();
// }
// displayQuestion();


function showResults() {

    $("#question").html("All done, here's how you did!");
    $("#opt1").html("Correct Answer: " + wins);
    $("#opt2").html("Incorrect Answer: " + losses);
    $("#opt3").html("Unanswered: " + none);
    $("#start-over").html("<h1> Start Over!</h1>");
    stop();
    $("#start-over").on("click", function () {
        start();
    });
}


function displayQuestion() {
    // start();
    for (var j = 0; j < questionCounter; j++) {
        $("#question").html(questions[j]);
        clear();
        for (var i = 0; i < 4; i++) {
            $("#opt1").append("<div>" + asnwer1[i] + "</div>");
            // $("#opt1").append("<div>" + asnwer2[i] + "</div>");
            // $("#opt1").append("<div>" + asnwer2[i] + "</div>");
            // $("#opt1").append("<div>" + asnwer2[3] + "</div>");
        }
    }
    stop();
    initTime();
    runInterval();
}
function initTime() {
    time = 3;
    $("#timeLeft").html(time);
}
function clear() {
    $("#opt1").html(" ");
    $("#opt2").html(" ");
    $("#opt3").html(" ");
    $("#opt4").html(" ");
}

function stop() {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
}
function resetVar() {
    questionCounter = 0;
    wins = 0;
    losses = 0;
    none = 0;

}
