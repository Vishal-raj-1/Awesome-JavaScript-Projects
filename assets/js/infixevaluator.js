var stackarr=[];
var topp=-1;
var evalstack=[];

function postfixevaluator(evalst)
{
    eval=evalst.split("$");
    console.log(eval);
   for(var i=0;i<eval.length-1;i++)
   {
       if(!operator(eval[i]))
       {
           push(eval[i]);
       }
       else
       {
           var op1=parseInt(pop());
           var op2=parseInt(pop());
           
           if(eval[i]=="+")
           {
               push(op2+op1);
           }
           else if(eval[i]=="-")
           {
               push(op2-op1);
           }
           else if(eval[i]=="*")
           {
               push(op2*op1);
           }
           else
           {
               push(op2/op1);
           }
       }
   }
   document.getElementById("text").innerHTML=(pop());
}

function push(e)
{
   topp++;
   stackarr[topp]=e;
}

function pop()
{
    if(topp==-1)
    return 0;
    else
    {
        var popped_ele=stackarr[topp];
        topp--;
        return popped_ele;
    }
}

function operator(op)
{
    if(op=='+' || op=='-' || op=='^' || op=='*' || op=='/' || op=='(' || op==')')
    {
        return true;
    }
    else
    return false;
}

function precedency(pre)
{
    if(pre=='@' || pre=='(' || pre==')')
    {
        return 1;
    }
    else if(pre=='+' || pre=='-')
    {
        return 2;
    }
    else if (pre=='/' || pre=='*')
    {
        return 3;
    }
    else if(pre=='^')
    {
        return 4;
    }
    else
    return 0;
}


function InfixtoPostfix()
{
    var postfix=[];
    var temp=0;
    push('@');
    infixstring= document.getElementById("infixvalue").value;
    var infixval=[];
    var temp2="";
    for(var i=0;i<infixstring.length;i++)
    {
        if(operator(infixstring[i]))
        {
            infixval.push(temp2);
            infixval.push(infixstring[i]);
            temp2="";
        }
        else temp2+=infixstring[i];
    }
    if(temp2!=="")
    {
        infixval.push(temp2);
    }
   
    for(var i=0;i<infixval.length;i++)
    {
        var el=infixval[i];
        if(operator(el))
        {
            if (el ==')') {
                while (stackarr[topp] != "(") {
                  postfix[temp++] = pop();
                  postfix[temp++]="$";
                }
          pop();
            }
            else if(el=='(')
            {
                push(el);
            }

            else if(precedency(el)>precedency(stackarr[topp]))
            {
                push(el);
            }
            else
            {
                while(precedency(el)<=precedency(stackarr[topp])&&topp>-1)
                {
                     postfix[temp++]=pop();
                     postfix[temp++]="$"
                }
                push(el);
            }
        }
        else{
            postfix[temp++]=el;
            postfix[temp++]="$"
        }

        
    }
    while(stackarr[topp]!='@')
    {
        postfix[temp++]=pop();
        postfix[temp++]="$"
    }
    var st="";
    
    for(var i=0;i<postfix.length;i++)
    {
        st+=postfix[i];
    }
   postfixevaluator(st);
 }
 