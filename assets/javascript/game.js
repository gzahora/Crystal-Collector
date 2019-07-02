//crystal variables
var blueCrystal = 0;
var orangeCrystal = 0;
var greenCrystal = 0;
var redCrystal = 0;

//target and score variables
var targetScore = 0;
var yourScore = 0;

//variables to keep track of wins and losses
var wins = 0;
var losses = 0;

//sets the value of each crystal between 1 and 12
function crystalValue() {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

//resets the game after a win or loss
function resetGame() {
    
    //resets all values
    yourScore = 0;
    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    blueCrystal = crystalValue();
    orangeCrystal = crystalValue();
    greenCrystal = crystalValue();
    redCrystal = crystalValue();
    
    //displays values
    $("#targetScore").html(targetScore);
    $("#yourScore").html(yourScore);
    $("#wins").html(wins);
    $("#losses").html(losses);

    //records new crystal values
    console.log("Blue: " + blueCrystal);
    console.log("Orange: " + orangeCrystal);
    console.log("Green: " + greenCrystal);
    console.log("Red: " + redCrystal);
    console.log("-------------------------------------------------------")
}

//determines what to do if you've won or lost
function winLose() {
    if (yourScore === targetScore) {
        wins++;
        alert("You Win! Try again!");
        resetGame();
    }
    else if (yourScore > targetScore) {
        losses++;
        alert("You Lose! Try again!")
        resetGame();
    }
}


//Run Game------------------------------------------------


resetGame();

//click buttons
$("#blueCrystal").click(function(){
    yourScore = yourScore + blueCrystal;
    $("#yourScore").html(yourScore);
    winLose();
});

$("#orangeCrystal").click(function(){
    yourScore = yourScore + orangeCrystal;
    $("#yourScore").html(yourScore);
    winLose();
});

$("#greenCrystal").click(function(){
    yourScore = yourScore + greenCrystal;
    $("#yourScore").html(yourScore);
    winLose();
});

$("#redCrystal").click(function(){
    yourScore = yourScore + redCrystal;
    $("#yourScore").html(yourScore);
    winLose();
});