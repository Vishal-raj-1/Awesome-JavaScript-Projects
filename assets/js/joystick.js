//Initialize
function init(){
	//Character Intitialization
	objImage = document.getElementById("charr");
	
	// Shoot Initialization
	s = document.getElementById('shoot');


	leftl = document.getElementById("lleg");
	rightl = document.getElementById("rleg");
	bod = document.getElementById("body");	
	
	// Character position
	objImage.style.position='relative';
	objImage.style.left='0px';
	objImage.style.top='0px';
	
	//Shoot position
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
	    
	   // Key code fetching
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

//Left movement
function moveLeft(){
		objImage.style.left=parseInt(objImage.style.left)-10 +'px';
		objImage.style.transform = "scaleX(-1)";
        moveAudio()
		

	}

//Up Movement
function moveUp(){
		objImage.style.top=parseInt(objImage.style.top)-10 +'px';
		s.style.top=parseInt(s.style.top)-10 +'px';
        moveAudio()
		

	}

//Right Movement
function moveRight(){
		objImage.style.left=parseInt(objImage.style.left)+10 +'px';
		objImage.style.transform = "scaleX(1)";
        moveAudio()
		

	}

//Down Movement
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
		//Making the character back to position
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

		//Making shoot disable again
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
    
	// Invisible Audio source
	var iii = new Audio();
	iii.src = "../assets/sounds/joystick/inv.mp3";
	iii.play();
    
	//Making invisible
	var ii = document.getElementById('inv');
	ii.setAttribute("style", "visibility:hidden;");
	
	setTimeout(function(){

		//Making Character Visible again
		ii.setAttribute("style", "visibility:visible;");
		}
		 ,1000);
}


// Water effect
function goWater(){

	//Water audio effect
	var ww = new Audio();
	ww.src = "../assets/sounds/joystick/water.wav";
	ww.play();

	document.getElementById("water").setAttribute("style","visibility: visible;");
	
	setTimeout(function(){

	    // Fetching water background again
		document.getElementById("water").setAttribute("style","visibility: hidden;");
	 }
	 , 1700);
}

// Windows global initialize
window.onload=init;
