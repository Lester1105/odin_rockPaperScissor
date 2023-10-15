let playerSelected = document.querySelector('#playerSelected');
let notification= document.querySelector("#notification");
let computerSelected= document.querySelector("#computerSelected");
const choiceBtn=document.querySelectorAll('.choiceBtns');
let playerScoreCard=document.querySelector(".playerScore");
let computerScoreCard=document.querySelector(".computerScore");
let playerScore=0;
let computerScore = 0;
let computer="✊";
let player="✊";
let result;

function getComputerChoice(){
    let random = Math.floor(Math.random()*3) +1;
    
    switch(random){
        case 1:
            computer = "✊"
            break;
        case 2:
            computer= "🖐"
            break;
        case 3:
            computer="✌️"
            break;
    }
    return computer;
    };


    

function playRound() {
    if(player==computer){
        result= "draw";
    }else if(player=="✊"&& computer=="🖐"){
       computerScore+=1;
        result="you lose this round";
    }else if(player=="🖐"&& computer=="✌️"){
       computerScore+=1;
        result="you lose this round";
    }else if(player=="✌️"&& computer=="✊"){
        computerScore+=1;
        result="you lose this round";
    }else if(player=="✊"&& computer=="✌️"){
        playerScore+=1;
        result="you win this round";
    }else if(player=="🖐"&& computer=="✊"){
       playerScore+=1;
        result="you win this round";
    }else if(player=="✌️"&& computer=="🖐"){
       playerScore+=1;
        result="you win this round";
    }
    if(playerScore>=6){
        result="Congratulations! You've won against a computer, whould you try again?";
        playerScore=0;
        computerScore=0;
    }else if(computerScore>=6){
        result="Aww! You've beaten by a computer,whould you want to try again?";
        playerScore=0;
        computerScore=0;
    }

   return result;

}

choiceBtn.forEach(button =>
    button.addEventListener('click',()=>{
        player=button.textContent;
         getComputerChoice();
   playerSelected.textContent=player;
   computerSelected.textContent=getComputerChoice();
   notification.textContent=playRound();
   playerScoreCard.textContent=playerScore;
   computerScoreCard.textContent=computerScore;
    
}));

function reset(){
    playerScore=0;
    computerScore=0;
    notification.textContent="Try your luck!!";
    playerScoreCard.textContent=playerScore;
    computerScoreCard.textContent=computerScore;
}