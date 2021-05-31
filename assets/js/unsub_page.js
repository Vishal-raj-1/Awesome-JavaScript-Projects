
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function setWindowSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
};
window.addEventListener('resize', setWindowSize);

var eyes = document.querySelectorAll(".eyes");
var cursorPos = { x: 0, y: 0 };

window.addEventListener("mousemove", mousemove);
window.addEventListener("touchmove", touchmove);

function mousemove(e) {
  cursorPos = {
    x: e.clientX,
    y: e.clientY
  }; 
	if (!clicked) {
	  eyes.forEach(function(el) {
		  eyeFollow.init(el);
	  })
	}
}
function touchmove(e) {
  cursorPos = {
    x: e.targetTouches[0].offsetX,
    y: e.targetTouches[0].offsetY
  }; 
	if (!clicked) {
	  eyes.forEach(function(el) {
		  eyeFollow.init(el);
	  })
	}
}

var eyeFollow = (function() {

	function getOffset(el) {
		console.log(el)
  		el = el.getBoundingClientRect();
		return {
			x: el.left + window.scrollX,
			y: el.top + window.scrollY
		};
	}
	
	function moveEye(eye) {
		var eyeOffset = getOffset(eye);
		var bBox = eye.getBBox();
		var centerX = eyeOffset.x + bBox.width / 2;
		var centerY = eyeOffset.y + bBox.height / 2;
		var percentTop = Math.round((cursorPos.y - centerY) * 100 / windowHeight);
		var percentLeft = Math.round((cursorPos.x - centerX) * 100 / windowWidth);
		eye.style.transform = `translate(${percentLeft/5}px, ${ percentTop/5}px)`
	}
	
	return {
    init: (el) => {
      moveEye(el);
    }
  };
})();



var clicked, cancelled;
var animate = (function() {

	var select = function(el) {
		 return document.getElementById(el);
	};
	var svg = select("svg"),
		 blob1 = select("blob-1"),
		 blob3 = select("blob-3"),
		 envelope = select("envelope"),
		 eyeGroup = select("eye-group"),
		 paper = select("paper-group"),
		 mouth = select("mouth"),
		 mouthHappy = select("mouth-happy"),
		 mouthScared = select("mouth-scared"),
		 mouthSad = select("mouth-sad"),
		 eyeLeft = MorphSVGPlugin.convertToPath(select("eye-left")),
		 eyeRight = MorphSVGPlugin.convertToPath(select("eye-right")),
		 eyeLaughingLeft = select("eye-laughing-left"),
		 eyeLaughingRight = select("eye-laughing-right"),
		 eyebrowHappyLeft = select("eyebrow-happy-left"),
		 eyebrowHappyRight = select("eyebrow-happy-right"),
		 eyebrowSadLeft = select("eyebrow-sad-left"),
		 eyebrowSadRight = select("eyebrow-sad-right"),
		 mouthWorry = select("mouth-worry"),
		 openMouth = select("open-mouth"),
		 tongue = select("tongue"),
		 unsubscribeButton = select("unsubscribe"),
		 cancelButton = select("cancel"),
		 goBackButton = select("go-back");
	
	var confettis = document.querySelectorAll('#confetti > *');
	
	var title = document.querySelector('.title'),
		 subtitle = document.querySelector('.subtitle');
	
	var masterTl = new TimelineMax();

	unsubscribeButton.addEventListener("mouseover", willUnsubscribe);
	cancelButton.addEventListener("mouseover", willCancel);
	unsubscribeButton.addEventListener("touchstart", willUnsubscribe);
	cancelButton.addEventListener("touchstart", willCancel);
	unsubscribeButton.addEventListener("click", hasUnsubscribed);
	cancelButton.addEventListener("click", hasCancelled);
	unsubscribeButton.addEventListener("mouseout", initFace);
	cancelButton.addEventListener("mouseout", initFace);
	unsubscribeButton.addEventListener("touchleave", initFace);
	cancelButton.addEventListener("touchleave", initFace);
	goBackButton.addEventListener("click", goBack);

	function animateBlob() {
		var speed = 10;
		var tlBlob = new TimelineMax({repeat:-1});
		tlBlob.to(blob1, speed, {morphSVG:blob3, ease: Power0.easeNone})
				.to(blob1, speed, {morphSVG:blob1, ease: Power0.easeNone});
	}

	function makeConfetti() {
		var speed = 3;
		var confettiTl = new TimelineMax({ paused:true });
			confettis.forEach(function(el) {
				var angle = random(0, 360);
				var delay = random(0, 6);
				var opacity = random(0.5, 1);
				var tl = new TimelineMax({delay: delay});
				var posX = Math.cos(angle * Math.PI / 180) * 250;
				var posY = Math.sin(angle * Math.PI / 180) * 250;
				TweenMax.set(el,{autoAlpha:1});
				tl.to(el, speed, {x:posX, y: posY, ease:Power0.easeOut, rotation:360, repeat:-1});
				confettiTl.add(tl, 0);
			});
		return confettiTl;
	}
	
	//Envelope animations
	function happyJump() {
		var speed = 0.15;
		var happyJumpTl = new TimelineMax({repeat:-1, repeatDelay: 1, delay:0.5, paused:true});
		happyJumpTl.to(envelope, speed, {y:-20, ease: Power0.easeNone})
		.to(envelope, speed, {y:0, ease: Power0.easeNone})
		.to(envelope, speed, {y:-10, ease: Power0.easeNone})
		.to(envelope, speed, {y:0, ease: Power0.easeNone})
		.to(envelope, speed, {y:-5, ease: Power0.easeNone})
		.to(envelope, speed, {y:0, ease: Power0.easeNone});
		return happyJumpTl;
	}

	 function shake() {
		var speed = 0.1;
		var shakeTl = new TimelineMax({repeat:-1, paused:true});
		shakeTl.to(envelope, speed, {x:-1, ease: Power0.easeNone})
		.to(envelope, speed, {x:1, ease: Power0.easeNone});
		return shakeTl;
	 }

	var doJump = happyJump();
	var doShake = shake();
	var addConfetti = makeConfetti();

	function willUnsubscribe() {
		masterTl.add(doShake.play());
		var speed = 0.2;
		TweenMax.to(mouthWorry, speed, {morphSVG:mouthScared, ease: Power0.easeNone});
		TweenMax.to(paper, speed, {y:15});
		TweenMax.to(eyeGroup, speed, {y:5});
		TweenMax.to(mouth, speed, {y:5});
		TweenMax.to(eyebrowSadLeft, speed, {y:5});
		TweenMax.to(eyebrowSadRight, speed, {y:5});
	};

	function willCancel() {
		var speed = 0.2;
		TweenMax.to(mouthWorry, speed, {morphSVG:mouthHappy, ease: Power0.easeNone});
		TweenMax.to(eyebrowSadLeft, speed, {morphSVG:eyebrowHappyLeft, ease: Power0.easeNone});
		TweenMax.to(eyebrowSadRight, speed, {morphSVG:eyebrowHappyRight, ease: Power0.easeNone});
		TweenMax.to(mouth, speed, {y:10});
		TweenMax.to(eyebrowSadLeft, speed, {y:-10});
		TweenMax.to(eyebrowSadRight, speed, {y:-10});
	};


	function hasUnsubscribed() {
		var speed = 0.2;
		TweenMax.to(mouthWorry, speed, {morphSVG:mouthSad, ease: Power0.easeNone});
		TweenMax.to(eyeGroup, speed, {y:15});
		TweenMax.to(eyebrowSadLeft, speed, {y:10});
		TweenMax.to(eyebrowSadRight, speed, {y:10});
		title.innerHTML = "We are sad to see you go!";
		subtitle.innerHTML = "You have been unsubscribed and will no longer hear from us.";
		unsubscribeButton.style.display = 'none';
		cancelButton.style.display = 'none';
		goBackButton.style.display = 'block';
		clicked = true;
		masterTl.remove(doShake);
	};

	function hasCancelled() {
		
		masterTl.add(doJump.play());
		masterTl.add(addConfetti.play());
		
		var speed = 0.1;
		TweenMax.to(eyeLeft, speed, {morphSVG:eyeLaughingLeft, ease: Power0.easeNone});
		TweenMax.to(eyeLeft, speed, {stroke:'#543093', fill:'none', ease: Power0.easeNone});
		TweenMax.to(eyeRight, speed, {morphSVG:eyeLaughingRight, ease: Power0.easeNone});
		TweenMax.to(eyeRight, speed, {stroke:'#543093', fill:'none', ease: Power0.easeNone});
		TweenMax.to(mouthWorry, speed, {morphSVG:openMouth, ease: Power0.easeNone});
		TweenMax.to(mouthWorry, speed, {fill:'#543093', stroke:'none', ease: Power0.easeNone});
		TweenMax.to(tongue, speed, {css:{display:'block'}, ease: Power0.easeNone});
		TweenMax.to(eyeGroup, speed, {y:10});
		TweenMax.to(eyebrowSadLeft, speed, {y:0});
		TweenMax.to(eyebrowSadRight, speed, {y:0});
		title.innerHTML = "Thanks for staying with us!";
		subtitle.innerHTML = "You will continue to receive our weekly newsletter. Yay!";
		unsubscribeButton.style.display = 'none';
		cancelButton.style.display = 'none';
		goBackButton.style.display = 'block';
		clicked = true;
		cancelled = true;
	};

	function initFace() {
		masterTl.remove(doShake);
		if (!clicked) {
		var speed = 0.1;

		TweenMax.to(mouthWorry, speed, {morphSVG:mouthWorry, ease: Power0.easeNone});
		TweenMax.to(mouthWorry, speed, {fill:'none', stroke:'#543093', ease: Power0.easeNone})
		TweenMax.to(tongue, speed, {css:{display:'none'}, ease: Power0.easeNone})
		TweenMax.to(eyebrowSadLeft, speed, {morphSVG:eyebrowSadLeft, ease: Power0.easeNone});
		TweenMax.to(eyebrowSadRight, speed, {morphSVG:eyebrowSadRight, ease: Power0.easeNone});
		TweenMax.to(paper, speed, {y:0});
		TweenMax.to(eyeGroup, speed, {y:0});
		TweenMax.to(mouth, speed, {y:0});
		TweenMax.to(eyebrowSadLeft, speed, {y:0});
		TweenMax.to(eyebrowSadRight, speed, {y:0});
		TweenMax.to(eyeLeft, speed, {morphSVG:eyeLeft, ease: Power0.easeNone});
		TweenMax.to(eyeLeft, speed, {stroke:'none', fill:'#543093', ease: Power0.easeNone});
		TweenMax.to(eyeRight, speed, {morphSVG:eyeRight, ease: Power0.easeNone});
		TweenMax.to(eyeRight, speed, {stroke:'none', fill:'#543093', ease: Power0.easeNone});
		}
	};

	function goBack() {
		clicked = false;
		cancelled = false;
		initAnimations();
		masterTl.remove(doJump);
		masterTl.remove(addConfetti);
		confettis.forEach(function(el) {
			TweenMax.set(el, {x:0, y: 0, rotation:0});
		});
		title.innerHTML = "Do you want to unsubscribe?";
		subtitle.innerHTML = "If you unsubscribe, you will stop receiving our weekly newsletter.";
		unsubscribeButton.style.display = 'block';
		cancelButton.style.display = 'block';
		goBackButton.style.display = 'none';

	};

	function initAnimations() {
		clicked = false;
		initFace();
		animateBlob();
	}

	return {
		init: () => {
			initAnimations();
		}
	};
})();

document.addEventListener("DOMContentLoaded", animate.init());





function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}
