function handlesearch(){
    var statuscode = document.getElementById("inputcode").value;
    if(!statuscode){
      alert("Enter Status Code to Search");
    }
    else{
      const url = "https://http.cat/"+statuscode;
      document.getElementById("outputimg").src = url;
      document.getElementById("inputcode").value="";
      document.getElementById("inputcode").focus();
    }
  }
  