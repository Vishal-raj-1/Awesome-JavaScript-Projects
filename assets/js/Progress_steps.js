let progress = document.getElementById('progress');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let circles = document.querySelectorAll('.circle');

let CurrentActive = 1
next.addEventListener('click', () => {
    CurrentActive++
    if(CurrentActive > circles.length){
        CurrentActive = circles.length
    }
    update();
})

prev.addEventListener('click', () => {
    CurrentActive--
    if(CurrentActive < 1 ){
        CurrentActive = 1
    }
    update()
})
let idx;
function update(){
    circles.forEach((circle , idx) => {
        if(idx < CurrentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1)/(circles.length - 1))*100 + '%'



if(CurrentActive == 1){
    prev.disabled = true;
}
else if(CurrentActive == circles.length){
    next.disabled = true;
}
else{
    next.disabled = false;
    prev.disabled = false;
}
}