let userscore = 0;
let computerscore = 0;
const userscore_span= document.getElementById("user-score");
const computerscore_span= document.getElementById("computer-score");
const scoreboard_div= document.querySelector(".score-board");
const result_div= document.querySelector(".result > p");
const rock_div= document.getElementById("rock");
const paper_div= document.getElementById("paper");
const scissors_div= document.getElementById("scissors");

var restartButton;

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber =(Math.floor(Math.random() * 3));
    return choices[randomNumber];
}
console.log(getComputerChoice());

function win(userchoice, computerChoice){
    userscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    const smallUserWord = "(User)".fontsize(5).sup();
    const smallCompWord = "(Comp)".fontsize(5).sup();
    result_div.innerHTML = userchoice + smallUserWord + " Beats " + computerChoice + smallCompWord + "comp You Win Horrray! ";


}
function lose(userchoice, computerChoice){
    computerscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    const smallUserWord = "(user)".fontsize(5).sup();
    const smallCompWord = "(Comp)".fontsize(5).sup();
    result_div.innerHTML = userchoice + smallUserWord + " Killed by " + computerChoice + smallCompWord + " You Lose Booo!!! ";
}

function draw(userchoice, computerChoice){
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    const smallUserWord = "(user)".fontsize(5).sup();
    const smallCompWord = "(Comp)".fontsize(5).sup();
    result_div.innerHTML = userchoice + " Equals " + smallUserWord + computerChoice + smallCompWord + " It's a Draw ";
}

function game(userchoice){
    const computerChoice=getComputerChoice();
    console.log("user choice is ==>", userchoice);
    console.log("computer choice is ==>", computerChoice);
    switch(userchoice + computerChoice) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
        win(userchoice, computerChoice);
        break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
        lose(userchoice, computerChoice);
        break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
        draw(userchoice, computerChoice);
        break;

    }

}

function main() {
    rock_div.addEventListener('click', function() {
        console.log("You Chose Rock");
        game("rock");
    }) 
    paper_div.addEventListener('click', function() {
        console.log("You Chose Paper");
        game("paper");
    }) 
    scissors_div.addEventListener('click', function() {
        console.log("You Chose Scissors");
        game("scissors");
}) 
} 

main();

