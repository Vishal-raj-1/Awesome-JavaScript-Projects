function Canvas2D() //function constructor has similar kind of object
{
    this._canvas = document.getElementById('screen'); //connects the _canvas variable to the html canvas. 
    this._canvasContext = this._canvas.getContext('2d'); //this refers to the "owner" of the function
}                                                        // getContext is used to draw a 2D figure

Canvas2D.prototype.clear = function()
{
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}
Canvas2D.prototype.drawImage = function(image, position, origin, rotation = 0)
{
    if(!position)
    {
        position = new Vector2(); //Objects of the same type are created by calling 
    }                             //the constructor function with the new keyword.
    if(!origin)
    {
        origin = new Vector2();
    }
    this._canvasContext.save(); 
    this._canvasContext.translate(position.x, position.y);
    this._canvasContext.rotate(rotation);
    this._canvasContext.drawImage(image, -origin.x, -origin.y);
    this._canvasContext.restore();
}
let Canvas = new Canvas2D();

