
        //AND function
        function and(){
            var number1=document.getElementById("value1").value;
            var number2=document.getElementById("value2").value;
            var ans=parseInt(number1) & parseInt(number2);
        
            document.getElementById("answer").value=ans;
        }
        //OR function
        function or(){
            let number1=document.getElementById("value1").value;
            let number2=document.getElementById("value2").value;
            
            let ans=parseInt(number1) | parseInt(number2);
        
            document.getElementById("answer").value=ans;
        }
        //XOR function
        function xor(){
            let number1=document.getElementById("value1").value;
            let number2=document.getElementById("value2").value;
           
            let ans=parseInt(number1) ^ parseInt(number2);
         
            document.getElementById("answer").value=ans;
        }
