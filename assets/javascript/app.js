var intervalId;
var timeoutId;
var time;
var trivia = [{
    question: "What was the name of the tennis player who was just as famous for his disagreements with chair umpires as for his win at Wimbledon in 1984?",
    choice: ["Michael Chang", "Roger Federer", "John McEnroe", "Gustavo Kurten"],
    goodAnswer: "John McEnroe",
},
{
    question: "In 2008, which Grand Slam held a ceremony to celebrate its 40th edition since the open era?",
    choice: ["Roland Garros", "US Open", "Wimbledon", "Australian Open"],
    goodAnswer: "US Open",
},
{
    question: "Which of the following tennis players won two men's singles Grand Slam titles in 2008?",
    choice: ["Roger Federer", "Novak Djokovic", "Andy Roddick", "Rafael Nadal"],
    goodAnswer: "Rafael Nadal",
},
{
    question: "At the end of the 2008 US Open, who was the officially ranked number one female singles tennis player?",
    choice: ["Serena Williams", "Elena Dementieva", "Venus Williams", "Kateryna Bondarenko"],
    goodAnswer: "Serena Williams",
},
];
var questionCounter = 0;
var wins = 0;
var losses = 0;
var none = 0;
var currentChoice = "";

$(".btn").on("click", function (e) {
    e.preventDefault();
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


function decrement() {
    time--;
    $("#timeLeft").html(time);

    if (time === 0) {
        alert("Time's Up!");
        stop();
        none++
        questionCounter++;
        displayCorrectAnswer();
    }
}

function displayCorrectAnswer() {
    if (questionCounter > 3) {
        // questionCounter--
        clear();
        showResults();
        resetVar();
    } else {
        // debugger;
        $("#question").html("Correct Answer: " + trivia[questionCounter].goodAnswer);
        clear();
        stop();
        // questionCounter++
        // debugger
        timeoutId = setTimeout(displayQuestion, 1000 * 6);
    }
}

function showResults() {
    questionCounter--;
    $("#question").html("Correct Answer: " + trivia[questionCounter].goodAnswer + "<hr>");
    $("#question").append("<div>" + "All done, here's how you did!" + "</div>");
    clear();
    $("#opt1").html("Correct Answer: " + wins);
    $("#opt2").html("Incorrect Answer: " + losses);
    $("#opt3").html("Unanswered: " + none);
    $("#start-over").html("<h1> Start Over!</h1>");
    stop();
    $("#start-over").on("click", function (e) {
        e.preventDefault();
        clear();
        resetVar();
        start();
    });
}

function displayQuestion() {
    // questionCounter++;
    if (questionCounter > 3) {
        console.log(questionCounter);
        // questionCounter--
        console.log(questionCounter);
        initTime();
        stop();
        showResults();
    } else {
        $("#question").html(trivia[questionCounter].question + "<hr>");
        clear();
        $("#opt1").append(trivia[questionCounter].choice[0]);
        $("#opt2").append(trivia[questionCounter].choice[1]);
        $("#opt3").append(trivia[questionCounter].choice[2]);
        $("#opt4").append(trivia[questionCounter].choice[3]);
        initTime();
        stop();
        runInterval();
        
    }
    
}

$("#opt1").on("click", function (e) {
    e.preventDefault();
    good = trivia[questionCounter].goodAnswer;
    currentChoice = $("#opt1").text().trim();
    if (currentChoice === good) {
        wins++;
    } else {
        displayCorrectAnswer();
        losses++;
        
    }
    stop();
    // initTime();
    // runInterval();
    questionCounter++
    displayQuestion();
});
$("#opt2").on("click", function (e) {
    e.preventDefault();
    good = trivia[questionCounter].goodAnswer;
    currentChoice = $("#opt2").text().trim();
    if (currentChoice === good) {
        wins++;

    } else {
        displayCorrectAnswer();
        losses++;

    }
    stop();
    // initTime();
    // runInterval();
    questionCounter++
    displayQuestion();
});
$("#opt3").on("click", function (e) {
    e.preventDefault();
    good = trivia[questionCounter].goodAnswer;
    currentChoice = $("#opt3").text().trim();
    if (currentChoice === good) {
        wins++;

    } else {
        displayCorrectAnswer();
        losses++;
        
    }
    stop();
    // initTime();
    // runInterval();
    questionCounter++
    displayQuestion();
});
$("#opt4").on("click", function (e) {
    e.preventDefault();
    good = trivia[questionCounter].goodAnswer;
    currentChoice = $("#opt4").text().trim();
    if (currentChoice === good) {
        wins++;

    } else {
        displayCorrectAnswer();
        losses++;
        
        // displayCorrectAnswer();

    }
    stop();
    // initTime();
    // runInterval();
    questionCounter++
    displayQuestion();
});


function runInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function initTime() {
    time = 10;
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