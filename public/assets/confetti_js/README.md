# confetti.js

The simplest confetti animation overlay for your website! 🙂 (no libraries required - 3.18 KB total) 

Just add the following under `<body>`:

    <script src="https://cdn.jsdelivr.net/gh/mathusummut/confetti.js/confetti.min.js"></script><script>confetti.start()</script>

and you're done!

![confetti demo](https://i.imgur.com/Tjc8NvJ.png)

You can call any of the following available functions:

	confetti.start();                  //starts the confetti animation (keeps going until stopped manually)
	confetti.start(timeout);           //starts confetti animation with confetti timeout in milliseconds (if timeout is 0, it will keep going until stopped manually)
	confetti.start(timeout, amount);   //like confetti.start(timeout), but also specifies the number of confetti particles to throw (50 would be a good example)
	confetti.start(timeout, min, max); //like confetti.start(timeout), but also the specifies the number of confetti particles randomly between the specified minimum and maximum amount
	confetti.stop();        //stops adding confetti
	confetti.toggle();      //starts or stops the confetti animation depending on whether it's already running
	confetti.pause();       //freezes the confetti animation
	confetti.resume();      //unfreezes the confetti animation
	confetti.togglePause(); //toggles whether the confetti animation is paused
	confetti.remove();      //stops the confetti animation and remove all confetti immediately
	confetti.isPaused();    //returns true or false depending on whether the confetti animation is paused
	confetti.isRunning();   //returns true or false depending on whether the animation is running

You can also configure these parameters:

	confetti.maxCount = 150;     //set max confetti count
	confetti.speed = 2;          //set the particle animation speed
	confetti.frameInterval = 20; //the confetti animation frame interval in milliseconds
	confetti.alpha = 1.0;        //the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
	confetti.gradient = false;   //whether to use gradients for the confetti particles

For a live demo, [click here](https://feelingunlucky.today) and search something, anything :)

The demo uses this function:

	confetti.start(1200, 50, 150); //throws a random number of confetti particles (between 50 and 150) for 1200 milliseconds (1.2 seconds)

Enjoy!
