const yoga = () => {
	const song = document.querySelector('.song');
	const play = document.querySelector('.play');
	const outline = document.querySelector('.moving-outline circle');
	const video = document.querySelector('.vid-container video');
	
	// Sounds
	const sounds = document.querySelectorAll('.sound-picker button')

	// Time display
	const timeDisplay = document.querySelector('.time-display');

	// Time select
	const timeSelect = document.querySelectorAll(".time-select button");

	// Get length of outline
	const outlineLength = outline.getTotalLength();
	console.log(outlineLength);

	// Duration
	let fakeDuration = 600;
	outline.style.strokeDasharray = outlineLength;
	outline.style.strokeDashoffset = outlineLength;

	// Pick different sounds
	sounds.forEach(sound => {
		sound.addEventListener("click", function(){
			song.src = this.getAttribute('data-sound');
			video.src = this.getAttribute('data-video');
			checkPlaying(song);
		})
	})

	// play sounds
	play.addEventListener("click", ()=>{
		
		checkPlaying(song);
	})
	

	// select sound
	timeSelect.forEach( option => {
		option.addEventListener("click", function(){
			fakeDuration = this.getAttribute("data-time");
			timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
		})
	})

	// function to play and pause sound
	const checkPlaying = song => {
  if (song.paused) {
    song.play();
    video.play();
    play.src = "../assets/svg/pause.svg";
  } else { 
  	
    song.pause();
    video.pause();
    play.src = "../assets/svg/play.svg";
  }
};

	// animate circle function
	song.ontimeupdate = () => {
		let currentTime = song.currentTime;
		let elapsed = fakeDuration - currentTime;
		let seconds = Math.floor(elapsed % 60);
		let minutes = Math.floor(elapsed / 60); 

		// animating circle otline
		let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
		outline.style.strokeDashoffset = progress;
		timeDisplay.textContent = `${minutes}:${seconds}`;

		if(currentTime >= fakeDuration){
			song.pause();
			song.currentTime = 0;
			play.src = '../assets/svg/play.png';
			video.pause();
		}
	}
}

yoga();
