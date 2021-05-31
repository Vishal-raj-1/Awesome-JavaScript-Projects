const btn = document.getElementById('contact-submit')
const a = document.getElementById('name1')
const b = document.getElementById('email')
const c = document.getElementById('msg')


btn.addEventListener('click', function () {
    var center = document.getElementById('center')
    center.style.visibility = 'hidden';
    console.log("hh");
    document.querySelector(".thankyou").style.display = "block";
    
})


