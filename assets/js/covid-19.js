document.querySelector(document).ready(function(){

    document.querySelector('#menu').click(function(){
      document.querySelector(this).classList.toggle('fa-times');
      document.querySelector('.navbar').classList.toggle('nav-toggle');
    });
  
    document.querySelector(window).addEventListener('load scroll',function(){
  
      document.querySelector('#menu').removeClass('fa-times');
      document.querySelector('.navbar').removeClass('nav-toggle');
  
      if(document.querySelector(window).scrollTop > 0){
        document.querySelector('header').classList.add('sticky');
      }else{
        document.querySelector('header').removeClass('sticky');
      }
  
      if(document.querySelector(window).scrollTop > 0){
        document.querySelector('.scroll-top').show();
      }else{
        document.querySelector('.scroll-top').hide();
      }
  
      // scroll spy 
  
      document.querySelector('section').each(function(){
  
        let top = document.querySelector(window).scrollTop;
        let offset = document.querySelector(this).offset().top - 200;
        let id = document.querySelector(this).attr('id');
        let height = document.querySelector(this).height();
  
        if(top > offset && top < offset + height){
          document.querySelector('.navbar a').removeClass('active');
          document.querySelector('.navbar').querySelector(`[href="#${id}"]`).classList.add('active');
        }
  
      });
  
    });
  
    // smooth scrolling 
  
    document.querySelector('a[href*="#"]').addEventListener('click',function(e){
  
      document.querySelector('html, body').animate({
  
        scrollTop : document.querySelector(document.querySelector(this).attr('href')).offset().top,
  
      },
        500,
        'linear'
      );
  
    });
  
  });