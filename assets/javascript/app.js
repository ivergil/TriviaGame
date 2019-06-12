var intervalId;
var timeoutId;
var time;
var trivia = [{
    question: "1111111111",
    choice: ["Answ1", "Answ2", "Answ3", "Answ4"],
    goodAnswer: "Answ2",
},
{
    question: "2222222222",
    choice: ["222", "333", "444", "555"],
    goodAnswer: "333",
},
{
    question: "33333333333",
    choice: ["aaa", "bbb", "ccc", "ddd"],
    goodAnswer: "ccc",
},
    // {
    //     question: "Number 4",
    //     choice: ["fff", "ggg", "hhh", "jjj"],
    //     goodAnswer: "jjj",
    // },
];
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
    displayQuestion();
    $("#start-over").html("");
}
function runInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    time--;
    $("#timeLeft").html(time);

    if (time === 0) {
        alert("Time's Up!");
        stop();
        none++
        displayCorrectAnswer();
    }
}

function displayCorrectAnswer() {
    $("#question").html("Correct Answer: " + trivia[questionCounter].goodAnswer);
    questionCounter++;
    clear();
    timeoutId = setTimeout(displayQuestion, 1000 * 2);

    if (questionCounter > 2) {
        questionCounter--;
        clear();
        showResults();
        resetVar();
    }
}



// displayQuestion();

function showResults() {
    $("#question").html("Correct Answer: " + trivia[questionCounter].goodAnswer + "<hr>");
    $("#question").append("<div>" + "All done, here's how you did!" + "</div>");
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

    $("#question").html(trivia[questionCounter].question + "<hr>");
    clear();
    for (var i = 0; i < 4; i++) {
        $("#opt1").append("<div>" + trivia[questionCounter].choice[i] + "</div>");
        // $("#opt1").append("<div>" + asnwer2[i] + "</div>");
        // $("#opt1").append("<div>" + asnwer2[i] + "</div>");
        // $("#opt1").append("<div>" + asnwer2[3] + "</div>");
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