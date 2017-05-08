var randomNumberArray = [21, 32, 43, 54, 65, 76, 87, 98, 109];
var houseValues = [3, 5, 7, 10];
var playerScore = 0;
var wins = 0;
var losses = 0;
var magicNumber = 0;


//Selects a random number from the available choices in randomNumberArray
var magicNumber = randomNumberArray[Math.floor(Math.random() * randomNumberArray.length)];
  $("#number").html("Magic Number: " + magicNumber);
  console.log(magicNumber);


//Function updating playerScore
var updatePlayerScore = function() {
  document.getElementById("game").innerHTML = "playerScore"
};


$('button').click(function(){
  playerScore = Number(playerScore) + Number($(this).val());
   $('#score').text("Score: "+ playerScore);
    
    if (playerScore === magicNumber){
                wins++;
                $("#wins").html("Wins: " + wins);
                alert("Yes! You Are Indeed a Powerful Witch/Wizard.");
                reset();
            } else if (playerScore > magicNumber){ 
            losses++;
            $("#losses").html("Losses: " + losses);
            // document.getElementById('#losses').innerHTML = "Losses: " + losses;
            //   console.log(document.getElementById('#losses').innerHTML);
            alert("The Dementors Are Coming to Take You to Azkaban!");
            // Then we'll call the reset. 
            reset();
            console.log(playerScore);
        }
 });



//Function giving House crests value
function houseValue() {

    for (var i = 0; i < 4; i++) {
        $('.btn-' + i).val(getRandom(houseValues));
        console.log(houseValues);
    }
    houseValue();
};








// Function will be called when we reset everything
var reset = function() {
  wins = 0;
  losses = 0;
  playerScore = 0;

  $("#score").html("Your Score: " + playerScore);

      };
      
