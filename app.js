/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundScores, activePlayer, dice, gamePlaying;
init();
function init(){
    scores= [0,0];
    roundScores= 0; 
    activePlayer= 0;
    gamePlaying = true;
  document.getElementById("score-0").textContent = 0 ;
  document.getElementById("score-1").textContent = 0 ;
  document.getElementById("current-0").textContent = 0 ;
  document.getElementById("current-1").textContent = 0 ;
   document.querySelector(".dice").style.display = "none";
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
    
    dice = Math.floor(Math.random()*6) + 1;
    
    //display result
    var diceDom = document.querySelector(".dice")
       diceDom.style.display = "block";
       diceDom.src = "dice-" + dice + ".png";
        //update score only if 1 is not rolled
        if(dice !== 1){
            roundScores += dice;
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
            
            document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-hold").addEventListener("click",function(){
    
    if(gamePlaying){
   //score added to main score
    scores[activePlayer] += roundScores;
        //update UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        
    // check whether won
    if(scores[activePlayer] >= 20)
      {
          document.querySelector("#name-" + activePlayer).textContent = "winner!";
          document.querySelector(".dice").style.display = "none";
          
          document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
         gamePlaying=false;          
    
    }else{
    nextPlayer();
    }
 }
});        


document.querySelector(".btn-new").addEventListener("click", init);
    
    
    
    
        
    
    
    
    
