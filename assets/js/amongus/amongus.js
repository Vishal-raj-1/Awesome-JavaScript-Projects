var objImage= null

// Fetching Audio Source
var bleep = new Audio();
bleep.src = "../../assets/sounds/amongus/amongus.mp3";

// Initializing
function init(){
	objImage=document.getElementById("img");
	leftl = document.getElementById("lleg");
	rightl = document.getElementById("rleg");
	bod = document.getElementById("body");			
	objImage.style.position='relative';
	objImage.style.left='0px';
	objImage.style.top='0px';
	}

// Calling function to play audio
function getAudio(){
	bleep.play();
    }

// On Pressing the key [The Main function]
function getKeyAndMove(e){
	

	if(leftl.style.transform ="rotate(0deg)"){
		           
					leftl.style.transform ="rotate(20deg)";
					setTimeout(function(){ leftl.style.transform ="rotate(0deg)"; }, 450);

				}
		
	if(rightl.style.transform ="rotate(0deg)"){
					rightl.style.transform ="rotate(-20deg)";
					setTimeout(function(){ rightl.style.transform ="rotate(0deg)"; }, 450);
				}
    		
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
		}
		
	}

// Dark and Light Mode function call

function setColor(){
    document.getElementById("b").style.backgroundColor="white";

}
function setColor1(){
    document.getElementById("b").style.backgroundColor="black";

}

// Code for moving Character
function moveLeft(){
		objImage.style.left=parseInt(objImage.style.left)-5 +'px';
		objImage.style.transform = "scaleX(-1)";
		getAudio();
	}
function moveUp(){
		objImage.style.top=parseInt(objImage.style.top)-5 +'px';
		getAudio();
	}
function moveRight(){
		objImage.style.left=parseInt(objImage.style.left)+5 +'px';
		objImage.style.transform = "scaleX(1)";
		getAudio();
	}
function moveDown(){
		objImage.style.top=parseInt(objImage.style.top)+5 +'px';
		getAudio();
	}
	
window.onload=init;

//Back navigation
function backmove(){
	location.replace('gamemain.html');

}


