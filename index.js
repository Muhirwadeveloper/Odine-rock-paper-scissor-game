console.log("hello world")

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    

    return choice;
}
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper &&" && computerSelection == "rock")
    ){
        return "player";
    }
    else {
       return "computer"; 
    }
}

function playRound(playerSelection, computerSelection){
   const result = checkWinner(playerSelection, computerSelection);
   if(result == "Tie"){
        return "It's a tie!"
   }
   else if(result == "player"){
    return `You win! ${playerSelection} beats ${computerSelection}`
   }
   else{
       return `You lose! ${computerSelection} beats ${playerSelection}`
   }
}
function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInlower = choice.toLowerCase();
        if(options.includes(choiceInlower)){
            validatedInput = true;
            return choiceInlower;
        }
    }
}
function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("welcome!")
    for(let i =0; i< 5; i++) {
        const playerSelection =getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) =="player"){
        scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) =="computer"){
        scoreComputer++;
        }
    }
    console.log("Game over")
    if(scorePlayer > scoreComputer){
        console.log("player was the winner");
    }
    else if(scorePlayer < scoreComputer){
        console.log("computer was the winner");
    }
    else{
        console.log("we have a tie!"); 
    }
}

game()