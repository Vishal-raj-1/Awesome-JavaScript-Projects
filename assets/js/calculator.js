const expression = document.getElementById('screen');

const num=[];
for(let i=0;i<10;i++ ){
	num[i]=document.getElementById(i);
}
const mult=document.getElementById('*');
const divide=document.getElementById('/');
const add=document.getElementById('+');
const sub=document.getElementById('-');
const equal=document.getElementById('Equal');
const dot=document.getElementById('Dot');
const del=document.getElementById('Del');
const ac=document.getElementById('AC');
const leftBrack=document.getElementById('(');
const rightBrack= document.getElementById(')');


let inputContainerText = '';
let noNumber = false;
let tempNum;
let tempNumLength;
let operator = '';
let lastAnswer = '';

function isNumber(value) {
    return value != '' && !Number.isNaN(Number(value)) || value == '.';
}

function isArithmeticOperator(value) {
    return value == '+' || value == '-' || value == '/' || value == '*';
}


function resetAllCalculation() {
    expression.value = '';
    inputContainerText = '';
    noNumber = false;
    tempNum = '';
    tempNumLength = 0;
    operator = '';
}

function calculateExpression(exp) {
    console.log('input: ', exp.join(''));
    let i, isOperator = 0, next=false;
    for(i=0; i<exp.length; i++) {
        if(!isNumber(exp[i]) && exp[i] != '-' && exp[i] != '+') {
            
            // add parent
             if(exp[i] != '(') {
                if(isNumber(exp[i+1]) || exp[i+1] == '-') {


                    //console.log('add (', i+1);
                    exp.splice(i+1, 0, '(');
                    //console.log('test', exp.join(''), i);

                    isOperator ++;
                    i++;
                    next = true;
                }                
            }
            if(isOperator > 0 && !next) {

                exp.splice(i, 0, ')');
                isOperator --;
                i++;               
            }
            next = false;
        }

        
        if(exp[i-1] == '(') {
            if(exp[i-2] == '!') {
                exp.splice(i-1, 0, '*');
                i++;                  
            }
        }
        else if(exp[i-1] == ')') {
            if(exp[i-2] == '!') {
                exp.splice(i, 0, '*');
                i++;                  
            }
        }
    }
    if(isOperator > 0) {
        for(let j=0; j<isOperator; j++) {
            exp[i++] = ')';
        }
    }

    exp = exp.join('');
    // exp = exp.split('!').join('f()');
    // exp = exp.split('C(').join('C(,');
    // exp = exp.split('P(').join('P(,');




    let movedValue = []; 

    for(let p=0; p<exp.length; p++) {
       }


    console.log('exp:', exp);
    try {
        expression.value = eval(exp.toString());
        console.log('ans:', expression.value);
        if(expression.value && isNumber(expression.value)) {
            expression.value = expression.value;
            inputContainerText = expression.value;
            lastAnswer = expression.value;
            noNumber = true;
        }
        else {
            resetAllCalculation();
            expression.value = 'Syntax ERROR';
        }
    }
    catch(err) {
        resetAllCalculation();
        expression.value = 'Syntax ERROR';
    }
    expression.focus();
}



function deleteLastOne() {
    inputContainerText = inputContainerText.slice(0,-1);
    expression.value = inputContainerText;
}



function addKeyToInputContainer(keyText){
	inputContainerText+=keyText;
	expression.value=inputContainerText;
	noNumber =false;
}

function keydownHandler(event){
	const inputKey = parseInt(event.key);
    if(inputKey >= 0 && inputKey <= 9) { // 0~9
        num[inputKey].className = 'active';
        if(noNumber) {
            inputContainerText = '';
            operator = '';
        }
        addKeyToInputContainer(event.key);
	}
	else if(event.key == '*' || event.key == 'x' || event.key == 'X') { // multi
        mult.className = 'active';
        addKeyToInputContainer('*');
	}
	else if(event.key == '/') { // divide
        divide.className = 'active';
        addKeyToInputContainer('/');
	}
	else if(event.key == '+') { // add
        add.className = 'active';
        addKeyToInputContainer('+');
	}
	else if(event.key == '-') { // subtract
        sub.className = 'active';
        addKeyToInputContainer('-');
	}
	else if(event.key == '.') {// dot
        dot.className = 'active';
        addKeyToInputContainer('.');
	}
	else if(event.key == 'Enter') {// enter
        equal.className = 'active';
        calculateExpression(expression.value.split(""));
	}
	else if(event.key == 'Escape') {// esc, ac
        ac.className = 'active';
        resetAllCalculation();
	}
	else if(event.key =='Backspace') { // backspace, del
        del.className = 'active';
        deleteLastOne();
	}
	else if(event.key == '(') {
        leftBrack.className = 'active';
        addKeyToInputContainer('(');
    }
    else if(event.key == ')') {
        rightBrack.className = 'active';
        addKeyToInputContainer(')');
    }
}

function keyupHandler(event) {
    const inputKey = parseInt(event.key);
    if(inputKey >= 0 && inputKey <= 9) { // 0~9
		num[inputKey].className = 'primaryButton';
    }
    else if(event.key == '*' || event.key == 'x' || event.key == 'X') { // multi
		mult.className = 'primaryButton'
    }
    else if(event.key == '/') { // divide
		divide.className = 'primaryButton'
    }
    else if(event.key == '+') { // add
		add.className = 'primaryButton'
    }
    else if(event.key == '-') { // subtract
		sub.className = 'primaryButton'
    }
    else if(event.key == '.') {// dot
		dot.className = 'primaryButton'
    } 
    else if(event.key == 'Enter') {// enter
		equal.className = 'primaryButton'
    }
    else if(event.key == 'Escape') {// esc, ac
		ac.className = 'primaryButton';
    }
    else if(event.key =='Backspace') { // backspace, del
		del.className = 'primaryButton';
    }
    else if(event.key =='(') {
        leftBrack.className = 'primaryButton';
    }
    else if(event.key ==')') {
        rightBrack.className = 'primaryButton';
    }
}
function ansKeyHandler(event) {
    if(lastAnswer != '') {
        if(isNumber(inputContainerText[inputContainerText.length-1])) {
            inputContainerText = '';
            operator = '';
        }
        addKeyToInputContainer('Equal');
        noNumber = true;
    }
}

function numKeyHandler(event) {
    if(noNumber) {
        inputContainerText = '';
        operator = '';
    }
    addKeyToInputContainer(event.target.id);
}

window.addEventListener('keydown', keydownHandler);
window.addEventListener('keyup', keyupHandler);
for(let i=0; i<10; i++) {
    num[i].addEventListener('click', numKeyHandler);
}
mult.addEventListener('click', (event) => {
    addKeyToInputContainer('*');
});
divide.addEventListener('click', (event) => {
    addKeyToInputContainer('/');
});
add.addEventListener('click', (event) => {
    addKeyToInputContainer('+');
});
sub.addEventListener('click', (event) => {
    addKeyToInputContainer('-');
});
dot.addEventListener('click', (event) => {
    addKeyToInputContainer('.');
});


equal.addEventListener('click', (event) => {
    calculateExpression(expression.value.split(""));
});
ac.addEventListener('click', resetAllCalculation);
del.addEventListener('click', deleteLastOne);
leftBrack.addEventListener('click', (event) => {
    addKeyToInputContainer('(');
});

rightBrack.addEventListener('click', (event) => {
    addKeyToInputContainer(')');
});
