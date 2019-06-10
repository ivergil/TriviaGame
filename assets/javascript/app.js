var intervalId;
var time;
var timeRunning = false;

$(".btn").on("click", function () {
    start();
    clearBtn();
});
function clearBtn() {
    $("#btn-start").html('');
}
function start() {
    time = 5;
    $("#timeLeft").html(time);
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
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
    setTimeout(nextQuestion, 1000 * 5);

}
function nextQuestion() {
    start();
    $("#question").html("Las siguiente Pregunta");
    $("#opt1").html(" 1");
    $("#opt2").html(" 2");
    $("#opt3").html(" 3");
    $("#opt4").html(" 4");
}
function clear() {
    $("#opt1").html(" ");
    $("#opt2").html(" ");
    $("#opt3").html(" ");
    $("#opt4").html(" ");
}
function stop() {
    clearInterval(intervalId);
}
