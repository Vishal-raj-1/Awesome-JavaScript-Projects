

$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 500;
    function hidePreloader() {
    var preloader = $('#spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

$(document).ready(function()
 {
    if ($('.typed').length) {
        var typed=new Typed('.typed', {
              
              strings:["The great collection of JavaScript projects,just for you!!!"],
              loop: true,
              typeSpeed: 100,
              backSpeed: 50,
              backDelay: 2000
            });}
    
    
});

/******* Form validation *******/

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
function checkform()
{
	if (fname.value.length == 0)
	{
		// something is wrong
		alert('There is a problem with the first field');
		return false;
	}
	else if (lname.value.length == 0)
	{
		// something else is wrong
		alert('There is a problem with last name');
		return false;
	} else if(email.value.length == 0) {
        alert("There is a problem with email");
    }

	return true;
}

/* Form validation ends */

let menuBar = document.getElementById('menuBar');
let menus = document.getElementById('menu');
let menuCloses = document.getElementById('menuClose');

function menu (){
    menus.style.right= '0';
    menuCloses.style.display= 'inherit';
}
function menuClose(){
    menus.style.right="-280px";
    menuCloses.style.display= 'none';
}

window.onscroll = function()
{
    if(pageYOffset >= 90)
    {
        document.getElementById('goToTop').style.visibility="visible";
    }else
    {
        document.getElementById('goToTop').style.visibility="hidden";
    }
};