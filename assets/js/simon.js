var ans=new Array;
var input=new Array;
var col=["c1","c2","c3","c4"];
var len=1,i=0;
var heading=document.getElementById("lev");
var b1=document.getElementById("c1");
var b2=document.getElementById("c2");
var b3=document.getElementById("c3");
var b4=document.getElementById("c4");
var check=$("#check");
setTimeout(() => {check.fadeOut();},1000);
setTimeout(() => {check[0].innerHTML="correct";},2000);
//creating array as answer

function create(){
    heading.innerHTML="LEVEL: "+len +" of Simon's Game";
    if(len==1){
        ans[len-1]=Math.ceil(Math.random()*1000)%4;
        console.log(ans);
    }
    else{
        ans[len-1]=Math.ceil(Math.random()*1000)%4;
        console.log(ans);
    }
    //fading in and out next element of the sequence
    var id;
    id=ans[len-1]+1;
    console.log(id);
    $("#c"+id).fadeOut().fadeIn();
    i=0;
}
//reading inputs
b1.onclick=function(){
    var flag=0;
    input[i]=0;
    // console.log(i);
    if(input[i]!==ans[i] && i<len){
        alert("GAME OVER");
        i=0;
        len=1;
        ans=[];
        input=[];
        flag=1;
        create();
    }
    if(flag==0)
        i++;
    if(i==len && flag==0){
        i=0;
        //alert("correct");
        check.fadeIn().fadeOut();
        input=[];
        len++;
        create();
    }
};
b2.onclick=function(){
    var flag=0;
    input[i]=1;
    //console.log(i);
    if(input[i]!==ans[i] && i<len){
        alert("GAME OVER");
        i=0;
        len=1;
        input=[];
        ans=[];
        flag=1;
        create();
    }
    if(flag==0)
        i++;
    if(i==len && flag==0){
        i=0;
        //alert("correct");
        check.fadeIn().fadeOut();
        input=[];
        len++;
        create();
    }
};
b3.onclick=function(){
    var flag=0;
    input[i]=2;
    console.log(i);
    if(input[i]!==ans[i] && i<len){
        alert("GAME OVER");
        i=0;
        input=[];
        ans=[];
        len=1;
        flag=1;
        create();
    }
    if(flag==0)
        i++;
    if(i==len && flag==0){
        i=0;
        //alert("correct");
        check.fadeIn().fadeOut();
        input=[];
        len++;
        create();
    }
};
b4.onclick=function(){
    var flag=0;
    input[i]=3;
    //console.log(i);
    if(input[i]!==ans[i] && i<len){
        alert("GAME OVER");
        i=0;
        input=[];
        ans=[];
        len=1;
        flag=1;
        create();
    }
    if(flag==0)
        i++;
    if(i==len&&flag==0){
        i=0;
        //alert("correct");
        check.fadeIn().fadeOut();
        input=[];
        len++;
        create();
    }
};

//executed on loading of the screen
onload=create();