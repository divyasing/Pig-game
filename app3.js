/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
Player loses entire score after 2 six's.
*/


var scores, roundScores, activePlayer, dice_1, dice_2, gamePlaying;

//var scoreChoice = document.getElementById("total").value;

init();
function init(){
    scores= [0,0];
    roundScores= 0; 
    activePlayer= 0;
    gamePlaying = true;
  document.getElementById("score-0").textContent = '0' ;
  document.getElementById("score-1").textContent = '0' ;
  document.getElementById("current-0").textContent = '0' ;
  document.getElementById("current-1").textContent = '0' ;
  document.querySelector(".dice1").style.display = "none";
  document.querySelector(".dice2").style.display = "none";
  document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    
              document.querySelector(".player-0-panel").classList.remove("winner");
              document.querySelector(".player-1-panel").classList.remove("winner");
              document.querySelector(".player-0-panel").classList.remove("active");
              document.querySelector(".player-1-panel").classList.remove("active");
              document.querySelector(".player-0-panel").classList.add("active");

        
}
//document.querySelector("#current-"+activePlayer).innerHTML= "<em>" + dice + "</em>"

document.querySelector(".btn-roll").addEventListener("click", function(){
     
    if(gamePlaying){

    dice_1 = Math.floor(Math.random()*6) + 1;      

    dice_2 = Math.floor(Math.random()*6) + 1;      
    
    
    //display result
    var diceDom1 = document.querySelector(".dice1");
       diceDom1.style.display = "block";
       diceDom1.src = "dice-" + dice_1 + ".png";
        
    var diceDom2 = document.querySelector(".dice2");
       diceDom2.style.display = "block";
       diceDom2.src = "dice-" + dice_2 + ".png";

        
        //update score only if 1 is not rolled
    
            
         if(dice_1 !== 1 && dice_2 !== 1){
            roundScores += (dice_1 + dice_2);
            document.querySelector("#current-"+ activePlayer).textContent = roundScores;
        }else{
            //next player
            nextPlayer();
        }
        
    }
});

function nextPlayer(){
    //next player
            activePlayer=== 0 ? activePlayer=1 : activePlayer=0;
            roundScores = 0;
            document.getElementById("current-0").textContent = 0;
            document.getElementById("current-1").textContent = 0;
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");
            
            document.querySelector(".dice1").style.display = "none";
            document.querySelector(".dice2").style.display = "none";

}

document.querySelector(".btn-hold").addEventListener("click",function(){
    
    if(gamePlaying){
   //score added to main score
    
    scores[activePlayer] += roundScores;
        //update UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        var winningScore;
    // user choice
        //undefined, 0 , "" , null all can be coerced to false
        //anything other than those is true
    
        Choice = document.querySelector(".final-score").value;
            
        if (Choice){
            winningScore = Choice;
        }else{
            winningScore = 100;
        }
    // check whether won
    if(scores[activePlayer] >= winningScore)
      {
          document.querySelector("#name-" + activePlayer).textContent = "winner!";
          document.querySelector(".dice1").style.display = "none";
          document.querySelector(".dice2").style.display = "none";
          
          document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
         gamePlaying=false;          
         } 
        else{
    nextPlayer();
    }
 }
});        


document.querySelector(".btn-new").addEventListener("click", init);
    
    
    
    
        
    
    
    
    
