var buttonCount = 0;
var buttonPin = 5555;
var pinEntered = 0;

var reset;

$('.button').click(function(){
  $('.screen p').css('color', 'black');
  clearTimeout(reset);
  if(buttonCount == 0){
    buttonCount++;
    pinEntered = $(this).text();
    $('.screen p').text("*");
  }
  else{
    buttonCount++;
    $('.screen p').append("*");
    pinEntered += $(this).text();
  }
  
  if(buttonCount == 4){
    buttonCount = 0;
    
    if(pinEntered == buttonPin){
      $('.screen p').css({
        'color':'green'
      })
      $('.screen p').text('SUCCESS');
    }
    else{
      $('.screen p').css({
        'color':'red'
      });
      
      $('.screen p').text('INCORRECT');
    }
    
    reset = setTimeout(function(){
      $('.screen p').css({
        'color':'black'
      });
      $('.screen p').text('Enter Pin');
    } ,3000);
    pinEntered = 0;
  }
});