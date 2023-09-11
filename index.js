let playerSelected = document.querySelector('#playerSelected');
let notification= document.querySelector("#notification");
let computerSelected= document.querySelector("#computerSelected");
//const choiceBtn=document.querySelector('#choiceBtns');

//let compSelect='';
let playerScore=0;
let computerScore = 0;
function getComputerChoice(){
let random = Math.floor(Math.random()*3) +1;
let computerSelect='';
switch(random){
    case 1:
        computerSelect = "rock"
        break;
    case 2:
        computerSelect= "paper"
        break;
    case 3:
        computerSelect="scissor"
        break;
}
return computerSelect;
};

function playRound(playerSelection, computerSelection) {
    playerSelection =prompt('please select your weapon! rock > paper > scissor');
    computerSelection=getComputerChoice();


    if(playerSelection==computerSelection){
        return "draw";
    }else if(playerSelection=="rock"&& computerSelection=="paper"){
        computerScore +=1;
        return "you lose this round";
    }else if(playerSelection=="paper"&& computerSelection=="scissor"){
        computerScore +=1;
        return "you lose this round";
    }else if(playerSelection=="scissor"&& computerSelection=="rock"){
        computerScore +=1;
        return "you lose this round";
    }else if(playerSelection=="rock"&& computerSelection=="scissor"){
        playerScore +=1;
        return "you win this round";
    }else if(playerSelection=="paper"&& computerSelection=="rock"){
        playerScore +=1;
        return "you win this round";
    }else if(playerSelection=="scissor"&& computerSelection=="paper"){
        playerScore +=1;
        return "you win this round";
    }
}
function game(){
   while (playerScore<=3 || computerScore<=3){
    playRound();
    console.log(playRound());
   }
}
console.log(game());