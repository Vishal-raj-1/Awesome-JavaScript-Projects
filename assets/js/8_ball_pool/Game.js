function Game()
{

}
Game.prototype.init = function() //initializing the game
{
    this.gameWorld = new GameWorld();
}

Game.prototype.start = function() //for starting the game
{
    PoolGame.init();
    PoolGame.mainLoop();
}

Game.prototype.mainLoop = function()
{
    Canvas.clear(); //to clear canvas
    PoolGame.gameWorld.update(); //updating objects
    PoolGame.gameWorld.draw(); //drawing object
    Mouse.reset();

    requestAnimationFrame(PoolGame.mainLoop); //requesting mainLoop function in each animation frame
}

let PoolGame = new Game();