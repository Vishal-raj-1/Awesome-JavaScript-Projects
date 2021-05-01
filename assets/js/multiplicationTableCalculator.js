function getInfo(){
    var input=document.getElementById('input').value;
    var output=document.getElementById("output");
    var clear=document.getElementById("clear");
    var textarea=document.getElementById("input");
    if(input<=0 || input>1000){
        alert("Please enter the valid number or the number between 1 and 1000");
    }
    else{
        output.innerHTML=" ";
        output.style.display="block";
        for(var i=1;i<=10;i++){
            var result=`${input} * ${i} = ${input*i} <hr>`;
            output.innerHTML+=result;
        }
        textarea.value=" ";
        clear.style.display="block";
    }
};
function clearTheTable(){
    var output=document.getElementById("output");
    var clear=document.getElementById("clear");
    clear.style.display="none";
    output.style.display="none";
};