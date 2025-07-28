var buttonColours = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

function nextSequence() {
    level ++;         

    $("#level-title").text("Level: " + level);

    var rand = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[rand];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour) 
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    playSound(randomChosenColour);
}

