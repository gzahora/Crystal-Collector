//crystal values
var blueCrystal = 0;
var orangeCrystal = 0;
var greenCrystal = 0;
var redCrystal = 0;

//target amount and your total
var targetScore = 0;
var yourScore = 0;

//keeps track of the # of wins and losses
var wins = 0;
var losses = 0;

//sets the value of each crystal between 1 and 12
function crystalValue() {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

//resets the game after a win or loss
function resetGame() {
    yourScore = 0;
    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    blueCrystal = crystalValue();
    orangeCrystal = crystalValue();
    greenCrystal = crystalValue();
    redCrystal = crystalValue();
    $("#targetScore").html(targetScore);
    $("#yourScore").html(yourScore);

}


//Run Game------------------------------------------------


resetGame();

console.log("Blue: " + blueCrystal);
console.log("Orange: " + orangeCrystal);
console.log("Green: " + greenCrystal);
console.log("Red: " + redCrystal);

//click buttons
$("#blueCrystal").click(function(){
    yourScore = yourScore + blueCrystal;
    $("#yourScore").html(yourScore);
});

$("#orangeCrystal").click(function(){
    yourScore = yourScore + orangeCrystal;
    $("#yourScore").html(yourScore);
});

$("#greenCrystal").click(function(){
    yourScore = yourScore + greenCrystal;
    $("#yourScore").html(yourScore);
});

$("#redCrystal").click(function(){
    yourScore = yourScore + redCrystal;
    $("#yourScore").html(yourScore);
});