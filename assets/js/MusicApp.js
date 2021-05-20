const img = document.getElementById("Music-img")
const  ImageRoation= document.querySelector(`.ImageRoation`)
const backward = document.getElementById("bakcward")
const Next = document.getElementById("forward")
const play = document.getElementById("play")
const Progress = document.getElementById("progress")
const audio = document.getElementById("SongStorag")
const Title = document.getElementById("Title")
const Artist = document.getElementById("Artist")
let  currentdata = document.getElementById("current")
const durationTime = document.getElementById("duration")
const progress_div = document.getElementById("progress_div")

const Songs = [

  
    
    {
        SongName: "believer-i-was-broken.mp3",
        ImgName: "../assets/Images/PopSong.png",
        Title: "Believer",
        Artist: "Imagine Dragons",
    },
    {
        SongName: "01justinbiebersongmusicringtone-40613.mp3",
        ImgName: "../assets/Images/Romanticsong.jpeg",
        Title: "Justin Bieber Sorry",
        Artist: "Justin Biber",
    },
    {
        SongName: "love-me-like-you-do-ellie-goulding.mp3",
        ImgName: "../assets/Images/Mat_kr_Maya.jpg",
        Title: "Love Me Like You",
        Artist: "Ellie Goulding",
    },
    {
        SongName: "we-don't-talk-anymore.mp3",
        ImgName: "../assets/Images/Happysong.jpeg",
        Title: "We don't Talk",
        Artist: "Charlie Puth",
    },
    {
        SongName: "MatkarmayakoahankarRingtone299823830.mp3",
        ImgName: "../assets/Images/cutemood.jpeg",
        Title: "Matkar Maya Ko Ahankar(Scam 1992)",
        Artist: "Kabir Café",
    },
]




let isplay = false



play.addEventListener('click', () => {

    isplay ? stopMusic() : MusicPaying()

})


const MusicPaying = () => {
    isplay = true
    audio.play()
    play.classList.replace("fa-play", "fa-pause")
    img.style.animationDuration='4000ms';
}
stopMusic = () => {
    isplay = false
    audio.pause();
    play.classList.replace("fa-pause", "fa-play")
    img.style.animationDuration='0ms';
}

const SongContent = (Songs) => {

    Title.textContent = Songs.Title;
    Artist.textContent = Songs.Artist
    audio.src= "../assets"+"/sounds/"+`${Songs.SongName}`;
//  audio.innerHTML= `<audio src="${Songs.SongName}" id="PlayMusic" controls></audio>` 
    img.innerHTML = `<img src="${Songs.ImgName}" id="Music-img" class="rounded" alt="img">`
}


SongContent(Songs[0])
let SongIndex = 0;


//backward For Song

backward.addEventListener(`click`, () => {
    SongIndex = (SongIndex - 1 + Songs.length) % Songs.length
    SongContent(Songs[SongIndex])
    console.log(SongIndex)

})



// Next For Song

const NextSong=()=>{

    SongIndex++
    SongContent(Songs[SongIndex])
    console.log(SongIndex)
    MusicPaying()
}

Next.addEventListener(`click`, NextSong)


audio.addEventListener("timeupdate", (event)=>{

    //console.log(event)
    const {currentTime, duration}=event.srcElement;
   
    let Progress_Width=(currentTime/duration)*100
     Progress.style.width=`${Progress_Width}%`

     let duration_Mint= Math.floor(duration/60)
     let duration_sec= Math.floor(duration%60)
     let currentTime_mint= Math.floor(currentTime/60)
     let currentTime_sec= Math.floor(currentTime%60)

     if(duration){
        durationTime.innerHTML=`${duration_Mint}:${duration_sec}`
     }
     currentdata.innerHTML= `${currentTime_mint}:${currentTime_sec}`
     

     if (duration==currentTime){

        img.style.animationDuration='0ms';
        play.classList.replace("fa-pause", "fa-play")
        NextSong()
     }
})

progress_div.addEventListener('click', (event)=>{

   // console.log(event)
    
    const{duration}=audio

    let Progress_time=(event.offsetX/event.srcElement.clientWidth)*duration;

    audio.currentTime=Progress_time
    console.log(Progress_time)
})