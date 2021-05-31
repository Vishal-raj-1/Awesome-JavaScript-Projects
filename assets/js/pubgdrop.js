//Intialize
function init(){
	//Plane element
	pl = document.getElementById("plane");
	//Airdrop element
	ai = document.getElementById("airdrop");
	//Drop image element
	im = document.getElementById("img1");
	//Button element
	bu = document.getElementById("button");
	//Text element
	wr = document.getElementById("write")
	}

//Drop
function goDrop(){
	//Making button invisible
	bu.setAttribute("style","visibility:hidden;");

	//Playing Audio
	goAudio();

	//Making animation as running state
	pl.setAttribute("style","visibility:visible; animation-play-state:running;");
	ai.setAttribute("style","visibility:hidden;animation-play-state:running;");

	//To trigger the text
	wr.innerHTML = "Wait for button to reappear!";
	wr.setAttribute("style","visibility:visible;");

	//To trigger drop animation
	setTimeout(function(){

	im.setAttribute("style","visibility:visible;");

	}
	 , 6000);

	//To close the plane animation
	setTimeout(function(){
		//Making animation again to pause state
		pl.setAttribute("style","visibility:hidden;animation-play-state:paused;");
		ai.setAttribute("style","visibility:hidden;animation-play-state:paused;");

		//Making image and text as hidden again
		im.setAttribute("style","visibility:hidden;");
		wr.setAttribute("style","visibility:hidden;");

		//Making button visible again
		bu.setAttribute("style","visibility:visible;");

	}
	 , 12000);

}

//audio
function goAudio(){
	var fl = new Audio();
	fl.src = "../assets/sounds/plane.mp3";
	fl.play();
}

//Onload
window.onload=init;