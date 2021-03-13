function rotateScenes(){
    var scroll = window.pageYOffset,
        relPos = scroll / height,
        angle = 90 * relPos;
    
    if(scroll >= height){
      section1.style.transform = "rotateX(90deg)";
      section2.style.transform = "rotateX(0deg)";
      section3.style.transform = "rotateX(0deg)";
      section4.style.transform = "rotateX(0deg)";
  
    }
    if(angle<100)
    {
      section2.style.transformOrigin="top";
     
    }
    else
    {
      section2.style.transformOrigin="bottom";
      
    }
    if(angle>90)
    {
      section1.style.visibility="hidden";
    }
    else{
      section1.style.visibility="visible";
    }
    if(angle<116)
    {
      section3.style.visibility="hidden";
    }
    else
    {
      section3.style.visibility="visible";
    }
    if(angle>180)
    {
      section3.style.transformOrigin="bottom";
    }
    else{
      section3.style.transformOrigin="top";
    }
    if(angle>=224)
    {
      section4.style.visibility="visible";
    }
    else{
      section4.style.visibility="hidden";
    }
    section1.style.transform = "rotateX(" + (angle) + "deg)";
    section2.style.transform = "rotateX(" + (-90 + angle) + "deg)";
    section3.style.transform = "rotateX(" + (-180 + angle) + "deg)";
    section4.style.transform = "rotateX(" + (-270 + angle) + "deg)";
    
    section1.style.transform = "rotateX(" + (angle) + "deg)";
    console.log("Height ",height);
    console.log("Angle: ",angle)
    console.log("scroll ", scroll);
  }
  
  var section1 = document.querySelector("#top"),
      section2 = document.querySelector("#content"),
      section3 = document.querySelector("#content2"),
      section4 = document.querySelector("#content3"),
      height = window.innerHeight;
  window.addEventListener("scroll", rotateScenes);