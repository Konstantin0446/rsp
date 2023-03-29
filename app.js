const opponentChoice = document.getElementById('computer-choice');
const yourChoice = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const count=document.getElementById('count');
let userChoice;
let computerChoice;
let result;
let a=0;
let b=0;
count.innerHTML='0:0';
possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener('click',(e)=>{
    userChoice = e.target.id;
    yourChoice.innerHTML= userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:computerChoice='камень';
                break;
        case 1:computerChoice='ножницы';
                break;
        case 2:computerChoice='бумага';
                break;
    }
    opponentChoice.innerHTML=computerChoice;
}
function getResult(){
if (computerChoice===userChoice){
    result='Ничья';
}
else if ((computerChoice==='камень'&&userChoice==='бумага')||(computerChoice==='бумага'&&userChoice==='ножницы')||(computerChoice==='ножницы'&&userChoice==='камень')){
    result='Вы победили';
    a++;   
}
else {
    result='Вы проиграли';
    b++;
}
resultDisplay.innerHTML=result;
count.innerHTML=a+':'+b;
}