var select = function (s) {
    return document.querySelector(s);
  },
  selectAll = function (s) {
    return document.querySelectorAll(s);
  },
  animationWindow = select("#animationWindow"),
  animData = {
    wrapper: animationWindow,
    animType: "svg",
    loop: true,
    prerender: true,
    autoplay: true,
    path: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/play_fill_loader.json",
  },
  anim;

anim = bodymovin.loadAnimation(animData);
anim.addEventListener("DOMLoaded", onDOMLoaded);
anim.setSpeed(1);

function onDOMLoaded(e) {
  anim.addEventListener("complete", function () {});
}

ScrubBodymovinTimeline(anim);
