let canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    letters = '010110',
    height = canvas.height = window.innerHeight,
    width = canvas.width = window.innerWidth,
    font_size = 10,
    columns = width / font_size,
    drops = [],
    frame = 1;

letters = letters.split("");

for(let i = 0; i < columns; i++){
  drops[i] = 1;
}

clear();

function draw(){
  if(frame == 1){
    clear();
    showLetters();
  }else if(frame == 2){
    frame = 0;
  }

  frame++;
  window.requestAnimationFrame(draw);
}

function showLetters(){
  ctx.fillStyle = "#fff";
  ctx.font = font_size + "px Gotham";
  
  for(let i = 0; i < drops.length; i++){ 
    let text = letters[Math.floor(Math.random()*letters.length)]; let textPosY = drops[i] * font_size ; 
    ctx.fillText(text,i*font_size,textPosY); 
  if(textPosY > height && Math.random() > 0.956){
        drops[i] = 0;
      }

      drops[i]++;
    }
}
function clear(){
  ctx.fillStyle = 'rgba(0, 0, 0,0.1)';
  ctx.fillRect(0,0,width,height);
}
window.requestAnimationFrame(draw);
window.addEventListener('resize', function(){
  height = canvas.height = window.innerHeight;
  width = canvas.width = window.innerWidth;
})
