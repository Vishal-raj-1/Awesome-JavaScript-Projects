function webfaculty()
{ var t=document.getElementById('table1');
      if( document.getElementsByClassName("faculty")[0].textContent==="Generate Data"){
     var faculty={
      student:[]
}
faculty.student.push({'name':'Simarpreet Singh','batch':'A5','RollNo':'2K19/CO/97','CGPA':'9.0'})
faculty.student.push({'name':'Aryan Rana','batch':'A5','RollNo':'2K19/CO/97','CGPA':'8.5'})
faculty.student.push({'name':'Rishabh Singh','batch':'A5','RollNo':'2K19/CO/97','CGPA':'8.6'})
faculty.student.push({'name':'Sanchit','batch':'A5','RollNo':'2K19/CO/97','CGPA':'8.5'}) 

for(var i=0;i<faculty.student.length;++i){
t.innerHTML+='<tr><td>'+faculty.student[i].name+'</td>'+'<td>'+faculty.student[i].batch+'</td>'+'<td>'+faculty.student[i].RollNo+'</td><td>'+faculty.student[i].CGPA+'</td></tr>'
}
t.disabled=true;
document.getElementsByClassName("faculty")[0].textContent="hide data";
}else{
     for(let i=0;i<=4;i++)
     {if(i!=0)
     {t.innerHTML=" ";
} 
     t.innerHTML='<tr><td>'+"Name"+'</td>'+'<td>'+"Batch"+'</td>'+'<td>'+"RollNo"+'</td><td>'+"CGPA"+'</td></tr>'
     
     
} document.getElementsByClassName("faculty")[0].textContent="Generate Data";
}

}
function webstudent()
{ var t=document.getElementById('table2');
      if( document.getElementsByClassName("student")[0].textContent==="Generate Data Student"){
     var webstudent={
      student:[]
}
webstudent.student.push({'name':'Ritik Gupta','batch':'A2','RollNo':'2K19/SE/99','CGPA':'7.2'})
webstudent.student.push({'name':'Riya Bansal','batch':'A2','RollNo':'2K19/SE/101','CGPA':'7.9'})
webstudent.student.push({'name':'Abheek Kaushal','batch':'A5','RollNo':'2K20/CO/97','CGPA':' '})
webstudent.student.push({'name':'Harshit Aggarwal','batch':'A5','RollNo':'2K19/CO/97','CGPA':'8.5'}) 
webstudent.student.push({'name':'Deepanshu Tamta','batch':'A2','RollNo':'2K19/SE/99','CGPA':'7.2'})
webstudent.student.push({'name':'Kushagra Kesarwani','batch':'A2','RollNo':'2K19/IT/101','CGPA':'8.2'})
webstudent.student.push({'name':'Naveen Yadav','batch':'A5','RollNo':'2K19/IT/97','CGPA':'7'})
webstudent.student.push({'name':'Rishav Sinha','batch':'A6','RollNo':'2K19/CO/97','CGPA':'8.5'})
webstudent.student.push({'name':'Sohil Khan','batch':'A5','RollNo':'2K19/CO/97','CGPA':'8.5'})
webstudent.student.push({'name':'Shashank Negi','batch':'A5','RollNo':'2K19/CO/97','CGPA':'8.5'})
webstudent.student.push({'name':'Abhishek Kashyap','batch':'A5','RollNo':'2K19/CO/97','CGPA':'8.5'})
webstudent.student.push({'name':'Yash Prasad','batch':'A5','RollNo':'2K19/CO/97','CGPA':'8.5'}) 

for(var i=0;i<webstudent.student.length;++i){
     t.innerHTML+='<tr><td>'+webstudent.student[i].name+'</td>'+'<td>'+webstudent.student[i].batch+'</td>'+'<td>'+webstudent.student[i].RollNo+'</td><td>'+webstudent.student[i].CGPA+'</td></tr>'                         }
t.disabled=true;
document.getElementsByClassName("student")[0].textContent="hide data";
}else{
     for(let i=0;i<=12;i++)
     {if(i!=0)
     {t.innerHTML=" ";
} 
     t.innerHTML='<tr><td>'+"Name"+'</td>'+'<td>'+"Batch"+'</td>'+'<td>'+"RollNo"+'</td><td>'+"CGPA"+'</td></tr>'
     
     
} document.getElementsByClassName("student")[0].textContent="Generate Data Student";
}

}        
