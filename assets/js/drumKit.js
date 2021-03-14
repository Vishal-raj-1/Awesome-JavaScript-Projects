//loops through all keys and adds event listener for click
for (let i = 0; i < document.querySelectorAll(".key").length; i++) {
  document.querySelectorAll("div")[i].addEventListener("click", function() {
    const key = this.getAttribute("data-key");
    playAudio(key);
    transitionAddRemove(key);
  });

}
//detects keypress
document.addEventListener('keydown', function(event) {
  let keyPressed=event.key;
  
  keyPressed=keyPressed.toUpperCase().charCodeAt(0);
  playAudio(keyPressed);
  transitionAddRemove(keyPressed);
});

function playAudio(key) {
  // To instantiate audio
  const audio = document.querySelector(`audio[data-key="${key}"]`);

  if (!audio) return;
  audio.play();
  audio.currentTime = 0;

 
 
}
 // To animate key clicked

function transitionAddRemove(key) {
  
 
  let activeDiv= document.querySelector(`div[data-key = "${key}"]`);
  if(activeDiv==null){
    return;
  }
  activeDiv.classList.add("key-playing");
//to remove animation  
  setTimeout(function(){
    activeDiv.classList.remove("key-playing");
  },100);
}


