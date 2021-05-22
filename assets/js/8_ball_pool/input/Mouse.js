function handleMouseMove(evt)
{
    let x = evt.pageX;
    let y = evt.pageY;

    Mouse.position = new Vector2(x, y);
}

function handleMouseDown(evt)
{
    handleMouseMove(evt);

    if(evt.which == 1)
    {
        if(!Mouse.left.down)
        Mouse.left.pressed = true;
        Mouse.left.down = true;
    }
    else if(evt.which == 2)
    {
        if(!Mouse.middle.down)
        Mouse.middle.pressed = true;
        Mouse.middle.down = true;
    }
    else if(evt.which == 3)
    {
        if(!Mouse.right.down)
        Mouse.right.pressed = true;
        Mouse.right.down = true;
    }
}

function handleMouseUp(evt)
{
    handleMouseMove(evt);

    if(evt.which ==1)
    Mouse.left.down = false;
    else if(evt.which ==2)
    Mouse.middle.down = false;
    else if(evt.which ==3)
    Mouse.right.down = false;
}

function MouseHandler()
{
    this.left = new ButtonState();
    this.middle = new ButtonState();
    this.right = new ButtonState();

    this.position = new Vector2();

    document.onmousemove = handleMouseMove;
    document.onmousedown = handleMouseDown;
    document.onmouseup = handleMouseUp;
}

MouseHandler.prototype.reset = function()
{
    this.left.pressed = false;
    this.middle.pressed = false;
    this.right.pressed = false;
}

let Mouse = new MouseHandler();