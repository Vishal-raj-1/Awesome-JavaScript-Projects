//DOM Elements
const convertButton = document.querySelector('#convert-btn');
const convertForm = document.querySelector('#convert-form');
const numberInput = document.querySelector('#number');
const convertSelect = document.querySelector('#convert-select');
let choice;
const cardText = document.querySelector('.card-text')


numberInput.addEventListener('click',()=> {             //To Clear the input
    cardText.textContent='';
})


convertButton.addEventListener('click' , async function(e){
    e.preventDefault();
    clear();
    choice = convertSelect.value;
    let num = (numberInput.value);
    if(choice!=='GrayToBinary' && choice!=='BinaryToGray' ){
        window.alert("Choose the converter!"); 
    }
    if(invalidInput(num)){
        display(choice,num);   
    }
    numberInput.value='';
} )


function xor_c (a,b){                   //XOR Function
    return (a==b)?'0':'1';
}

function flip(c){                       //Function to Flip the bit
    return (c=='0') ? '1':'0';
}

function BinaryToGray(binary){          //Binary to Gray Function
binary = binary.split('');
let gray='';
gray += binary[0];
for(let i=1;i<binary.length;i++){
    gray+=xor_c(binary[i-1],binary[i]);
}
 return gray;
}

function GrayToBinary(gray){            //Gray to Binary Function
let binary='';
binary+=gray[0];
for(let i=1;i<gray.length;i++){
    if(gray[i]=='0')
        binary+=binary[i-1];
    else
        binary+=flip(binary[i-1]);
}
return binary;
}


function clear(){                       //Clear the input
    cardText.textContent='';
}

function display(choice,num){
    if(choice==='BinaryToGray'){
        let gray = BinaryToGray((num.toString()));
        cardText.innerHTML=`Binary Code: ${num} <br/> Gray Code: ${gray}`;
    }
    else if(choice==='GrayToBinary'){
        let binary = GrayToBinary((num.toString()));
        cardText.innerHTML=`Gray Code: ${num} <br/> Binary Code: ${binary}`;
    }
}


function invalidInput(input){                   //Function to check for invalid inputs
    let flag=true;
    inputStr=input.toString();
    if(input<0){
            flag=false;
            window.alert('Invalid input');
            return flag; 
    }
    for (let i=0 ;i<inputStr.length;i++){
        ch=inputStr.charAt(i)
        if(ch!='0' && ch!='1'){
            flag=false;
            window.alert('Invalid input');
            return flag; 
        }
    }
    return flag;
}