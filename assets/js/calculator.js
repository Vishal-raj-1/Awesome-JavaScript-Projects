function designate(a){
    forms.display.value += a;
}


function del(){
    var war = forms.display.value;
    forms.display.value = war.substring(0, war.length-1);
}


function ac(){
    forms.display.value = "";
}


function equal(){
    forms.display.value = eval(forms.display.value);
}

function sqrt(){

    var qwerty = forms.display.value;

    var store = Math.sqrt(qwerty);
    forms.display.value = store;
}

function per(){
    var percentage = forms.display.value;
    var temp = eval(percentage);
    var anpercent = temp*100 + "%";
    forms.display.value = anpercent;
}

function  fact(){
    var n = forms.display.value;
    let answer = 1;
    if (n == 0 || n == 1){
      answer = 1;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      
    } 
    
    forms.display.value = answer;
}



function rad(){
    var radian = forms.display.value;
    var radia = (radian*180)/3.14;
    forms.display.value = radia;
}

function square(){
    var squared = forms.display.value;
    var redeeemd = Math.pow(squared,2);
    forms.display.value = redeeemd;
}

function logarithm(){
    var logarit = forms.display.value;
    var legit = Math.log10(logarit);
    forms.display.value = legit;
}

function lan(){
    var logarit = forms.display.value;
    var legit = Math.log(logarit);
    forms.display.value = legit;
}

function pi(){
    var pai = forms.display.value;
    var paai = pai * 3.141;
    forms.display.value = paai;
}

function sine(){
    var trignometry = forms.display.value;
    var result = Math.sin(trignometry);
    forms.display.value = result;

}

function cos(){
    var trignometry = forms.display.value;
    var result = Math.cos(trignometry);
    forms.display.value = result;
    
}
function tan(){
    var trignometry = forms.display.value;
    var result = Math.tan(trignometry);
    forms.display.value = result;
    
}