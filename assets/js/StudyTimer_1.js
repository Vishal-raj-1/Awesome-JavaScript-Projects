// getting all the elements

//break  settings
const breakInc= document.getElementById('break-increment');
const breakDec= document.getElementById('break-decrement');
const breakLen= document.getElementById('break-length');

//session  settings
const sessionInc= document.getElementById('session-increment');
const sessionDec= document.getElementById('session-decrement');
const sessionLen= document.getElementById('session-length');

// timer display settings
const timerLbl=document.getElementById('timer-label');
var timeLeftmm=document.getElementById('time-left-mins');
var timeLeftss=document.getElementById('time-left-secs');
var breakLeftmm=document.getElementById('break-time-left-mins');
var breakLeftss=document.getElementById('break-time-left-secs');
// clock settings
const startStop=document.getElementById('start-stop');
const reset=document.getElementById('reset')

const timer_session=document.getElementById('timer-box-session')
const timer_break=document.getElementById('timer-box-break')

const msgContainer=document.getElementById('message-container')

// used to ensure that the details are displayed only once
var displayedSession=true;
var displayedPlanner=true;

// piece of code to flip between the session and break 
const flipSession=()=>
{
    insession=false
    inbreak=  true
    displayedPlanner=true;
    timer_session.style.display='none';
    timer_break.style.display='block';
    timer_break.style.transform='rotateY(0deg)';

    // for displaying the goals only once on the screen
    if(displayedSession)
    { curListLenCount+=1;
        dropDownDiv.innerHTML+=
            `<div class='dropdown-div'>
            <p class='dropdown-div-heading'> Session ${curListLenCount}
            </p>
            <ul class='ul-list-dropdown' id="session_displayer__list-${curListLenCount}"> </ul>
            </div>`
        displaySessionDetails()
        displayedSession=false
    }

}
const flipBreak=()=>
{
    insession=true
    inbreak= false
    displayedSession=true;
    timer_session.style.display='block';
    timer_break.style.display='none';
    timer_break.style.transform='rotateY(180deg)';
}
const updateTitle= function()
{
    if(inbreak)
    {
        document.title= `Break : ${breakLeftmm.innerHTML}:${breakLeftss.innerHTML}`
    }
    else
    {
        document.title= `Session : ${timeLeftmm.innerHTML}:${timeLeftss.innerHTML}`
    }
}
var insession=true;
var inbreak=false;
var running=false;
var currentStartStop;
const startClock=function()
{

    // session time
    if (timeLeftss.innerHTML!=0)
    {
        timeLeftss.innerHTML-=1
        if(timeLeftss.innerHTML<10)
        {
            timeLeftss.innerHTML='0'+timeLeftss.innerHTML   
        }
        updateTitle()
    }
    else if(timeLeftmm.innerHTML!=0 && timeLeftss.innerHTML ==0)
    {
        timeLeftss.innerHTML=59;
        timeLeftmm.innerHTML--;
        if(timeLeftmm.innerHTML<10)
        {
            timeLeftmm.innerHTML='0'+timeLeftmm.innerHTML   
        }
        updateTitle()

    }

    // break timer
    if(timeLeftss.innerHTML==0 && timeLeftmm.innerHTML==0)
    {
        // the timer has completed
        flipSession()
        if(breakLeftss.innerHTML!=0)
        {
            breakLeftss.innerHTML--;
            if(breakLeftss.innerHTML<10)
            {
            breakLeftss.innerHTML='0'+breakLeftss.innerHTML   
            }
            updateTitle()
        }
        else if(breakLeftmm.innerHTML!=0 && breakLeftss.innerHTML==0)
        {
            breakLeftss.innerHTML=59;
            breakLeftmm.innerHTML--;
            if(breakLeftmm.innerHTML<10)
            {
            breakLeftmm.innerHTML='0'+breakLeftmm.innerHTML   
            }
            updateTitle()
        }
        if(breakLeftss.innerHTML==0 && breakLeftmm.innerHTML==0 && timeLeftss.innerHTML==0 && timeLeftmm.innerHTML==0)
        {
            flipBreak()
            breakLeftmm.innerHTML=breakLen.innerHTML;
            breakLeftss.innerHTML='00';
            timeLeftmm.innerHTML=sessionLen.innerHTML;
            timeLeftss.innerHTML='00'
            updateTitle()
        }
        
    }
}
// toggling start stop state 
startStop.addEventListener('click' , function()
{
    if(running)
    {
        stopInterval();
        running=false;
        currentStartStop=undefined;
    }
    else if(currentStartStop==undefined)
    {
        running=true;
        currentStartStop=setInterval(startClock,1000)
    }
    
});

//calling the reset
reset.addEventListener('click',function()
{
    console.log(inbreak)
    if(!inbreak)
    {
        console.log('reset clicked');
        timeLeftmm.innerHTML=sessionLen.innerHTML;
        timeLeftss.innerHTML='00'
        stopInterval();
        running=false;
        currentStartStop=undefined;
    }
}
);

// increment the session
sessionInc.addEventListener('click' ,function(){
    let curLen=parseInt(sessionLen.innerHTML)
    curLen=curLen%60;
    sessionLen.innerHTML=curLen+1;
    timeLeftmm.innerHTML=sessionLen.innerHTML;
    
})
// decrement the session
sessionDec.addEventListener('click' ,function(){
    let curLen=parseInt(sessionLen.innerHTML)
    if(curLen==1) sessionLen.innerHTML=60
    if(curLen>1) sessionLen.innerHTML=curLen-1;
    timeLeftmm.innerHTML=sessionLen.innerHTML;
    
})

// increment break len
breakInc.addEventListener('click' ,function(){
    let curLen=parseInt(breakLen.innerHTML)
    curLen=curLen%30;
    breakLen.innerHTML=curLen+1;
    breakLeftmm.innerHTML=breakLen.innerHTML
})

// decrement break len
breakDec.addEventListener('click' ,function(){
    let curLen=parseInt(breakLen.innerHTML)
    if(curLen==1) breakLen.innerHTML=30
    if(curLen>1) breakLen.innerHTML=curLen-1;
    breakLeftmm.innerHTML=breakLen.innerHTML;
});
function stopInterval()
{
    clearInterval(currentStartStop)
}