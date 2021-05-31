//Main Audio
	var ma = new Audio();
	ma.src="../../assets/sounds/amongus/amongmain.mp3";

function clickGame(){
	location.replace('gamemain.html');
	var ss = document.getElementById("mainn");
	ss.remove();
    ma.play();
	ma.loop=true;
	addfon();




}

function mini(){
	ma.pause();
	var en = new Audio();
	en.src = "../../assets/sounds/amongus/enter.mp3";
	en.play();
	setTimeout(function(){
	 location.replace('amongusmove.html');
	 }
	 , 500);
	

	

	
}

function mini1(){
	ma.pause();
	var en = new Audio();
	en.src = "../../assets/sounds/amongus/enter.mp3";
	en.play();
	setTimeout(function(){
	 location.replace('amongus.html');
	 }
	 , 500);

	
}

