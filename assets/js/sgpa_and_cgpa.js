let credits = [];
let gradepoints = [];

function sgpaResult(){

    let all_gradepoints = Array.from(document.querySelectorAll(".course")); 
   
    
all_gradepoints.forEach((node) =>{
    if (node.value == ''){
        gradepoints.push(0);
     }
     else{
     gradepoints.push(node.value);
     }
    
});


 let all_credits = Array.from(document.querySelectorAll(".credits")); 

all_credits.forEach((node) =>{
    if (node.value == ''){
        credits.push(0);
     }
     else{
     credits.push(node.value);
     }
    
});

 let total_credits = 0;
 let sgpa_sum=0;
 for(let i=0; i<8;i++){
     sgpa_sum = sgpa_sum + (gradepoints[i]*credits[i]);
     total_credits = total_credits + parseInt(credits[i]);
 }
 let totalsgpa = sgpa_sum/total_credits;
 let sgpa=totalsgpa.toPrecision(3);
 document.querySelector('.sgpa_result h3').innerHTML=`Your SGPA is equal to : ${sgpa}`
}

function sgpaRefresh() {

    document.getElementById("gp1").value="";
    document.getElementById("gp2").value="";
    document.getElementById("gp3").value="";
    document.getElementById("gp4").value="";
    document.getElementById("gp5").value="";
    document.getElementById("gp6").value="";
    document.getElementById("gp7").value="";
    document.getElementById("gp8").value="";

    document.getElementById("c1").value="";
    document.getElementById("c2").value="";
    document.getElementById("c3").value="";
    document.getElementById("c4").value="";
    document.getElementById("c5").value="";
    document.getElementById("c6").value="";
    document.getElementById("c7").value="";
    document.getElementById("c8").value="";

    document.querySelector('.sgpa_result h3').innerHTML=`Your SGPA is equal to :`;

    //window.location.reload(true);
    location.reload();
}




function cgpaResult(){
   let o_cgpa= document.getElementById("ocgpa").value;
    let p_tc= document.getElementById("ptc").value;
    let n_sgpa = document.getElementById("nsgpa").value;
   let t_c = document.getElementById("tc").value;

   let total = (parseFloat((o_cgpa*p_tc))+parseFloat((n_sgpa*t_c)))/(parseInt(p_tc)+parseInt(t_c));
   let cgpa = total.toPrecision(3);
   document.querySelector('.cgpa_result h3').innerHTML=`Your CGPA is equal to : ${cgpa}`;
   
}

function cgpaRefresh() {

    document.getElementById("ocgpa").value="";
    document.getElementById("ptc").value="";
    document.getElementById("nsgpa").value="";
    document.getElementById("tc").value="";
   

    document.querySelector('.cgpa_result h3').innerHTML=`Your CGPA is equal to :`;

    //window.location.reload(true);
    location.reload();
}