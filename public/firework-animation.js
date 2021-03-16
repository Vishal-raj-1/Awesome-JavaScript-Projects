//1. Install and import the fireworks-js as an ES module.
# Yarn
$ yarn add fireworks-js

# NPM
$ npm i fireworks-js

import { Fireworks } from 'fireworks-js'

//2. Or load the fireworks.js JavaScript library from the dist folder.

<script src="dist/fireworks.js"></script>

//3. Create a container on which you want to render the firework animation.

<div class="fireworks-example"></div>

//4. Initialize the fireworks-js library on the container element and config the firework animation using the following props.

const fireworks = new Fireworks({
      target: document.querySelector('.fireworks-example'),
      hue: 120,
      startDelay: 1,
      minDelay: 20,
      maxDelay: 30,
      speed: 5,
      acceleration: 1.15,
      friction: 0.88,
      gravity: 1,
      particles: 65,
      trace: 3,
      explosion: 6,
      boundaries: {
        top: 70,
        bottom: container.clientHeight,
        left: 70,
        right: container.clientWidth
      },
      sound: {
        enable: true,
        list: [
          'explosion0.mp3',
          'explosion1.mp3',
          'explosion2.mp3'
        ],
        min: 4,
        max: 8
      }
})
//5. Start the firework animation.

fireworks.start();

//6. Pause the firework animation.

fireworks.pause()

//7. Stop the firework animation.

fireworks.stop()

//8. Clear the firework animation.

fireworks.clear()
