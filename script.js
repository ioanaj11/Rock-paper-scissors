const newGameBtn=document.createElement('button');

//gets a random choice from the computer
function getComputerChoice(){
    let options=["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
 }

 //initializes the results and the score
let result={};
let score={playerScore:0, computerScore:0};

//plays the game
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {result={message:"It's a draw.", playerScore:0, computerScore:0}; const audio=document.querySelector('#drawSound'); audio.play()}
        else if (playerSelection === "rock"){
         if (computerSelection === "paper") {result={message:"You lose! Paper beats Rock.", playerScore:0, computerScore:1}; const audio=document.querySelector('#loseSound'); audio.play()}
            else if (computerSelection === "scissors") {result={message:"You win! Rock beats Scissors.", playerScore:1, computerScore:0}; const audio=document.querySelector('#winSound'); audio.play()}
        }
        else if (playerSelection === "paper"){
        if (computerSelection === "rock"){ result={message:"You win! Paper beats Rock.", playerScore:1, computerScore:0}; const audio=document.querySelector('#winSound'); audio.play()}
            else if (computerSelection === "scissors") {result={message:"You lose! Scissors beat Paper.", playerScore:0, computerScore:1}; const audio=document.querySelector('#loseSound'); audio.play()}
         }
        else if (computerSelection === "rock") {result={message:"You lose!Rock beats Scissors.", playerScore:0, computerScore:1}; const audio=document.querySelector('#loseSound'); audio.play()}
            else if (computerSelection === "paper") {result={message:"You win! Scissors beats Paper.", playerScore:1, computerScore:0}; const audio=document.querySelector('#winSound'); audio.play()}
   const resultDiv=document.querySelector('div.result');
   resultDiv.textContent=result["message"];

    score.playerScore += result.playerScore;
    score.computerScore += result.computerScore;

    const scoreDisplay=document.querySelector('.score');
    scoreDisplay.textContent=`${score.playerScore}      -       ${score.computerScore}`;

    const finalResult=document.querySelector('.finalResult');

    //announces the winner when one of the player reaches 5
    if ((score.playerScore===5)||(score.computerScore===5)) 
        {             
            if (score.playerScore===5) finalResult.textContent="Congratulations! You won!"
                 else if (score.computerScore ===5) finalResult.textContent="Ohhhh...You lost! Try again!";
        
            //displays a "Play again" button which reloads the page
            
            newGameBtn.textContent="Play again";
            newGameBtn.classList.add('restartBtn');
            
            const newGame=document.querySelector('.newGame');
            
            const restartBtn=document.createElement('a');
            restartBtn.setAttribute('href', 'index.html');
           
            newGame.appendChild(restartBtn);
            restartBtn.appendChild(newGameBtn);
        }    
}

//gets the player's choice, reading the class of the button that the player clicked and fires the game, if the score hasn't reached 5;
const buttons=document.querySelectorAll("button");
buttons.forEach((button)=> {button.addEventListener('click', () =>
    {if ((score.playerScore<5)&&(score.computerScore<5)) playRound(button.classList.value, getComputerChoice())})});
