const plannerBtn= document.querySelector('#planner_btn')
const plannerDiv=document.querySelector('#planner')
const aimTextArea=document.querySelector('#aim_bar')
const dropDownDiv=document.querySelector('#session_displayer')
var ul_lst_dropdown=document.querySelector('ul-list-dropdown')
const reviewBtn=document.querySelector('review-btn')
var taskCompletedBtn;
var curSpanEle;
var cursessionDisplayList;
var sessionDetails=[]
var curListLenCount=0;
var curlistEleCount=0;

// font changing
const font1=document.querySelector('#font-1')
const font2=document.querySelector('#font-2')
const font3=document.querySelector('#font-3')
const body=document.body




if(true)
{
    font1.addEventListener('click', ()=>
    {
        body.style.fontFamily ="'Bitter', serif";

    });

    font2.addEventListener('click', ()=>
    {
        body.style.fontFamily = " 'Courgette', cursive " ;
    });

    font3.addEventListener('click', ()=>
    {
        body.style.fontFamily =" 'Lato', sans-serif " ;

    });
}



// theme change
const theme1=document.querySelector('#theme-1')

const theme1Style=
{
    name:'theme1',
    colorPrimary:"#4ecca3",
    colorSecondary:"#393e46",
    back_1:"#eeeeee",
    back_2:"#232931",
}

const theme2=document.querySelector('#theme-2')
const theme2Style=
{
    name:'theme2',
    colorPrimary:"#e48257",
    colorSecondary:"#3a6351",
    back_1:"#f2edd7",
    back_2:"#393232",
};

const theme3=document.querySelector('#theme-3')

const theme3Style=
{
    name:'theme3',
    colorPrimary:"#f5a25d",
    colorSecondary:"#389393",
    back_1:"#ebebeb",
    back_2:"#393e46",
};

const themechanger=(theme)=>
{
    // console.log('clicked theme')
    let sec=theme.colorSecondary;
    let prim=theme.colorPrimary;
    let back1=theme.back_1;
    let back2=theme.back_2;

    document.documentElement.style .setProperty('--color-background-2',back2)
    document.documentElement.style .setProperty('--color-background-1',back1)
    document.documentElement.style .setProperty('--color-primary',prim)
    document.documentElement.style .setProperty('--color-secondary',sec)
};

if(theme1)
theme1.addEventListener('click',()=>themechanger(theme1Style))
if(theme2)
theme2.addEventListener('click',()=>themechanger(theme2Style))
if(theme3)
theme3.addEventListener('click',()=>themechanger(theme3Style))
if(plannerBtn)
{
    plannerBtn.addEventListener("click" ,()=>
    {
        curlistEleCount=0;
        sessionDetails.push(...aimTextArea.value.split('-'))
        aimTextArea.value=""
    }
    );
;}

const displaySessionDetails= ()=>
{
    cursessionDisplayList=document.querySelector(`#session_displayer__list-${curListLenCount}`)
    for(let ind in sessionDetails)
    {
        let content =sessionDetails[ind]
        console.log(content)
        if(content.length>=1)
        {
            curlistEleCount+=1
            cursessionDisplayList.innerHTML+=
            `<li id="session_displayer__list-${curListLenCount}_ele-${curlistEleCount}">
                <span id="session_displayer__list-${curListLenCount}_ele-${curlistEleCount}-txt" > ${content} </span>
                    <img class='task_completed_btn-img' src="https://img.icons8.com/plasticine/100/000000/task-completed.png"/>
                
            </li>`
        }
    }
    curlistEleCount+=1
    cursessionDisplayList.innerHTML+=
    `<li class='session_duriation' id="session_displayer__list-${curListLenCount}_ele-${curlistEleCount}">
                <span id="session_displayer__list-${curListLenCount}_ele-${curlistEleCount}-txt" > Session Duriation: ${sessionLen.innerHTML} </span>  
            </li>`
    sessionDetails=[]
}
const displayPlanner= ()=>
{
    plannerDiv.style.visibility='visible';

}
