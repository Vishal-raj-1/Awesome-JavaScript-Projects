//if scrolltop>10 add the additional class to header 
//else remove that additional class
//additional class is used to change the color
$(window).on("scroll",function(){
    if($(window).scrollTop()>10){
        $("header").addClass("act");
    }
    else{
       $("header").removeClass("act");
    }
});
