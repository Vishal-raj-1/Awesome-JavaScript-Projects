var objImage= null;
var score = 0;

// Fetching Audio Source
var move = new Audio();
move.src = "../assets/sounds/Amongusminigame/amongus.mp3";
var kill = new Audio();
kill.src = "../assets/sounds/Amongusminigame/kill.mp3";
var sabotage = new Audio();
sabotage.src ="../assets/sounds/Amongusminigame/sabotage.mp3"


// Initializing
function init(){
	div = document.getElementById('img1');
	objImage=document.getElementById("img");
	leftl = document.getElementById("lleg");
	rightl = document.getElementById("rleg");
	bod = document.getElementById("body");
	imge = document.createElement('img');	
	sco = document.getElementById('score');		
	objImage.style.position='relative';
	objImage.style.left='0px';
	objImage.style.top='0px';
	div.style.left = "0px";
	}

// Calling function to play audio
function getAudio(){
	move.play();
    }
// Function for leg movement
function legmove(){
	if(leftl.style.transform ="rotate(0deg)"){
		           
					leftl.style.transform ="rotate(20deg)";
					setTimeout(function(){ leftl.style.transform ="rotate(0deg)"; }, 450);

				}
		
	if(rightl.style.transform ="rotate(0deg)"){
					rightl.style.transform ="rotate(-20deg)";
					setTimeout(function(){ rightl.style.transform ="rotate(0deg)"; }, 450);
				}

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
		}
		
	}

// Code for moving Character
function moveLeft(){
		objImage.style.left=parseInt(objImage.style.left)-5 +'px';
		objImage.style.transform = "scaleX(-1)";
		getAudio();
		legmove();

	}
function moveUp(){
		objImage.style.top=parseInt(objImage.style.top)-5 +'px';
		getAudio();
		legmove();

	}
function moveRight(){
		objImage.style.left=parseInt(objImage.style.left)+5 +'px';
		objImage.style.transform = "scaleX(1)";
		div.style.left = parseInt(div.style.left) + 40 +'px';
		getAudio();
		legmove();

	}
function moveDown(){
		objImage.style.top=parseInt(objImage.style.top)+5 +'px';
		getAudio();
		legmove();

	}
	
window.onload=init;


// Kill onclick
function goKill(){
	kill.play();
	removeKill();
	nowRemove();
	addImg();
	score = score + 1;
	scoreadd();

	setTimeout(function(){
	ran();
	addKill()

		 }
	 , 3700);

}


/* Removes the second character*/
function nowRemove(){
	 
	 div.setAttribute("style","visibility:hidden");
}

/*Adding dead body image*/
function addImg() {  
    imge.src = '../assets/Images/Amongusminigame/dead.png';
    imge.setAttribute("width", "170");
    imge.setAttribute("height", "170");
    imge.setAttribute("style","position:relative; left:350px; top:145px; z-index:-1;");
	document.getElementById('deadimg').appendChild(imge);


}

function removeImg(){
	imge.remove();
}

//Sabotag onclick
function gosabo(){
	document.getElementById("saboo").setAttribute("style","visibility: visible;");
	sabotage.play();
	
	setTimeout(function(){
	 document.getElementById("saboo").setAttribute("style","visibility: hidden;");
	 }
	 , 1700);
     
    setTimeout(function(){
	document.getElementById("saboo").setAttribute("style","visibility: visible;");
	}
	 , 2700);

    setTimeout(function(){
	document.getElementById("saboo").setAttribute("style","visibility: hidden");
	}
	 , 3700);
    
    setTimeout(function(){
	document.getElementById("saboo").setAttribute("style","visibility: visible");
	}
	 , 5000);
     setTimeout(function(){
	document.getElementById("saboo").setAttribute("style","visibility: hidden;");
	}
	 , 6000);
    setTimeout(function(){
	document.getElementById("saboo").setAttribute("style","visibility: visible");
	}
	 , 7000);
    setTimeout(function(){
	document.getElementById("saboo").setAttribute("style","visibility: hidden;");
	}
	 ,8000);
    setTimeout(function(){
	document.getElementById("saboo").setAttribute("style","visibility: visible");
	}
	 ,9000);
    setTimeout(function(){
	document.getElementById("saboo").setAttribute("style","visibility: hidden;");
	}
	 ,10000);


}

// Random raising of character

function ran(){
	

	div.setAttribute("style","visibility:visible");
	removeImg();
	
}//For adding the score
function scoreadd(){

	document.getElementById("score").innerHTML = "Score:" + score;
	

}

//Disable kill button
function removeKill(){
	var ree = document.getElementById("kill");
	ree.setAttribute("style", "visibility:hidden");

}

//Enable kill button
function addKill(){
	var ree = document.getElementById("kill");
	ree.setAttribute("style", "visibility:visible");

}

//Back navigation


function backmini(){
	location.replace('https://vishal-raj-1.github.io/Awesome-JavaScript-Projects/projects.html');
}