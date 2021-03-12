
        // console.log(number2);
        function and(){
            var number1=document.getElementById("value1").value;
            var number2=document.getElementById("value2").value;
            // alert(number1)
        //     console.log(number1)
        // console.log(number2)
            var ans=parseInt(number1) & parseInt(number2);
            // console.log(ans)
            document.getElementById("answer").value=ans;
        }
        function or(){
            let number1=document.getElementById("value1").value;
            let number2=document.getElementById("value2").value;
            // alert(number1)
        //     console.log(number1)
        // console.log(number2)
            let ans=parseInt(number1) | parseInt(number2);
            // console.log(ans)
            document.getElementById("answer").value=ans;
        }
        function xor(){
            let number1=document.getElementById("value1").value;
            let number2=document.getElementById("value2").value;
            // alert(number1)
        //     console.log(number1)
        // console.log(number2)
            let ans=parseInt(number1) ^ parseInt(number2);
            // console.log(ans)
            document.getElementById("answer").value=ans;
        }