function getComputerChoice(){
    let selection = Math.floor(Math.random() * 3);
    if(selection == 0){
        return "Rock";
    } else if (selection == 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}
function checkWinner(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1).toLowerCase();
    if(computerSelection == "Rock" && playerSelection == "Scissors"
        || computerSelection == "Paper" && playerSelection == "Rock"
        || computerSelection == "Scissors" && playerSelection == "Paper"){
            return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors"
    || playerSelection == "Paper" && computerSelection == "Rock"
    || playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if(playerSelection == computerSelection){
        return "It's a tie!, you both picked " + playerSelection;
    }
    else{
        return "Invalid input";
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(checkWinner(button.id, getComputerChoice()));
    });
});