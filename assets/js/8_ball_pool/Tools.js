let sprites = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback) //when tools stop loading then callback the function
{
    if(assetsStillLoading)
    {
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback)); //call this method whenever you're ready to 
    }                                                                  //update your animation onscreen
    else
    {
     callback();   
    }
}

function loadAssets(callback)
{
    function loadSprite(fileName)
    {
        assetsStillLoading++;  //increasing the quantity of loading tools

        let spriteImage = new Image();
        spriteImage.src = "../assets/Images/8_ball_pool/" + fileName; //file source

        spriteImage.onload = function()
        {
            assetsStillLoading--; //when all tools stops loading then start decreasing it
        }
        return spriteImage;
    }
    sprites.background = loadSprite('table.png'); //for loading pool table
    sprites.stick = loadSprite('stick.png'); //for loading cue stick
    sprites.whiteBall = loadSprite('white_ball.png'); //for loading cue ball
    sprites.yellowBall = loadSprite('yellow_ball.png');
    sprites.redBall = loadSprite('red_ball.png');
    sprites.blackBall = loadSprite('black_ball.png');

    assetsLoadingLoop(callback); //it shows image only when all images get loaded
}

function getBallSpriteByColor(color)
{
    switch(color){

        case COLOR.RED:
        return sprites.redBall;

        case COLOR.YELLOW:
        return sprites.yellowBall;
        
        case COLOR.BLACK:
        return sprites.blackBall;

        case COLOR.WHITE:
        return sprites.whiteBall;
    }
}