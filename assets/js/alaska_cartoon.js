function justExisting() {
    happyTale();
    flickering();
    plateAction();
    addListeners();
  }
  // Variables
  let canContinueMoveCollar = true;
  let isNight = false;
  let houseActionActivated = false;
  let isInsideHouse = true;
  
  // Actions
  // --
  function happyTale() {
    var TALE = ".tale";
  
    var tl = gsap.timeline({ repeat: -1 });
    tl.to(TALE, { rotation: 40, transformOrigin: "50% 50%", duration: 0.5 })
      .to(TALE, { rotation: -20, transformOrigin: "50% 50%", duration: 0.5 })
      .to(TALE, { rotation: 0, transformOrigin: "50% 50%", duration: 0.1 });
  }
  
  function flickering() {
    var EYELID_LEFT = ".eyelid-left";
    var EYELID_RIGHT = ".eyelid-right";
  
    var tl2 = gsap.timeline({ repeat: -1, repeatDelay: 4 });
    tl2
      .fromTo(
        EYELID_RIGHT,
        { visibility: "hidden" },
        { visibility: "visible", duration: 0.1, ease: "linear" }
      )
      .fromTo(
        EYELID_RIGHT,
        { visibility: "visible" },
        { visibility: "hidden", duration: 0.1, ease: "linear" }
      )
      .fromTo(
        EYELID_LEFT,
        { visibility: "hidden" },
        { visibility: "visible", duration: 0.1, ease: "linear" },
        "-=0.2"
      )
      .fromTo(
        EYELID_LEFT,
        { visibility: "visible" },
        { visibility: "hidden", duration: 0.1, ease: "linear" },
        "-=0.1"
      );
  }
  
  function letOutTougue() {
    var TOUGUE = ".tongue";
  
    var tl3 = gsap.timeline({ repeat: 0, repeatDelay: 5 });
    tl3
      .fromTo(
        TOUGUE,
        { visibility: "visible", x: 10, y: -37 },
        { visibility: "visible", duration: 0.1, x: 0, y: 0, ease: "linear" }
      )
      .fromTo(
        TOUGUE,
        { visibility: "visible", x: 0, y: 0 },
        {
          visibility: "visible",
          delay: 1,
          duration: 0.1,
          x: 10,
          y: -37,
          ease: "linear"
        }
      );
  }
  
  function plateAction() {
    let plate = document.getElementsByClassName("alaska-plate")[0];
    plate.addEventListener("mouseenter", () => {
      if (!canContinueMoveCollar) return;
      canContinueMoveCollar = false;
  
      let PLATE = ".alaska-plate";
  
      let tl = gsap.timeline({ repeat: 0 });
      tl.to(PLATE, {
        rotation: 40,
        transformOrigin: "center top",
        duration: 0.5,
        ease: "power.out"
      })
        .to(PLATE, {
          rotation: -30,
          transformOrigin: "center top",
          duration: 0.5,
          ease: "power.out"
        })
        .to(PLATE, {
          rotation: 20,
          transformOrigin: "center top",
          duration: 0.5,
          ease: "power.out"
        })
        .to(PLATE, {
          rotation: -10,
          transformOrigin: "center top",
          duration: 0.5,
          ease: "power.out"
        })
        .to(PLATE, {
          rotation: 0,
          transformOrigin: "center top",
          duration: 0.2,
          ease: "power.out"
        });
  
      tl.eventCallback("onComplete", () => {
        canContinueMoveCollar = true;
      });
    });
  }
  
  function loveyouAction() {
    let HEART = ".heart";
    let EAR = ".ear";
    var tl = gsap.timeline({ repeat: 0 });
    var tl2 = gsap.timeline({ repeat: 0 });
  
    tl.fromTo(
      HEART,
      {
        visibility: "visible",
        y: 40,
        duration: 0.1,
        fill: "#00000000",
        stroke: "#00000000",
        scale: 0,
        transformOrigin: "50% 50%"
      },
      {
        visibility: "visible",
        y: 0,
        duration: 0.25,
        fill: "#AE1919",
        stroke: "#EA4949",
        scale: 1,
        transformOrigin: "50% 50%"
      }
    )
      .to(HEART, { visibility: "visible", duration: 1 })
      .to(HEART, { visibility: "hidden" });
  
    tl2
      .to(EAR, {
        duration: 0.25,
        transformOrigin: "50% 50%",
        rotation: 10,
        ease: "linear"
      })
      .to(EAR, {
        duration: 0.25,
        transformOrigin: "50% 50%",
        rotation: -10,
        ease: "linear"
      })
      .to(EAR, {
        duration: 0.1,
        transformOrigin: "50% 50%",
        rotation: 0,
        ease: "linear"
      })
      .to(EAR, {
        duration: 0.25,
        transformOrigin: "50% 50%",
        rotation: 10,
        ease: "linear"
      })
      .to(EAR, {
        duration: 0.25,
        transformOrigin: "50% 50%",
        rotation: -10,
        ease: "linear"
      })
      .to(EAR, {
        duration: 0.1,
        transformOrigin: "50% 50%",
        rotation: 0,
        ease: "linear"
      });
  }
  
  function changeDayOrNight() {
    let SHADOW_ROOM = "#shadow-room";
    let SHADOW = ".shadow";
  
    let tl = gsap.timeline({ repeat: 0 });
    let tl2 = gsap.timeline({ repeat: 0 });
  
    if (isNight) {
      tl.fromTo(SHADOW_ROOM, { opacity: 0.47 }, { opacity: 0.01, duration: 0.4 });
      tl2.fromTo(SHADOW, { opacity: 1 }, { opacity: 0.2, duration: 0.4 });
      document.getElementById("turn-day").innerText = "🌜";
      isNight = false;
    } else {
      tl.fromTo(SHADOW_ROOM, { opacity: 0.01 }, { opacity: 0.47, duration: 0.4 });
      tl2.fromTo(SHADOW, { opacity: 0.2 }, { opacity: 1, duration: 0.4 });
      document.getElementById("turn-day").innerText = "🌞";
      isNight = true;
    }
  
    noHouseDayNight();
  }
  
  function removeBgHouse() {
    if (houseActionActivated) return;
  
    houseActionActivated = true;
    let SHADOW_ROOM = "#shadow-room";
    let REC_BACK = "#recuardro-back";
    let PARED_BACK = "#pared-back";
    let ESCALERAS = "#escaleras";
    let BARANDAL = "#barandal";
    let TECHO_MADERA = "#techo-madera";
    let MASETA = "#maseta";
    let PLANTA = "#Planta";
    let PARED_IZQ = "#pared-izq";
    let PARED_DER = "#pared-der";
    let PARED_CEN = "#pared-centro";
    let SUELO = "#suelo";
  
    let tl = gsap.timeline({ repeat: 0 });
  
    if (isInsideHouse) {
      tl.to(TECHO_MADERA, { y: -200, duration: 0.5, ease: "power4.out" })
        .to(SHADOW_ROOM, { visibility: "hidden" }, "-=1")
        .to(PARED_CEN, { y: -600, duration: 0.5, ease: "power4.out" }, "-=.2")
  
        .to(PARED_IZQ, { x: -1000, duration: 0.6, ease: "power4.out" }, "-=.6")
        .to(ESCALERAS, { x: -1000, duration: 0.6, ease: "power4.out" }, "-=.5")
  
        .to(SUELO, { y: 1000, duration: 0.6, ease: "power4.out" }, "-=.4")
        .to(MASETA, { y: 1000, duration: 0.6, ease: "power4.out" }, "-=.5")
        .to(PLANTA, { y: 1000, duration: 0.6, ease: "power4.out" }, "-=.3")
  
        .to(PARED_DER, { x: 1000, duration: 0.6, ease: "power4.out" }, "-=.4")
        .to(BARANDAL, { x: 1000, duration: 0.6, ease: "power4.out" }, "-=.4")
  
        .to(REC_BACK, { y: -1000, duration: 0.6, ease: "power4.out" }, "-=.3")
        .to(PARED_BACK, { y: -1000, duration: 0.6, ease: "power4.out" }, "-=.6");
  
      setTimeout(() => {
        isInsideHouse = false;
        noHouseDayNight();
      }, 600);
      setTimeout(() => {
        document.getElementById("house-bg").innerText = "🏡";
      }, 1800);
    } else {
      tl.to(REC_BACK, { y: 0, duration: 0.6, ease: "elastic" })
        .to(PARED_BACK, { y: 0, duration: 0.6, ease: "elastic" }, "-=.1")
  
        .to(BARANDAL, { x: 0, duration: 0.6, ease: "power4.in" }, "-=.4")
        .to(PARED_DER, { x: 0, duration: 0.6, ease: "power4.in" }, "-=.4")
  
        .to(PLANTA, { y: 0, duration: 0.6, ease: "power4.in" }, "-=.4")
        .to(MASETA, { y: 0, duration: 0.6, ease: "power4.in" }, "-=.5")
        .to(SUELO, { y: 0, duration: 0.6, ease: "power4.in" }, "-=.3")
  
        .to(ESCALERAS, { x: 0, duration: 0.6, ease: "power4.in" }, "-=.6")
        .to(PARED_IZQ, { x: 0, duration: 0.6, ease: "power4.in" }, "-=.5")
  
        .to(PARED_CEN, { y: 0, duration: 0.5, ease: "elastic" }, "-=.4")
        .to(TECHO_MADERA, { y: 0, duration: 0.5, ease: "elastic" }, "-=.1")
        .to(SHADOW_ROOM, { visibility: "visible" }, "-=.1");
  
      setTimeout(() => {
        document.getElementsByTagName("body")[0].classList.remove("day");
        document.getElementsByTagName("body")[0].classList.remove("night");
  
        document.getElementsByTagName("body")[0].classList.add("white");
      }, 1000);
      setTimeout(() => {
        document.getElementById("house-bg").innerText = "🌌";
        document.getElementsByTagName("body")[0].classList.remove("white");
        isInsideHouse = true;
      }, 1800);
    }
  
    setTimeout(() => {
      houseActionActivated = false;
    }, 2000);
  }
  
  function noHouseDayNight() {
    if (isInsideHouse) return;
  
    if (isNight) {
      document.getElementsByTagName("body")[0].classList.remove("day");
      document.getElementsByTagName("body")[0].classList.add("night");
    } else {
      document.getElementsByTagName("body")[0].classList.remove("night");
      document.getElementsByTagName("body")[0].classList.add("day");
    }
  }
  
  function addListeners() {
    document.getElementById("toungue").addEventListener("click", letOutTougue);
    document.getElementById("loveyou").addEventListener("click", loveyouAction);
    document
      .getElementById("turn-day")
      .addEventListener("click", changeDayOrNight);
    document.getElementById("house-bg").addEventListener("click", removeBgHouse);
  }
  
  document.addEventListener("DOMContentLoaded", justExisting);
  
