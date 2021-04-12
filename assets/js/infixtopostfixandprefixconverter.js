var stackarr=[];
var topp=-1;

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
    infixval= document.getElementById("infixvalue").value;
    

    for(var i=0;i<infixval.length;i++)
    {
        var el=infixval[i];
        if(operator(el))
        {
            if (el ==')') {
                while (stackarr[topp] != "(") {
                  postfix[temp++] = pop();
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
                }
                push(el);
            }
        }
        else{
            postfix[temp++]=el;
        }

        
    }
    while(stackarr[topp]!='@')
    {
        postfix[temp++]=pop();
    }
    var st="";
    for(var i=0;i<postfix.length;i++)st+=postfix[i];
   document.getElementById("text1").innerHTML=st;
 }
 function InfixtoPrefix()
{
    var prefix=[];
    var temp=0;
    push('@');
    infixval= document.getElementById("infixvalue").value;

    for(var i=infixval.length-1;i>=0;i--)
    {
        var el=infixval[i];
        if(operator(el))
        {
            if (el =='(') {
                while (stackarr[topp] != ")") {
                  prefix[temp++] = pop();
                }
          pop();
            }
            else if(el==')')
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
                     prefix[temp++]=pop();
                }
                push(el);
            }
        }
        else{
            prefix[temp++]=el;
        }

        
    }
    while(stackarr[topp]!='@')
    {
        prefix[temp++]=pop();
    }
    var st="";
    for(var i=prefix.length-1;i>=0;i--)st+=prefix[i];
   document.getElementById("text2").innerHTML=st;
 }
 
 