function GameWorld() //it will contain all physical objects and will update them from time to time
{
    this.balls = CONSTANTS.ballsParams.map(params => new Ball(...params));
         
    this.whiteBall = this.balls.find(ball => ball.color === COLOR.WHITE); 

    this.stick = new Stick(
        this.whiteBall.position.copy(),
        this.whiteBall.shoot.bind(this.whiteBall)
    );

    this.table = {
        TopY : 57,
        RightX : 1443,
        BottomY : 768,
        LeftX : 57
    }
}

GameWorld.prototype.handleCollisions = function()
{
    for(let i = 0; i < this.balls.length; i++)
    {
        this.balls[i].handleBallInPocket();
        this.balls[i].collideWithTable(this.table);

        for(let j = i + 1; j < this.balls.length; j++)
        {
            const firstBall = this.balls[i];
            const secondBall = this.balls[j];
            firstBall.collideWithBall(secondBall);
        }
    }
}

GameWorld.prototype.update = function() //to update the objects in each animation frame 
{
    this.handleCollisions();
    
    this.stick.update(); //for updating position of stick
    for(let i = 0; i < this.balls.length; i++)
    {
        this.balls[i].update(CONSTANTS.delta); 
    }

    if(!this.ballsMoving() && this.stick.shot)
    {
         this.stick.reposition(this.whiteBall.position);
    }
}

GameWorld.prototype.draw = function() //to draw updated objects on canvas
{
    Canvas.drawImage(sprites.background, new Vector2()); //drawing pool table

    for(let i = 0; i < this.balls.length; i++)
    {
        this.balls[i].draw(); 
    }    

    this.stick.draw();  //drawing stick
}

GameWorld.prototype.ballsMoving = function()
{
     let ballsMoving = false;

     for( let i =0; i < this.balls.length; i++)
     {
         if(this.balls[i].moving)
         {
             ballsMoving = true;
             break;
         }
     }
     return ballsMoving;
}