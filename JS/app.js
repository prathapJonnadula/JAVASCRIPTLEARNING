


// Game value

let min =1,
    max =10,
    winningNum = gettingWinningNum(min, max),
    guessleft =3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessbtn=document.querySelector('#guess-btn'),guessInput=document.querySelector('#guess-input'),
      message = document.querySelector('.message');

  //assing min and max
  minNum.textContent = min;
  maxNum.textContent = max;
//add event listneer for guess

guessbtn.addEventListener('click',play);
function play(){
let guess=parseInt(guessInput.value);
  //validate input 
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`please enter a number between ${min} and ${max}`,'red');
  }
  if(guess === winningNum){
    // //disable input
    // guessInput.disabled = true;
    // //changeborder color to green
    // guessInput.style.borderColor ='green';
    // setMessage(`${winningNum} is correct, you win`,'green')
    gameOver(true,`${winningNum} is correct, you win`);
  }else{
    guessleft -=1;
    if(guessleft === 0){
      //game over -lose
      gameOver(false, `Game over, you Lost.the correct number ${winningNum}`);
    }else{
      guessInput.borderColor ='red'
      guessInput.value ='';
      if(isNaN(guess)){
        setMessage(`Blank is not correnct, ${guessleft} guesses left`,'red');
      }else{
      setMessage(`${guess} is not correnct, ${guessleft} guesses left`,'red');
      }

      //game continues answer wrong
    }
  }
}
//paly again event
game.addEventListener('mousedown',function(e){
if(e.target.className === 'play-again'){
  window.location.reload();
}
}); 

function gettingWinningNum(min, max){
 const l =Math.floor(Math.random()*(max-min+1)+min);
 return l;
}
function gameOver(won, msg){
  let color 
  won === true? color ='green': color = 'red'
  guessInput.disabled = true;
  //changeborder color to green
  guessInput.style.borderColor =color;
  setMessage(msg,color);
  //playagain
  guessbtn.value= 'Play aggain';
  guessbtn.className +='play-again';
}

function setMessage(msg,color){
  message.style.color = color;
  message.textContent = msg;
  
}
