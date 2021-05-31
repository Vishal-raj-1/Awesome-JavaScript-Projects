let cvs= document.getElementById("canvas"); //cvs --> variable
let ctx=cvs.getContext("2d"); // method calling , parameter -->2d
let fire1=document.getElementById("fire1");
let fire2=document.getElementById("fire2");
let ending1=document.getElementById("ending1");


// variable declaration!
let frames=0;

// images loading
let sprite=new Image(); //image object creation
sprite.src="../assets/Images/FlappyBird/sprite.png";

let cricket=new Image();
cricket.src="../assets/Images/FlappyBird/virus.png";

//load sound
let flap=new Audio();
flap.src="../assets/sounds/flap.wav";

let point=new Audio();
point.src="../assets/sounds/point.wav";

let hit=new Audio();
hit.src="../assets/sounds/hit.wav";

let die=new Audio();
die.src="../assets/sounds/die.wav";

let swooshing=new Audio();
swooshing.src="../assets/sounds/swooshing.wav";


//State Object
const state=
{
    current:0,
    getReady:0,
    game:1,
    gameOver:2,

}

cvs.addEventListener("click", function(event)
{
    switch(state.current)
    {
        case state.getReady:
            state.current = state.game;
            swooshing.play();
            break;
        case state.game:
            bird.move();
            flap.play();
            break;
        case state.gameOver:
            let cvsposition=cvs.getBoundingClientRect(); //gives width ,height etc of canvas
            let clickX=event.clientX-cvsposition.left; //clientX-->gives position of x axis!
            // console.log(clickX)
            let clickY=event.clientY-cvsposition.top;// position of y axis!
            // console.log(clickY)
            if(clickX>startbtn.x && clickX<startbtn.x+startbtn.w && clickY > startbtn.y && clickY<startbtn.y+startbtn.h)
            {
                state.current=state.getReady;
                pipes.reset();
                ball.reset();
                score.reset();
            }
            break;
    }
})
//startbtn object
const startbtn=
{
    x:720,
    y:373,
    w:83,
    h:29,

}
 
//getReady Object
const getReady=
{
    sX:0,
    sY:228,        //sY--> source y axis
    w:173,
    h:152,
    x:cvs.width/2-(173/2), //for center Position (get ready position) !
    y:200,
    draw:function()
    {
        if(state.current==state.getReady)
        {
        ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
        fire1.style.display="none";
        fire2.style.display="none";
        }
    }
}
//Game over object!
const gameOver=
{
    sX:175,
    sY:228,
    w:225,
    h:202,
    x:cvs.width/2-(225/2), //for center Position (game over  position) !
    y:200,
    draw:function()
    {
        if(state.current==state.gameOver)
        {
        ctx.drawImage(sprite,this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);
        fire1.style.display="block";
        fire2.style.display="block";
        }
    }
}


// cloud object
let cloud=
{
    sX:0,
    sY:0,
    w:275,
    h:220,
    x:0,
    y:cvs.height-220,
    draw: function()
    {
        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);

        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x + this.w,this.y,this.w,this.h);
         
        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x+(2*this.w),this.y,this.w,this.h);

        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x+(3*this.w),this.y,this.w,this.h);

        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x+(4*this.w),this.y,this.w,this.h);
        
        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x+(5*this.w),this.y,this.w,this.h);
    }
}

// for ground position
let ground=
{
    sX:276,
    sY:0,
    w:224,
    h:112,
    x:0,
    y:cvs.height-112,
    dx:3,
    draw: function()
    {
        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x,this.y,this.w,this.h);

        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x + this.w,this.y,this.w,this.h);
         
        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x+(2*this.w),this.y,this.w,this.h);

        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x+(3*this.w),this.y,this.w,this.h);

        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x+(4*this.w),this.y,this.w,this.h);
        
        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x+(5*this.w),this.y,this.w,this.h);

        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x+(6*this.w),this.y,this.w,this.h);

        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x+(7*this.w),this.y,this.w,this.h);

        ctx.drawImage(sprite, this.sX,this.sY,this.w,this.h,this.x+(8*this.w),this.y,this.w,this.h);

    },
    update:function()
    {
        if(state.current==state.game)
        {
            this.x-=this.dx;  //dec value by 3!(moving ground)
            if(this.x%112==0) // repeating moving ground!
            {
                this.x=0;
            }
        } 
    }
}
// Bird Object
const bird=
{
    animation:   //animation is a set of frames!
    [
        {sX:276,sY:112},
        {sX:276, sY:139},
        {sX:276, sY:164},
        {sX:276, sY:139}  // repeating second Bird!
    ],
    x:50,
    y:150,      //Bird canvas position!
    w:34,
    h:26,
    frame:0,
    period:5, // higher the value of period slower the flapping of the Bird!
    speed:0,
    gravity:0.20,
    jump:4.6,
    radius:13,
    draw:function()
    {
       let bird= this.animation[this.frame];//access the bird!
       ctx.drawImage(sprite,bird.sX,bird.sY,this.w,this.h,this.x-this.w/2,this.y-this.h/2,this.w,this.h);
    },
    update:function()
    {
        this.period=state.current==state.getReady?10:5;
        // for flapping the bird ,for every 5 frames the value of frame will inc by 1 !
        this.frame+=frames%this.period==0 ? 1:0;
        // reset the frame
        this.frame=this.frame%this.animation.length;
        // Gravity
        if(state.current==state.getReady)
        {
            this.y=150;
        }
        else
        {
            this.y+=this.speed;//higher the y axis, lower the Bird! (top to bottom has +ve value)
            this.speed+=this.gravity; 
        }
        if(this.y+this.h/2/*(bird's center point) */>=cvs.height-ground.h)//condition when bird hits to ground collision detection
        {
            this.speed=0; 
            this.frame=0;
            if(state.current==state.game)
            {
                state.current=state.gameOver;
                die.play();
            }
        }

    },
    move:function()
    {
        this.speed=-this.jump;//flapping bird up (bottom to top has -ve value)
       
    }

}

//for pipes
const pipes=
{
    position:[],
    top:
    {
        sX:553,
        sY:0,
    },
    bottom:
    {
        sX:502,
        sY:0,
    },
    w:53,
    h:400,
    gap:160,
    maxYpos:-160,
    dx:6,

    draw :function()
    {
        for(let i=0;i<this.position.length;i++)
        {
            let p=this.position[i];//position in array
            let topYPos=p.y;
            let bottomYPos=p.y+this.h+this.gap;

            // top pipe
            ctx.drawImage(sprite,this.top.sX,this.top.sY,this.w,this.h,p.x,topYPos,this.w,this.h);
            
            //bottom pipe
            
            ctx.drawImage(sprite,this.bottom.sX,this.bottom.sY,this.w,this.h,p.x,bottomYPos,this.w,this.h);
        }

    },
    update:function()
    {
        if(state.current!==state.game)
        {
            return;
        }
        if(frames%100==0) //for every 100 frames
        {
            this.position.push
            (
                {
                    x:cvs.width,
                    y:this.maxYpos*(Math.random()+1),
                }
            );
        }
        for(let i=0;i<this.position.length;i++)
        {
            let p=this.position[i];
            p.x-=this.dx; // for moving pipes

            //for removing the pipes from the array
            if(p.x+this.w <=0)
            {
                this.position.shift();
                point.play();

                // score increment
                score.value+=1;
                score.best=Math.max(score.value,score.best);
                localStorage.setItem("best",score.best); // best--> key
            }
            //collison detection with pipes(top pipe)
            if(bird.x+bird.radius>p.x && bird.x-bird.radius<p.x+this.w && bird.y+bird.radius >p.y && bird.y-bird.radius<p.y+this.h)   
            {
                hit.play();
                state.current=state.gameOver;
            }
            // collision detection with pipes(bottom pipes)
            //tobp-->top of bottom pipe
            //bobp-->bottom of bottom pipe
            let tobp=p.y+this.h+this.gap;
            let bobp=p.y+this.h+this.gap+this.h;
            if(bird.x+bird.radius>p.x && bird.x-bird.radius < p.x+this.w && bird.y+bird.radius>tobp && bird.y-bird.radius<bobp)
            {
                hit.play();
                state.current=state.gameOver;
            }
        }

    },
    reset:function()
    {
        this.position=[];
    }
}
// ball object
const ball=
{
    ball_position:[],
    w:50,
    h:50,
    sX:0,
    sY:0,
    dx:4,
    draw:function()
    {
        for(let i=0;i<this.ball_position.length;i++)
        {
            let p=this.ball_position[i];
            ctx.drawImage(cricket,this.sX,this.sY,2000,2000,p.x,p.y,this.w,this.h);
        }

    },
    update:function()
    {
        if(state.current!==state.game)
        {
            return;
        }
        if(frames%100==0)
        {
            this.ball_position.push
            (
                {
                    x:cvs.width,
                    y:Math.random()*400,//generates random values of y b/w 0-400!
                }
            );
            
        }
        for(let i=0;i<this.ball_position.length;i++)
        {
            let p=this.ball_position[i];
            p.x-=this.dx;

            if(p.x+this.w<=0)//outside the canvas !
            {
                this.ball_position.shift();
            }
            // colision detection ball
            if(bird.x+bird.radius>p.x && bird.x-bird.radius<p.x+this.w && bird.y+bird.radius>p.y&&bird.y-bird.radius<p.y+this.h)
            {
                hit.play();
                state.current=state.gameOver;
            }
        }

    },
    reset:function()
    {
        this.ball_position=[];
    }
}

//score object
const score=
{
    best:parseInt(localStorage.getItem("best"))|| 0,
    value:0,
    draw:function()
    {
        ctx.fillStyle="#000000";
        if(state.current == state.game)
        {
        ctx.font="50px teko";
        ctx.fillText(this.value,cvs.width/2/*(x)*/,100/*(y)*/);
        }
        else if(state.current==state.gameOver)
        {
            ctx.font="30px teko";
            ctx.fillText(this.value,cvs.width/2+65,300);

            ctx.font="30px teko";
            ctx.fillText(this.best,cvs.width/2+65,340);
        }
    },
    reset:function()
    {
        this.value=0;
    }
}



//for drawing
function draw()
{
    let color = ctx.createLinearGradient(0,0,cvs.width,cvs.height);
    color.addColorStop(0,"cyan");//0%
    color.addColorStop(0.5,"deepskyblue");//50%
    color.addColorStop(1,"cyan");//100%
    ctx.fillStyle=color; //getContext method!
    ctx.fillRect(0,0,cvs.clientWidth,cvs.height);// x axis, y axis,width,height!
    cloud.draw();
    pipes.draw();
    ball.draw();
    ground.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
    score.draw();

}
function update()
{
    ground.update();
    bird.update();
    pipes.update();
    ball.update();
}



// fuction loop
function loop()
{
    draw();
    update();
    frames++;
    requestAnimationFrame(loop); // call's that loop , frames per sec!
}
loop();
