function show(data){
    var txt=document.getElementById('text');
    var img=document.getElementById('big_img');
    txt.innerHTML=data.alt;
    img.src=data.src;
    img.parentElement.style.display="block";

}