var randomNumberArray = [21, 32, 43, 54, 65, 76, 87, 98, 109];
var houseValues = [3, 5, 7, 10];
var playerScore = 0;
var wins = 0;
var losses =0;
var magicNumber = 0;



//Selects a random number from the available choices in randomNumberArray
var magicNumber = randomNumberArray[Math.floor(Math.random() * randomNumberArray.length)];

//Function updating playerScore
var updatePlayerScore = function() {
  
  document.querySelector('#score').innerHTML = "Your Score: " + playerScore;
};

//Function giving House crests value
function houseValue() {

    for (var i = 1; i < 5; i++) {
        $('.btn-' + i).val(getRandom(houseValues));
    }
    houseValue();
}


$('button').click(function(){
  playerScore = Number(theTotal) + Number($(this).val());
   $('#score').text("Score: "+ playerScore);





// Function will be called when we reset everything
var reset = function() {
  wins = 0;
  losses = 0;
  playerScore = 0;


    if (playerScore === magicNumber){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes! You Are Indeed a Powerful Witch/Wizard.");
                reset();
            } else if(playerScore > magicNumber){ 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("The Dementors Are Coming to Take You to Azkaban!");
            // Then we'll call the reset. 
            reset();
        }
      };
