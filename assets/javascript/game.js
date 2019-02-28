var targetScore = 0;
var currentScore = 0;

var diamondValue = 0;
var rubyValue = 0;
var topazValue = 0;
var emeraldValue = 0;

var wins = 0;
var losses = 0;

function randomTargetScore() {
    targetScore = Math.floor(Math.random() * 100) + 19;

}

function randomGemValue() {
    var value = Math.floor(Math.random() * 12) + 1;
    return value;

}


function reset() {

    randomTargetScore();
    currentScore = 0;

    diamondValue = randomGemValue();
    $("#diamond").attr("data-gemValue", diamondValue);
    rubyValue = randomGemValue();
    $("#ruby").attr("data-gemValue", rubyValue);
    topazValue = randomGemValue();
    $("#topaz").attr("data-gemValue", topazValue);
    emeraldValue = randomGemValue();
    $("#emerald").attr("data-gemValue", emeraldValue);

    $("#wins").text(wins)
    $("#losses").text(losses)
    $("#targetNumber").text(targetScore)
    $("#currentNumber").text(currentScore)

    console.log("target Score: " + targetScore);
    console.log("current Score: " + currentScore);
    console.log("diaVal: " + diamondValue)
    console.log("rubVal: " + rubyValue)
    console.log("topVal: " + topazValue)
    console.log("emeVal: " + emeraldValue)

}

reset();

$(".crystal-image").on("click", function () {
    var gemValue = ($(this).attr("data-gemValue"));
    gemValue = parseInt(gemValue);

    currentScore += gemValue;
    $("#currentNumber").text(currentScore);
    console.log(currentScore);
    if (currentScore === targetScore) {
        console.log("You Win!")
        wins++;
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
        reset();

    } else if (currentScore > targetScore) {
        console.log("You Lose!")
        losses++;
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
        reset();
    }
})

$("#infoToggle").on("click", function () {
    $("#instructions").toggle();
})