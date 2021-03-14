

var start= document.getElementById("start_game_button");
var ball=document.getElementById("ball");
var flag=false;
var a=document.getElementById('rod1');
var b=document.getElementById('rod2');

start.addEventListener("click",function(){
   flag=true;
    document.getElementById("start_game").remove();
   func();


})
var top_value =40;
var left_value=600;
var top_value1=5;
var left_value1=5;
function func(){
    ball.style.position="relative";

    var id = setInterval(function(){ 


	ball.style.top=top_value+"px"; 
	ball.style.left=left_value+"px";  
	
	top_value+=top_value1;
	left_value+=left_value1;
	

	if((ball.offsetTop>screen.availHeight-130 || ball.offsetTop<10)){
		clearInterval(id);
		setTimeout(function(){ alert("GAME OVER! , Your score is "+i+" and maximum score till now is "+localStorage.getItem("maximum_score"));},500);
		setTimeout(function(){ location.reload();},500);
		
		
	}
	if(ball.offsetLeft>a.offsetLeft && ball.offsetLeft<a.offsetLeft+250 && ball.offsetTop+50>b.offsetTop){
		// bounce
		top_value1=-5;
	
	}
	if(ball.offsetLeft>a.offsetLeft && ball.offsetLeft<a.offsetLeft+250 && ball.offsetTop<a.offsetTop+25){
		// bounce
		top_value1=5;
	}
	if(ball.offsetLeft<=0){
		// bounce
		left_value1=5;
	
	}
	if(ball.offsetLeft>=screen.availWidth-60){
		// bounce
		left_value1=-5;
	}





	},20);
}
	
   

   



	var l = 500;

function move(event) {
	
	if(flag){
		
	if (event.keyCode==100 || event.keyCode==68){
		// Move rod right
		

			
		if (a.offsetLeft+280<screen.availWidth)
			l=l+20;
			

		}

if (event.keyCode==97 || event.keyCode==65){
		// Move rod left
		if (a.offsetLeft-20>0)
			l=l-20;
		 
			
		
		
}


	a.style.left=l+"px";

	a.style.transition="all 0.001s";
    b.style.left=l+"px";

	b.style.transition="all 0.001s";

}
}




a.style.position="relative";
    
	b.style.position="relative";
    b.style.top="570px";



document.addEventListener("keypress", move );
var i=0;
var max_score=0;
var id1 = setInterval(function(){
	if(flag){
	i++;
	document.getElementById("score").innerHTML="Your Score: "+"<br>"+i;
	if(i>max_score){
		max_score=i;
		

	}
}
	
	if(ball.offsetTop>screen.availHeight-130 || ball.offsetTop<10){
		clearInterval(id1);
		localStorage.setItem("maximum_score",max_score);
	}
},1000);

