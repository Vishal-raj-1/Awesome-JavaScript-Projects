//Initialize
function init(){
	objImage = document.getElementById("charr");
	
	s = document.getElementById('shoot');


	leftl = document.getElementById("lleg");
	rightl = document.getElementById("rleg");
	bod = document.getElementById("body");	
	
	objImage.style.position='relative';
	objImage.style.left='0px';
	objImage.style.top='0px';
	
	s.style.position='relative';
	s.style.left='0px';
	s.style.top='0px';
	}

// Move audio{
    function moveAudio(){
        var move = new Audio();
        move.src = "../assets/sounds/joystick/move.mp3";
        move.play();
    }


// On Pressing the key [The Main function]
function getKeyAndMove(e){
	
	
    		
// Fetching the key code value	
	var key_code=e.which||e.keyCode;
		switch(key_code){
			case 37: //left arrow key
				moveLeft();
				break;
			case 38: //Up arrow key
				moveUp();
				break;
			case 39: //right arrow key
				moveRight();
				break;
			case 40: //down arrow key
				moveDown();
				break;
			case 87: // W key
			    moveUp();
			    break;
			case 83: //S key
			    moveDown();
			    break;
			case 65: //A key
			    moveLeft();;
			    break;
			case 68: // D key
			    moveRight();
			    break;
            case 67: // C key 
                goJump();
                break; 

            case 66: // Bkey
				goShoot();
				break;

            case 88: // X key
				goInvi();
				break; 
                
            case 89: // Y key
				goWater()
				break;
		}
		
	}

// Code for moving Character
function moveLeft(){
		objImage.style.left=parseInt(objImage.style.left)-10 +'px';
		objImage.style.transform = "scaleX(-1)";
        moveAudio()
		

	}
function moveUp(){
		objImage.style.top=parseInt(objImage.style.top)-10 +'px';
		s.style.top=parseInt(s.style.top)-10 +'px';
        moveAudio()
		

	}
function moveRight(){
		objImage.style.left=parseInt(objImage.style.left)+10 +'px';
		objImage.style.transform = "scaleX(1)";
        moveAudio()
		

	}
function moveDown(){
		objImage.style.top=parseInt(objImage.style.top)+10 +'px';
		s.style.top=parseInt(s.style.top)+10 +'px';
        moveAudio()
		
	}


// Jump
function goJump(){
    var jump = new Audio();
    jump.src = "../assets/sounds/joystick/Jump.mp3";
    jump.play();
    objImage.style.top = parseInt(objImage.style.top)-50 +'px';
    
    setTimeout(
        function(){ 
            objImage.style.top = parseInt(objImage.style.top)+50 +'px';
        }, 
        
        450);
				

}

// Shoot
function goShoot(){
	
    s.setAttribute('style', 'height: 10px; width:4000px; visibility:visible; top:50px');
	shPl();
	
	setTimeout(function(){
		s.setAttribute('style', 'height: 10px; width:4000px; visibility:hidden');
		}
		 ,1000);
}



//Shoot audio
function shPl(){
	var mo = new Audio();
	mo.src = "../assets/sounds/joystick/shoot.mp3";
	mo.play();
}

// Inivisible
function goInvi(){

	var iii = new Audio();
	iii.src = "../assets/sounds/joystick/inv.mp3";
	iii.play();

	var ii = document.getElementById('inv');
	ii.setAttribute("style", "visibility:hidden;");
	setTimeout(function(){
		ii.setAttribute("style", "visibility:visible;");
		}
		 ,1000);
}


// Water effect
function goWater(){
	var ww = new Audio();
	ww.src = "../assets/sounds/joystick/water.wav";
	ww.play();

	document.getElementById("water").setAttribute("style","visibility: visible;");
	//sabotage.play();
	
	setTimeout(function(){
	 document.getElementById("water").setAttribute("style","visibility: hidden;");
	 }
	 , 1700);
}

// water sound effect


window.onload=init;
