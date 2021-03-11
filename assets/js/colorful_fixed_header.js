$(window).on("scroll",function(){
    if($(window).scrollTop()>10){
        $("header").addClass("act");
    }
    else{
       $("header").removeClass("act");
    }
});
