const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let score = document.querySelector('.score-1');
score.innerHTML = 0;
let sc = 0;
let chance = document.querySelector('.chance-1');
chance.innerHTML = 3;
let ch = 3;
let play = false;
let newWords = "";
let randWords ="";

let sWords = ['python','javaScript','html','reactjs','swift',
'java','nodejs','GoLang','C#','SQL','dart','typescript','PHP'];
const createNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWords.length);
  let newTempSwords = sWords[ranNum];
  return newTempSwords;
}
const scrambleWords = (arr) =>{
  for (let i = arr.length-1; i>=0;i--){
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i+1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

btn.addEventListener('click',function(){
  if(!play){
    play = true;
    btn.innerHTML="Guess";
    guess.classList.toggle('hidden');
    newWords = createNewWords();
    randWords = scrambleWords(newWords.split("")).join("");
    msg.innerHTML = `Guess the word: ${randWords}`;
    msg.style.color = '#ffffff';

    }
    else{
      let tempWord = guess.value;
      if(newWords === tempWord){
        play = false;
        msg.innerHTML = `Awesome it's correct. it's ${newWords}`;
        msg.style.color = '#ffffff';

             sc += 5;
             score.innerHTML = sc;
        btn.innerHTML = 'Start Again';

        guess.classList.toggle('hidden');
        guess.value = "";



      }else{
        msg.innerHTML = `Sorry it's incorrect. please try again ${randWords}`;
        msg.style.color = 'red';
        ch -=1 ;
        chance.innerHTML = ch;
        btn.innerHTML = 'Guess Again';
        play =true;
        guess.value = "";

        }
        if(ch===0){
          play = false;
          msg.innerHTML = `Game Over! Better luck next time. <br>Your score is: ${sc}`;
          msg.style.color = '#ffffff';

          btn.innerHTML = 'New Game';
          guess.classList.toggle('hidden');
          guess.value = "";
          ch=3;
          sc=0;
          chance.innerHTML=ch;
          score.innerHTML = sc;

      }
    }
})
