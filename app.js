const playButton = document.querySelector('.button');
const gameSection = document.querySelector('.game-section');
const landingSection = document.querySelector('.first-section');
const backButton = document.querySelector('.back');

const allBtns = document.querySelectorAll('.btn')
const rockBtn = document.querySelector('.btn1')
const paperBtn = document.querySelector('.btn2')
const scissorBtn = document.querySelector('.btn3')

let rockRight = document.querySelector('.rock-r');
let rockLeft = document.querySelector('.rock-l');
let paperRight = document.querySelector('.paper-r');
let paperLeft = document.querySelector('.paper-l');
let scissorLeft = document.querySelector('.scissor-l');
let scissorRight = document.querySelector('.scissor-r');

let human = document.querySelector('.human-score');
let Tie = document.querySelector('.tie-score');
let computer = document.querySelector('.computer-score');

let round = document.querySelector('.round-value')

playButton.addEventListener('click', begin);
backButton.addEventListener('click', back)
 
let humanScore = parseInt(human.innerHTML);
let tieScore = parseInt(Tie.innerHTML);
let computerScore = parseInt(computer.innerHTML);

let roundValue = parseInt(round.innerHTML);
console.log(roundValue)



function begin(){
    landingSection.style.display = "none";
    gameSection.style.display = "flex";
}

function back(){

}

let humanHandname = " "; 

function game(){

    rockBtn.addEventListener('click', rockHumanHand);
    paperBtn.addEventListener('click', paperHumanHand);
    scissorBtn.addEventListener('click', scissorHumanHand);

    //human part
    function rockHumanHand() {
        rockRight.style.display = "flex"
        paperRight.style.display = "none"
        scissorRight.style.display = "none"
        humanHandname = "rock";
        console.log(humanHandname);
    }
    function paperHumanHand() {
        rockRight.style.display = "none"
        paperRight.style.display = "flex"
        scissorRight.style.display = "none"
        humanHandname = "paper";
        console.log(humanHandname);
    }
    function scissorHumanHand() {
        rockRight.style.display = "none"
        paperRight.style.display = "none"
        scissorRight.style.display = "flex"
        humanHandname = "scissor";  
        console.log(humanHandname);
    }

    //event listener in all btns
    for(i=0; i < allBtns.length; i++){
        allBtns[i].addEventListener('click', computerHand);
    }
    //computer part
    function computerHand(){

        let incrementedRoundValue = roundValue +=1;
        round.innerHTML = incrementedRoundValue; 

        let rockPaperScissor = ['rock', 'paper', 'scissor'];
        // random words
        function getRandomWord(min, max){
            let step1 = max - min + 1;
            let step2 = Math.random() * step1;
            let randomWord = Math.floor(step2);
            return randomWord;
        }
        //getting a random word
        let randomWordCalc = getRandomWord(0, rockPaperScissor.length - 1);
        let randomWordValue = rockPaperScissor[randomWordCalc];
        console.log(randomWordValue);
        if(randomWordValue === "rock"){
            paperLeft.style.display = "none"
            scissorLeft.style.display = "none"
            rockLeft.style.display = "flex"
        }
        if(randomWordValue === "paper"){
            paperLeft.style.display = "flex"
            scissorLeft.style.display = "none"
            rockLeft.style.display = "none"
        }
        if(randomWordValue === "scissor"){
            paperLeft.style.display = "none"
            scissorLeft.style.display = "flex"
            rockLeft.style.display = "none"
        }

        //comparing hands
        //computer win
        if(humanHandname === "rock" && randomWordValue === "paper"){
            let incrementedComputerScore = computerScore += 1;
            computer.innerHTML = incrementedComputerScore;
        }
        if(humanHandname === "paper" && randomWordValue === "scissor"){
            let incrementedComputerScore = computerScore +=1;
            computer.innerHTML = incrementedComputerScore;
        }
        if(humanHandname === "scissor" && randomWordValue === "rock"){
            let incrementedComputerScore = computerScore +=1;
            computer.innerHTML = incrementedComputerScore;
        }

        //human win
        if(humanHandname === "paper" && randomWordValue === "rock"){
            let incrementedHumanScore = humanScore += 1;
            human.innerHTML = incrementedHumanScore;
        }
        if(humanHandname === "scissor" && randomWordValue === "paper"){
            let incrementedHumanScore = humanScore += 1;
            human.innerHTML = incrementedHumanScore;
        }
        if(humanHandname === "rock" && randomWordValue === "scissor"){
            let incrementedHumanScore = humanScore += 1;
            human.innerHTML = incrementedHumanScore;
        }
        

        //tie
        if(humanHandname === "rock" && randomWordValue === "rock"){
            let incrementedTieScore = tieScore += 1; 
           Tie.innerHTML = incrementedTieScore;
           console.log(incrementedTieScore)
        }

        //tie
        if(humanHandname === "paper" && randomWordValue === "paper"){
            let incrementedTieScore = tieScore += 1; 
           Tie.innerHTML = incrementedTieScore;
           console.log(incrementedTieScore)
        }

        //tie
        if(humanHandname === "scissor" && randomWordValue === "scissor"){
            let incrementedTieScore = tieScore += 1; 
           Tie.innerHTML = incrementedTieScore;
           console.log(incrementedTieScore)
        }
    }
}

game()