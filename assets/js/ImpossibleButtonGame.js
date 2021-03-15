const gameBtn=document.querySelector('.game_btn');
const colorPicker = document.querySelector('.color_picker');

const containers=document.getElementsByClassName('Game_container');
const container = containers[0];
var styles = getComputedStyle(container);
var containerWidth=parseInt(styles.width,10);
var containerHeight=parseInt(styles.height,10);
const colorPickerText=document.querySelector('.color_txt');

const gameState=[0];
const randomizer=document.querySelector('.btn_randomize');
const isRandom=[false];

// stop the game button 
const giveup=document.querySelector('.btn_giveup');

// the game button continues to move
const start=document.querySelector('.btn_start');


// button random settings

randomizer.addEventListener('click',function(){
isRandom[0]=! isRandom[0];
})

// game button color changer
if(isRandom[0]===false)

    {colorPicker.addEventListener('change', function()
    {
        
        const color = this.value;
        gameBtn.style.background=color;
        colorPicker.style.background=color;

    })
}
// winning condition
gameBtn.addEventListener('click', function()
{
    if(gameState[0]==1)
    {
    container.innerHTML="<h2 class='winner_txt'> You Win !! </h2>"
    container.classList.add('winner');
    }
    else
    {
        container.innerHTML="<h2 class='neutral_txt'> <span class='giveup_span' >Its' ok to Giveup</span> Reset and start  the game</h2>"
        container.classList.add('neutral');
        
    }
}
)

giveup.addEventListener('click', function(){
    gameState[0]=0;
    gameBtn.removeEventListener('mouseover', game)})

start.addEventListener('click', function(){
    gameState[0]=1;
    gameBtn.addEventListener('mouseover', game)})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
function game()
{

    // console.log(containerHeight,containerWidth);
    styles = getComputedStyle(container);
    containerWidth=parseInt(styles.width,10);
    containerHeight=parseInt(styles.height,10);
    let setwidth=Math.max(10, Math.floor(containerWidth*Math.random()-50));
    let setheight=Math.max(10, Math.floor(containerHeight*Math.random()-200));
    // console.log(setheight,setwidth);
    
    gameBtn.style.top=`${setheight}px`;
    gameBtn.style.left=`${setwidth}px`;
    if(isRandom[0]===true)
    {
        let btncolor=getRandomColor();
        // console.log(`#${btncolor}`)
        gameBtn.style.background=`#${btncolor}`;
    }
}
gameBtn.addEventListener('onClick' ,function()
{
    const container=document.querySelector('.container')
    container.style.backgroundColor=green;

})

