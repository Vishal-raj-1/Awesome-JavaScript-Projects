/*using DOM manipulation*/

var playVid;
playVid=document.getElementById("videoPlayer");   

function playVideo()
{
/*play video*/
 playVid.play();
}

function pauseVideo()
{
/*pause video*/
 playVid.pause();
}

function stopVideo() 
{
/*stop video*/
 playVid.pause();
 playVid.currentTime = 0;
}

/*setting volume*/
function volumeChange()
{
var vol=document.getElementById("volume-change");
 playVid.volume=vol.value;
 var value = (vol.value-vol.min)/(vol.max-vol.min)*100
 vol.style.background = 'linear-gradient(to right, #BE00FE 0%, #A117F2 ' + value + '%, #fff ' + value + '%, white 100%)'
}

/*for fullscreen*/
function fullScreen() {
    if (playVid.requestFullscreen) {
      playVid.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      playVid.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
      playVid.msRequestFullscreen();
    }
  }

