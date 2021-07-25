$(function () 
{   
    //variables for function

    //paintingerasting or not
    var paint = false;

    //painting
    var paint_erase = 'paint';

    //get canvas and context
    var canvas = document.getElementById('paint');
    var ctx = canvas.getContext('2d');

    //get the canvas container
    var container = $('#container');

    //mouse position
    var mouse = {x: 0, y: 0};

    //onload load saved
    if(localStorage.getItem('imgCanvas') != null) {
        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        }
        img.src = localStorage.getItem('imgCanvas');
    };
    ctx.lineWidth = 3;
    ctx.linejoin = 'round';
    ctx.lineCap = 'round';
    //click inside button
    container.mousedown(function (e) {
        paint = true;
        ctx.beginPath();
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        ctx.moveTo(mouse.x, mouse.y);
    });
    //move the mouse
    container.mousemove(function (e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        if (paint == true) {
            if (paint_erase == 'paint') {
                ctx.strokeStyle = $('#paintColor').val();
            }
            else 
            {
                ctx.strokeStyle = 'white';
            }
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            }
        });
    //mouse up -> we are not paintingerasting anymore
    container.mouseup(function () {
        paint = false;
    });
    container.mouseleave(function () {
        paint = false;
   });
   //////////////////////////////////////
    $('#reset').click(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        paint_erase = 'paint';
        $('#erase').removeClass('eraseMode');
    });
    $('#save').click(function () {
        if (typeof (localStorage) != null) {
            localStorage.setItem('imgCanvas', canvas.toDataURL());
        }
        else{
            window.alert('Your browser does not support localstorage!');
        }
    });
    $('#erase').click(function () {
        if (paint_erase == 'paint') {
            paint_erase = 'erase'; 
        }
        else{
            paint_erase = 'paint';
        }
        $(this).toggleClass('eraseMode');
    });
    // change color input
    $('#paintColor').change(function () {
        $('#circle').css('background-color',$(this).val());
    });
    $('#slider').slider({
        min: 3,
        max: 30,
        slide:function(event,ui) {
            $('#circle').height(ui.value),
            $('#circle').width(ui.value);
            ctx.lineWidth = ui.value;
      }
  });

});
