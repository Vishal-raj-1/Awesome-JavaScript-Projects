//declaring variables for dom manipulation...
let quote=document.getElementById("quote");
let author=document.getElementById("author");
let btn=document.getElementById("btn");
let realdata="";
const getNewQuotes=()=>{
//for getting a random quote
 let rnum=Math.floor(Math.random() *20);
   quote.innerHTML=`" ${realdata[rnum].text} "`;
  ( realdata[rnum].author == null)? author.innerHTML=" - Unknown":
   author.innerHTML=`- ${realdata[rnum].author}`;
}
//function to get quotedata
const getQuote=async()=>{
    const api = "https://type.fit/api/quotes";
    try{
        let data=await fetch(api);
        realdata=await data.json();
getNewQuotes();
    }
    catch(error){
        alert("There is some error");
    }
};
  //onclick of button calling function getquote
btn.addEventListener("click",getQuote);
