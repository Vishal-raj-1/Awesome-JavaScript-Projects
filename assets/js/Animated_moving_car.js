$(document).ready(function(){
    
    //variables
    $surface = $('.surface');
    $car = $('.car');

    //keypress Enter
    $(document).on('keypress',function(e){
        if(e.which==13){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }

    })

});