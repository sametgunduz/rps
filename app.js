let userScore = 0;
let computerScore = 0;

const Winner = {

    User: 'User',
    Computer: 'Computer',
    Draw: 'Draw',
    Unknown:'Unknown'
}

const rockItem = document.getElementById("r");
const paperItem = document.getElementById("p");
const scissorsItem = document.getElementById("s");
const resultItem = document.getElementById("resultMessage");

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");


function getComputerChoice() {

    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];

}

function convertToWord(key) {

    if(key === "r") return "Rock";
    if(key === "p") return "Paper";
    if(key === "s") return "Scissors";

}

function calculateGame(winner,userChoice,computerChoice)
{
    if(winner == Winner.User)
    {
        userScore++;
        resultItem.innerHTML = `You : ${convertToWord(userChoice)} | Computer : ${convertToWord(computerChoice)}  ~<b>You Win!</b>`

    }else if(winner == Winner.Computer)
    {
        computerScore++;
        resultItem.innerHTML = `You : ${convertToWord(userChoice)} | Computer : ${convertToWord(computerChoice)}   ~<b>You Lost!</b>`

    }else
    {
        resultItem.innerHTML = `You : ${convertToWord(userChoice)} | Computer : ${convertToWord(computerChoice)}   ~<b>Draw!</b>`
    }

    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
}

function game(userChoice) {

    const computerChoice = getComputerChoice();

    let win = Winner.Unknown;

    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win = Winner.User;
            break;
        case "rp":
        case "ps":
        case "sr":
            win = Winner.Computer;
            break;
        case "rr":
        case "pp":
        case "ss":
            win = Winner.Draw;
            break;
    }

    calculateGame(win,userChoice,computerChoice);
}

function Initialize() {

    rockItem.addEventListener('click', () => game("r"));

    paperItem.addEventListener('click', () => game("p"));

    scissorsItem.addEventListener('click', () => game("s"));
}

Initialize();