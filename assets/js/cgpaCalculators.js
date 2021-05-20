// onclick Event function call to get all input value.
document.querySelector('#btn_sub').addEventListener('click',() =>{
    // first input value get
    let first_gpa=document.querySelector('#first-gpa').value;
 // first input value [5% per] calculation
 let first_gpa_per=(first_gpa /100)*5;
 // first input final  value 
 let first_gpa_per_result=first_gpa_per.toPrecision(3);
 
 
 
 // two input value get
 let two_gpa=document.querySelector("#two-gpa").value;
 // two input value [5% per] calculation
 let two_gpa_per=(two_gpa / 100) * 5;
 // two input final  value 
 let two_gpa_per_result=two_gpa_per.toPrecision(3);
 
 
 // three input value get
 let three_gpa=document.querySelector("#three-gpa").value;
 // three input value [5% per] calculation
 let three_gpa_per=(three_gpa / 100) * 5;
 // three input final  value 
 let three_gpa_per_result=three_gpa_per.toPrecision(3);
 
 
 // four input value get
 let four_gpa=document.querySelector("#four-gpa").value;
 // four input value [10% per] calculation
 let four_gpa_per=(four_gpa / 100) * 10;
 // four input final  value 
 let four_gpa_per_result=four_gpa_per.toPrecision(3);
 
 
 // five input value get
 let five_gpa=document.querySelector("#five-gpa").value;
 // five input value [15% per] calculation
 let five_gpa_per=(five_gpa / 100) * 15;
 // five input final  value 
 let five_gpa_per_result=five_gpa_per.toPrecision(3);
 
 
 // six input value get
 let six_gpa=document.querySelector("#six-gpa").value;
 // six input value [20% per] calculation
 let six_gpa_per=(six_gpa / 100) * 20;
 // six input final  value 
 let six_gpa_per_result=six_gpa_per.toPrecision(3);
 
 // seven input value get
 let seven_gpa=document.querySelector("#seven-gpa").value;
 // seven input value [25% per] calculation
 let seven_gpa_per=(seven_gpa / 100) * 25;
 // seven input final  value 
 let seven_gpa_per_result=seven_gpa_per.toPrecision(3);
 
 // eight input value get
 let eight_gpa=document.querySelector("#eight-gpa").value;
 // eight input value [15% per] calculation
 let eight_gpa_per=(eight_gpa / 100) * 15;
 // eight input final  value 
 let eight_gpa_per_result=eight_gpa_per.toPrecision(3);
 
 
 // total final value sum 
 let total =
 parseFloat(first_gpa_per_result)+
 parseFloat(two_gpa_per_result)+
 parseFloat(three_gpa_per_result)+
 parseFloat(four_gpa_per_result)+
 parseFloat(five_gpa_per_result)+
 parseFloat(six_gpa_per_result)+
 parseFloat(seven_gpa_per_result)+
 parseFloat(eight_gpa_per_result);
 let total_cgpa=total.toPrecision(3);
 // total value show output
 document.querySelector('.cgpa_output h1').innerHTML=`TOTAL CGPA = ${total_cgpa}`
 })
 
 document.querySelector('#btn_re').addEventListener('click',() =>{
   document.querySelector('.cgpa_output h1').innerHTML=`TOTAL CGPA =`
   document.querySelector('#first-gpa').value='';
   document.querySelector('#two-gpa').value='';
   document.querySelector('#three-gpa').value='';
   document.querySelector('#four-gpa').value='';
   document.querySelector('#five-gpa').value='';
   document.querySelector('#six-gpa').value='';
   document.querySelector('#seven-gpa').value='';
   document.querySelector('#eight-gpa').value='';
 })
 // onclick Event function call reset all input and output value