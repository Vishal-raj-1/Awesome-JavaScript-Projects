//variables
let cards;
let counter=[];
let l;
let win=0;
let j=1;
let moves=0;
let index=-1;
let match=2;
let loopSize2=0, loopSize4=0;
let anime=[
    "../assets/Images/makeMatchGame/anime/1.png",
    "../assets/Images/makeMatchGame/anime/2.png",
    "../assets/Images/makeMatchGame/anime/3.png",
    "../assets/Images/makeMatchGame/anime/4.png",
    "../assets/Images/makeMatchGame/anime/5.png",
    "../assets/Images/makeMatchGame/anime/6.png",
    "../assets/Images/makeMatchGame/anime/7.png",
    "../assets/Images/makeMatchGame/anime/8.png",
    "../assets/Images/makeMatchGame/anime/9.png",
    "../assets/Images/makeMatchGame/anime/10.png",
    "../assets/Images/makeMatchGame/anime/11.png",
    "../assets/Images/makeMatchGame/anime/12.png",
    "../assets/Images/makeMatchGame/anime/13.png",
    "../assets/Images/makeMatchGame/anime/14.png",
    "../assets/Images/makeMatchGame/anime/15.png",
    "../assets/Images/makeMatchGame/anime/16.png",
    "../assets/Images/makeMatchGame/anime/17.png",
    "../assets/Images/makeMatchGame/anime/18.png",
    "../assets/Images/makeMatchGame/anime/19.jpg",
    "../assets/Images/makeMatchGame/anime/20.png",
    "../assets/Images/makeMatchGame/anime/21.jpg",
    "../assets/Images/makeMatchGame/anime/22.png",
    "../assets/Images/makeMatchGame/anime/23.png",
    "../assets/Images/makeMatchGame/anime/24.jpg" 
];
let shinchan=[
    "../assets/Images/makeMatchGame/shinchan/1.jpg",
    "../assets/Images/makeMatchGame/shinchan/2.png",
    "../assets/Images/makeMatchGame/shinchan/3.jpg",
    "../assets/Images/makeMatchGame/shinchan/4.jpg",
    "../assets/Images/makeMatchGame/shinchan/5.png",
    "../assets/Images/makeMatchGame/shinchan/6.jpg",
    "../assets/Images/makeMatchGame/shinchan/7.jpg",
    "../assets/Images/makeMatchGame/shinchan/8.jpg",
    "../assets/Images/makeMatchGame/shinchan/9.png",
    "../assets/Images/makeMatchGame/shinchan/10.png",
    "../assets/Images/makeMatchGame/shinchan/11.png",
    "../assets/Images/makeMatchGame/shinchan/12.png",
    "../assets/Images/makeMatchGame/shinchan/13.jpg",
    "../assets/Images/makeMatchGame/shinchan/14.jpg",
    "../assets/Images/makeMatchGame/shinchan/15.jpg",
    "../assets/Images/makeMatchGame/shinchan/16.png",
    "../assets/Images/makeMatchGame/shinchan/17.png",
    "../assets/Images/makeMatchGame/shinchan/18.png",
    "../assets/Images/makeMatchGame/shinchan/19.jpg",
    "../assets/Images/makeMatchGame/shinchan/20.jpg",
    "../assets/Images/makeMatchGame/shinchan/21.jpg",
    "../assets/Images/makeMatchGame/shinchan/22.png",
    "../assets/Images/makeMatchGame/shinchan/23.png",
    "../assets/Images/makeMatchGame/shinchan/24.png" 
];
let shadesOfGrey=[
    "../assets/Images/makeMatchGame/shadesOfGrey/1.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/2.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/3.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/4.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/5.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/6.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/7.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/8.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/9.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/10.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/11.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/12.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/13.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/14.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/15.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/16.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/17.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/18.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/19.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/20.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/21.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/22.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/23.jpg",
    "../assets/Images/makeMatchGame/shadesOfGrey/24.jpg" 
];
let color=[
    "../assets/Images/makeMatchGame/color/1.png",
    "../assets/Images/makeMatchGame/color/2.jpg",
    "../assets/Images/makeMatchGame/color/3.jpg",
    "../assets/Images/makeMatchGame/color/4.jpg",
    "../assets/Images/makeMatchGame/color/5.jpg",
    "../assets/Images/makeMatchGame/color/6.png",
    "../assets/Images/makeMatchGame/color/7.png",
    "../assets/Images/makeMatchGame/color/8.jpg",
    "../assets/Images/makeMatchGame/color/9.jpg",
    "../assets/Images/makeMatchGame/color/10.jpg",
    "../assets/Images/makeMatchGame/color/11.jpg",
    "../assets/Images/makeMatchGame/color/12.png",
    "../assets/Images/makeMatchGame/color/13.jpg",
    "../assets/Images/makeMatchGame/color/14.jpg",
    "../assets/Images/makeMatchGame/color/15.jpg",
    "../assets/Images/makeMatchGame/color/16.jpg",
    "../assets/Images/makeMatchGame/color/17.jpg",
    "../assets/Images/makeMatchGame/color/18.jpg",
    "../assets/Images/makeMatchGame/color/19.jpg",
    "../assets/Images/makeMatchGame/color/20.jpg",
    "../assets/Images/makeMatchGame/color/21.jpg",
    "../assets/Images/makeMatchGame/color/22.jpg",
    "../assets/Images/makeMatchGame/color/23.jpg",
    "../assets/Images/makeMatchGame/color/24.jpg" 
];
let books=[
    "../assets/Images/makeMatchGame/books/1.jpg",
    "../assets/Images/makeMatchGame/books/2.jpg",
    "../assets/Images/makeMatchGame/books/3.jpg",
    "../assets/Images/makeMatchGame/books/4.jpg",
    "../assets/Images/makeMatchGame/books/5.jpg",
    "../assets/Images/makeMatchGame/books/6.jpg",
    "../assets/Images/makeMatchGame/books/7.jpg",
    "../assets/Images/makeMatchGame/books/8.jpg",
    "../assets/Images/makeMatchGame/books/9.jpg",
    "../assets/Images/makeMatchGame/books/10.jpg",
    "../assets/Images/makeMatchGame/books/11.jpg",
    "../assets/Images/makeMatchGame/books/12.jpg",
    "../assets/Images/makeMatchGame/books/13.jpg",
    "../assets/Images/makeMatchGame/books/14.jpg",
    "../assets/Images/makeMatchGame/books/15.jpg",
    "../assets/Images/makeMatchGame/books/16.png",
    "../assets/Images/makeMatchGame/books/17.jpg",
    "../assets/Images/makeMatchGame/books/18.jpg",
    "../assets/Images/makeMatchGame/books/19.jpg",
    "../assets/Images/makeMatchGame/books/20.jpg",
    "../assets/Images/makeMatchGame/books/21.jpg",
    "../assets/Images/makeMatchGame/books/22.jpg",
    "../assets/Images/makeMatchGame/books/23.jpg",
    "../assets/Images/makeMatchGame/books/24.jpg" 
];
let webSeries=[
    "../assets/Images/makeMatchGame/webSeries/1.png",
    "../assets/Images/makeMatchGame/webSeries/2.jpg",
    "../../assets/Images/makeMatchGame/webSeries/3.png",
    "../assets/Images/makeMatchGame/webSeries/4.jpg",
    "../assets/Images/makeMatchGame/webSeries/5.jpg",
    "../assets/Images/makeMatchGame/webSeries/6.png",
    "../assets/Images/makeMatchGame/webSeries/7.jpg",
    "../assets/Images/makeMatchGame/webSeries/8.jpg",
    "../assets/Images/makeMatchGame/webSeries/9.jpg",
    "../assets/Images/makeMatchGame/webSeries/10.jpg",
    "../assets/Images/makeMatchGame/webSeries/11.jpg",
    "../assets/Images/makeMatchGame/webSeries/12.jpg",
    "../assets/Images/makeMatchGame/webSeries/13.jpg",
    "../assets/Images/makeMatchGame/webSeries/14.jpg",
    "../assets/Images/makeMatchGame/webSeries/15.jpg",
    "../assets/Images/makeMatchGame/webSeries/16.jpg",
    "../assets/Images/makeMatchGame/webSeries/17.jpg",
    "../assets/Images/makeMatchGame/webSeries/18.jpg",
    "../assets/Images/makeMatchGame/webSeries/19.jpg",
    "../assets/Images/makeMatchGame/webSeries/20.jpg",
    "../assets/Images/makeMatchGame/webSeries/21.jpg",
    "../assets/Images/makeMatchGame/webSeries/22.jpg",
    "../assets/Images/makeMatchGame/webSeries/23.jpg",
    "../assets/Images/makeMatchGame/webSeries/24.jpg" 
];



//query selector
let cardDiv;
const playground=document.querySelector('.playground');
const sizeButton=document.querySelectorAll('.game-size');
const sameCardButton=document.querySelectorAll('.card-match > button');
const designButton=document.querySelectorAll(".card-design > button > img");



//event listeners
sizeButton.forEach(button =>  button.addEventListener('click', addCards));  

sameCardButton.forEach(carding => carding.addEventListener('click', cardo));   

designButton.forEach(design => design.addEventListener('click', addDesign));  



//functions
function addCards(event)
{
    if(!event.target.classList.contains("disable") && !event.target.classList.contains("selected") ){
     event.target.classList.add("selected");   
    if(event.target.classList.contains("one")){
        index=0; loopSize2=8;}
    else if(event.target.classList.contains("two")){
        index=1; loopSize2=12;}
    else if(event.target.classList.contains("three")){
        index=2; loopSize2=16; loopSize4=8;}
    else{
        index=3;
        loopSize2=24; loopSize4=12;}
    if(index<3){
        for(let i=0;i<4;i++){
           const rowDiv =document.createElement("div");
           rowDiv.classList.add("row");
           for(let j=0;j<(2*(index+2));j++)
           {
                const cardDiv=document.createElement("div");
               cardDiv.classList.add("card" );
               rowDiv.appendChild(cardDiv);
           }
           playground.appendChild(rowDiv);
        }
    }
    else{
    for(let i=0;i<6;i++){
        const rowDiv =document.createElement("div");
        rowDiv.classList.add("row");
        for(let j=0;j<8;j++)
        {
            const cardDiv=document.createElement("div");
            cardDiv.classList.add("card" );
            rowDiv.appendChild(cardDiv);
        }
        playground.appendChild(rowDiv);
     }
    }
    sizeButton.forEach(button => {
        if(!button.classList.contains("selected"))
            button.classList.add("disable");
    })

      cards=[...document.querySelectorAll('.card')];      
    }    
};

function cardo(event)
{
    if(index==-1){
    alert("select anyone game dimension first- 4X4, 4X6, 4X8, 6X8"); 
    return;}
    const clas = event.target.className;
    if(clas!="disable" && clas!="selected"){
    if(clas=="four-same"&& (index==2 || index==3)){
        match=4;
        event.target.classList.add("selected"); 
        document.getElementsByClassName("two-same")[0].classList.add("disable"); }
    else{ 
        match=2;
        document.getElementsByClassName("four-same")[0].classList.add("disable");}
    if(clas=="four-same"&& (index==0 || index==1))
        alert("4 card game is for 4X8 and 6X8");
    }

};

function addDesign(event){
    if(index==-1){
     alert("select anyone game dimension first- 4X4, 4X6, 4X8, 6X8");
     return;}
    if(!event.target.classList.contains("disable")){
        const target =event.target.className;
        let pic=[];
        if(target=="shinchan"){
            pic =[...shinchan];}
         else
          if(target=="shadesOfGrey"){
            pic =[...shadesOfGrey];}
            else
             if (target=="color"){
                pic =[...color];}
              else
               if(target=="anime"){
                   pic =[...anime];}
                else 
                  if(target=="books"){
                      pic =[...books];}
                    else {
                        pic =[...webSeries];}
        event.target.classList.add("selected");

        designButton.forEach(button => {
            if(!button.classList.contains("selected"))
            button.classList.add("disabled");
        })
        if(match==2)
        {
                //randomizing design
            for(let i=0 ; i<loopSize2 ; i++ )
            {
                const indexA = parseInt(Math.random() * cards.length);
                const cardA = cards[indexA];
                cards.splice(indexA, 1);
                const a =document.createElement("img");
                a.src=pic[i];
                cardA.appendChild(a);
                cardA.classList.add(pic[i]);

                const indexB = parseInt(Math.random() * cards.length);
                const cardB = cards[indexB];
                cards.splice(indexB, 1);
                const b =document.createElement("img");
                b.src=pic[i];
                cardB.appendChild(b);
                cardB.classList.add(pic[i]);

                a.style.visibility="hidden";
                b.style.visibility="hidden";
            }  
        }
        else
        {
            for(let i=0;i<loopSize4;i++ )
            {
                const indexA = parseInt(Math.random() * cards.length);
                const cardA = cards[indexA];
                cards.splice(indexA, 1);
                const a =document.createElement("img");
                a.src=pic[i];
                cardA.appendChild(a);
                a.style.visibility="hidden";
                cardA.classList.add(pic[i]);

                const indexB = parseInt(Math.random() * cards.length);
                const cardB = cards[indexB];
                cards.splice(indexB, 1);
                const b =document.createElement("img");
                b.src=pic[i];
                cardB.appendChild(b);
                b.style.visibility="hidden";
                cardB.classList.add(pic[i]);

                const indexC = parseInt(Math.random() * cards.length);
                const cardC = cards[indexC];
                cards.splice(indexC, 1);
                const c =document.createElement("img");
                c.src=pic[i];
                cardC.appendChild(c);
                c.style.visibility="hidden";
                cardC.classList.add(pic[i]);

                const indexD = parseInt(Math.random() * cards.length);
                const cardD = cards[indexD];
                cards.splice(indexD, 1);
                const d =document.createElement("img");
                d.src=pic[i];
                cardD.appendChild(d);
                d.style.visibility="hidden";
                cardD.classList.add(pic[i]);
            }  

        }
        cardDiv= document.querySelectorAll(".card");
        cardDiv.forEach(box => 
                box.addEventListener('click', showDesign));
    }
};

function showDesign(event)
{
    while(j==1)
    {
        d1=parseInt(Date.now());
        j=0;
    }
    box=event.target;
    let x=box.childNodes[0];
    if(x.style.visibility==="hidden"){
        x.style.visibility="visible";
        box.setAttribute('a','1');
        counter.push(box);
        l=counter.length;
    }
    setTimeout(() => {if(match==2&&l==2)
        check(counter);
        if(match==4&& l==4)
        check(counter);}, 300);
};
function check(counter){
    document.getElementById("mov").innerHTML = " "+(++moves);
    
    if(match==2 && counter[0].className!==counter[1].className){
        counter.forEach(box => {
            box.childNodes[0].style.visibility="hidden";
            box.removeAttribute('a');

    })}
    if(match==4 && (counter[0].className!==counter[1].className || counter[1].className!==counter[2].className || counter[2].className!==counter[3].className)){
        counter.forEach(box => {
            box.childNodes[0].style.visibility="hidden";
            box.removeAttribute('a');
        });
        }
    cardDiv.forEach(card => {
        if(card.hasAttribute('a'))
            ++win;    
    });
    if(win==cardDiv.length){
    var d2=parseInt(Date.now());
       var time = getTime(d2-d1); 
        alert("Time Taken: "+time+"\nYou win : Press Play Again! ");}
    win=0;    
    counter.length=0;    
};
function getTime(duration){
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds ;
}

function playAgain(){
    location.reload();
}
function clos(){
    document.getElementById("instructions").style.display="none";
}
function opn(){
    document.getElementById("instructions").style.display="block";
}
