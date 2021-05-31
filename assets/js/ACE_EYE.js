(() => {
   const cnv = document.querySelector(`canvas`);
   const ctx = cnv.getContext(`2d`);
   let w, h;

   let eyes = [];
   let theta;

   function sizes() {
      w = cnv.width = innerWidth * 2;
      h = cnv.height = innerHeight * 2;
   }
   sizes();

   const mouse = {
      x: undefined,
      y: undefined
   }

   window.addEventListener('mousemove', (e)=> {
      mouse.x = e.x * 2
      mouse.y = e.y * 2
   })

   class Eye {
      constructor(x, y, radius) {
         this.x = x;
         this.y = y;
         this.radius = radius;
      }

      draw() {
         //eye
         ctx.beginPath()
         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
         ctx.fillStyle = 'red';
         ctx.fill();
         ctx.closePath();

         //get angle
         let dx = mouse.x - this.x;
         let dy = mouse.y - this.y;
         theta = Math.atan2(dy, dx)

         //iris
         let iris_x = this.x + Math.cos(theta) * this.radius / 10;
         let iris_y = this.y + Math.sin(theta) * this.radius / 10;
         let irisRadius = this.radius / 1.2;
         ctx.beginPath();
         ctx.arc(iris_x, iris_y, irisRadius, 0, 2 * Math.PI, true);
         ctx.fillStyle = 'white';
         ctx.fill();
         ctx.closePath()

         //pupil
         let pupilRadius = this.radius / 2.5;
         let pupil_x = this.x + Math.cos(theta) * this.radius / 1.9;
         let pupil_y = this.y + Math.sin(theta) * this.radius / 1.9;

         ctx.beginPath();
         ctx.arc(pupil_x, pupil_y, pupilRadius, 0, 2 * Math.PI, true);
         ctx.fillStyle = 'black';
         ctx.fill();
         ctx.closePath()

         //mouse
         ctx.beginPath();
         ctx.arc(mouse.x, mouse.y, 25, 0, Math.PI * 2, true)
         ctx.fillStyle = 'gold';
         ctx.fill();
         ctx.closePath()
      }

   }

   function init() {
      eyes = [];
      let overlapping = false;
      let numberOfEyes = 10;
      let protection = 100;
      let counter = 0;

      while (eyes.length < numberOfEyes && counter < protection) {
         let eye = {
            x: Math.random() * w,
            y: Math.random() * h,
            radius: Math.floor(Math.random() * 100) + 100
         }
         overlapping = false;

         for(let i = 0; i < eyes.length; i++) {
            let previousEye = eyes[i];
            let dx = eye.x - previousEye.x;
            let dy = eye.y - previousEye.y;
            let distance = Math.hypot(dx, dy);

            if(distance < (eye.radius + previousEye.radius)) {
               overlapping = true;
               break
            }
         }
         if(!overlapping) {
            eyes.push(new Eye(eye.x, eye.y, eye.radius))
         }
      }
   }
   init();

   function animate() {
      requestAnimationFrame(animate);
      ctx.fillStyle = ` rgba(0,0,0,.25) `;
      ctx.fillRect(0,0, w, h)

      for(let i = 0; i < eyes.length; i++) {
         eyes[i].draw();
      }
   }
   animate();





   window.addEventListener(`resize`, () => {
      sizes();
      init();

   });
})();