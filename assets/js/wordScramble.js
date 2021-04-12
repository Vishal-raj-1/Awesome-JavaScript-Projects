const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
//score is initialised with zero.
let score = document.querySelector('.score-1');
score.innerHTML = 0;
let sc = 0;
//Number of chances is three.
let chance = document.querySelector('.chance-1');
chance.innerHTML = 3;
let ch = 3;
let play = false;
let newWords = "";
let randWords ="";
//The list of words.
let sWords = ['python','javaScript','html','reactjs','swift',
'java','nodejs','GoLang','C#','SQL','dart','typescript','PHP'];
const createNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWords.length);
  let newTempSwords = sWords[ranNum];
  return newTempSwords;
}
//Words get jumbled here.
const scrambleWords = (arr) =>{
  for (let i = arr.length-1; i>=0;i--){
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i+1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
//jumbled word is joined here.
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
    //To check the guessed word is correct or not
    else{
      let tempWord = guess.value;
      if(newWords === tempWord){
        play = false;
        msg.innerHTML = `Awesome it's correct. it's ${newWords}`;
        msg.style.color = '#ffffff';
        //if guessed word is correct score get incremented by 5.
             sc += 5;
             score.innerHTML = sc;
        btn.innerHTML = 'Start Again';

        guess.classList.toggle('hidden');
        guess.value = "";
      }
      //if guessed word is not correct chance get decremented by 1.

      else
      {
        msg.innerHTML = `Sorry it's incorrect. please try again ${randWords}`;
        msg.style.color = 'red';
        ch -=1 ;
        chance.innerHTML = ch;
        btn.innerHTML = 'Guess Again';
        play =true;
        guess.value = "";

        }
        //if chances are completed. Game ends! And New Game starts.
        if(ch===0){
          play = false;
          msg.innerHTML = `Game Over! Better luck next time. <br>Your score is: ${sc}`;
          msg.style.color = '#ffffff';
          btn.innerHTML = 'New Game';
          guess.classList.toggle('hidden');
          guess.value = "";
          ch=3;
          sc=0;
          chance.innerHTML = ch;
          score.innerHTML = sc;

      }
    }
})
