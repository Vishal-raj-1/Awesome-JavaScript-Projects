var stackarr=[];
var topp=-1;
var evalstack=[];

function prefixevaluator()
{
    evalst= document.getElementById("prefixvalue").value;
    eval=evalst.split(" ");
   for(var i=eval.length-1;i>=0;i--)
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
               push(op1+op2);
           }
           else if(eval[i]=="-")
           {
               push(op1-op2);
           }
           else if(eval[i]=="*")
           {
               push(op1*op2);
           }
           else
           {
               push(op1/op2);
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



 