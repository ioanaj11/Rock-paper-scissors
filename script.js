function getComputerChoice(){
    let options=["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
 }

let result={};

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {result={message:"It's a draw.", playerScore:0, computerScore:0}}
        else if (playerSelection === "rock"){
         if (computerSelection === "paper") {result={message:"You lose! Paper beats Rock.", playerScore:0, computerScore:1}}
            else if (computerSelection === "scissors") {result={message:"You win! Rock beats Scissors.", playerScore:1, computerScore:0}}
        }
        else if (playerSelection === "paper"){
        if (computerSelection === "rock"){ result={message:"You win! Paper beats Rock.", playerScore:1, computerScore:0}}
            else if (computerSelection === "scissors") {result={message:"You lose! Scissors beat Paper.", playerScore:0, computerScore:1}}
         }
        else if (computerSelection === "rock") {result={message:"You lose!Rock beats Scissors.", playerScore:0, computerScore:1}}
            else if (computerSelection === "paper") {result={message:"You win! Scissors beats Paper.", playerScore:1, computerScore:0}}
   const resultDiv=document.querySelector('div.result');
   resultDiv.textContent=result["message"];

   return result;         
}

const buttons=document.querySelectorAll("button");
buttons.forEach((button)=> {button.addEventListener('click', () => playRound(button.classList.value, getComputerChoice()))});

