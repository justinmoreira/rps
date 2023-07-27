function getComputerChoice(){
    let selection = Math.floor(Math.random() * 3);
    if(selection == 0){
        return "rock";
    } else if (selection == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());