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
            return [("You Lose! " + computerSelection + " beats " + playerSelection), "L"];
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors"
    || playerSelection == "Paper" && computerSelection == "Rock"
    || playerSelection == "Scissors" && computerSelection == "Paper"){
        return [("You Win! " + playerSelection + " beats " + computerSelection), "W"];
    }
    else if(playerSelection == computerSelection){
        return [("It's a tie! you both picked " + playerSelection), "T"];
    }
}
let playerScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let parent = document.getElementById('content');
        parent.innerHTML = "";

        const results = document.querySelector('#content');

        const content = document.createElement('div');
        let result = checkWinner(button.id, getComputerChoice());
        content.textContent = result[0];       

        results.appendChild(content);

        if(result[1] == "W"){
            let parent = document.getElementById('playerScore');
            parent.innerHTML = "";

            playerScore++;
            const left = document.querySelector('#playerScore');

            const scoreLeft = document.createElement('div');
            scoreLeft.textContent = playerScore;

            left.appendChild(scoreLeft);

            if(playerScore == 5){
                const returnMessage = document.querySelector('#returnMessage');
                const message = document.createElement('div');
                message.textContent = "You win!";
                returnMessage.appendChild(message);
            }
            
        } else if (result[1] == "L"){
            let parent = document.getElementById('compScore');
            parent.innerHTML = "";

            compScore++;
            const right = document.querySelector('#compScore');

            const scoreRight = document.createElement('div');
            scoreRight.textContent = compScore;

            right.appendChild(scoreRight);

            if(compScore == 5){
                const returnMessage = document.querySelector('#returnMessage');
                const message = document.createElement('div');
                message.textContent = "You lose!";
                returnMessage.appendChild(message);
            }
        }
    });
});