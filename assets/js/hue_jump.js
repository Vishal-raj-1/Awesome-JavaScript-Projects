//  HUE JUMPER - By Frank Force
//  A 3D racing game in 2 Kilobytes!
//
//  Mouse = Steer
//  Click = Brake
//  Double Click = Jump
//
//  The road ends at 1000...

// draw settings
const context = c.getContext`2d`; // canvas context
const drawDistance = 800;         // how far ahead to draw
const cameraDepth = 1;            // FOV of camera
const segmentLength = 100;        // length of each road segment
const roadWidth = 500;            // how wide is road
const curbWidth = 150;            // with of warning track
const dashLineWidth = 9;          // width of the dashed line
const maxPlayerX = 2e3;           // limit player offset
const mountainCount = 30;         // how many mountains are there
const timeDelta = 1/60;           // inverse frame rate
const PI = Math.PI;               // shorthand for Math.PI

// player settings
const height = 150;               // high of player above ground
const maxSpeed = 300;             // limit max player speed
const playerAccel = 1;            // player forward acceleration
const playerBrake = -3;           // player breaking acceleration
const turnControl = .2;           // player turning rate
const jumpAccel = 25;             // z speed added for jump
const springConstant = .01;       // spring players pitch
const collisionSlow = .1;         // slow down from collisions
const pitchLerp = .1;             // rate camera pitch changes
const pitchSpringDamp = .9;       // dampen the pitch spring
const elasticity = 1.2;           // bounce elasticity
const centrifugal = .002;         // how much turns pull player
const forwardDamp = .999;         // dampen player z speed
const lateralDamp = .7;           // dampen player x speed
const offRoadDamp = .98;          // more damping when off road
const gravity = -1;               // gravity to apply in y axis
const cameraTurnScale = 2;        // how much to rotate camera
const worldRotateScale = .00005;  // how much to rotate world
    
// level settings
const maxTime = 20;               // time to start
const checkPointTime = 10;        // add time at checkpoints
const checkPointDistance = 1e5;   // how far between checkpoints
const maxDifficultySegment = 9e3; // how far until max difficulty
const roadEnd = 1e4;              // how far until end of road

//////////////////////////////////////////////////////////////////
// mouse input
//////////////////////////////////////////////////////////////////

mouseDown     =
mousePressed  =
mouseUpFrames =
mouseX        = 0;
    
onmouseup   =e=> mouseDown = 0;
onmousedown =e=> mousePressed ? mouseDown = 1 : mousePressed = 1;
onmousemove =e=> mouseX = e.x/window.innerWidth*2 - 1;
  
//////////////////////////////////////////////////////////////////
// math and helper functions
//////////////////////////////////////////////////////////////////
    
Clamp     =(v, a, b)  => Math.min(Math.max(v, a), b);
ClampAngle=(a)        => (a+PI) % (2*PI) + (a+PI<0? PI : -PI);
Lerp      =(p, a, b)  => a + Clamp(p, 0, 1) * (b-a);
R         =(a=1, b=0) => Lerp((Math.sin(++randSeed)+1)*1e5%1,a,b);
LSHA      =(l,s=0,h=0,a=1)=>`hsl(${h+hueShift},${s}%,${l}%,${a})`;
   
// simple 3d vector class
class Vec3 
{
  constructor(x=0, y=0, z=0) {this.x = x; this.y = y; this.z = z;}
  
  Add=(v)=>(
    v = v < 1e5 ? new Vec3(v,v,v) : v, 
    new Vec3( this.x + v.x, this.y + v.y, this.z + v.z ));
    
  Multiply=(v)=>(
    v = v < 1e5 ? new Vec3(v,v,v) : v, 
    new Vec3( this.x * v.x, this.y * v.y, this.z * v.z ));
}

// draw a trapazoid shaped poly
DrawPoly=(x1, y1, w1, x2, y2, w2, fillStyle)=>
{
    context.beginPath(context.fillStyle = fillStyle);
    context.lineTo(x1-w1, y1|0);
    context.lineTo(x1+w1, y1|0);
    context.lineTo(x2+w2, y2|0);
    context.lineTo(x2-w2, y2|0);
    context.fill();
}

// draw outlined hud text
DrawText=(text, posX)=>
{
    // scale text so it works in tiny CodePen iframe
    const size = c.height/79;
    context.font = size+'em impact';         // set font size
    context.fillStyle = LSHA(99,0,0,.5);     // set font color
    context.fillText(text, posX, size*14);   // fill text
    context.lineWidth = size/2.5;            // line width
    context.strokeText(text, posX, size*14); // outline text
  
    /*
    context.font = '9em impact';         // set font size
    context.fillStyle = LSHA(99,0,0,.5); // set font color
    context.fillText(text, posX, 129);   // fill text
    context.lineWidth = 3;               // line width
    context.strokeText(text, posX, 129); // outline text
    */
}

//////////////////////////////////////////////////////////////////
// build the road with procedural generation
//////////////////////////////////////////////////////////////////

roadGenLengthMax =                     // end of section
roadGenLength =                        // distance left
roadGenTaper =                         // length of taper
roadGenFreqX =                         // X wave frequency 
roadGenFreqY =                         // Y wave frequency
roadGenScaleX =                        // X wave amplitude
roadGenScaleY = 0;                     // Y wave amplitude
roadGenWidth = roadWidth;              // starting road width
startRandSeed = randSeed = Date.now(); // set random seed
road = [];                             // clear road

// generate the road
for( i = 0; i < roadEnd*2; ++i )          // build road past end
{
  if (roadGenLength++ > roadGenLengthMax) // is end of section?
  {
    // calculate difficulty percent
    d = Math.min(1, i/maxDifficultySegment);
  
    // randomize road settings
    roadGenWidth = roadWidth*R(1-d*.7,3-2*d);        // road width
    roadGenFreqX = R(Lerp(d,.01,.02));               // X curves
    roadGenFreqY = R(Lerp(d,.01,.03));               // Y bumps
    roadGenScaleX = i>roadEnd ? 0 : R(Lerp(d,.2,.6));// X scale
    roadGenScaleY = R(Lerp(d,1e3,2e3));              // Y scale
  
    // apply taper and move back
    roadGenTaper = R(99, 1e3)|0;                 // random taper
    roadGenLengthMax = roadGenTaper + R(99,1e3); // random length
    roadGenLength = 0;                           // reset length
    i -= roadGenTaper;                           // subtract taper
  }
  
  // make a wavy road
  x = Math.sin(i*roadGenFreqX) * roadGenScaleX;
  y = Math.sin(i*roadGenFreqY) * roadGenScaleY;
  road[i] = road[i]? road[i] : {x:x, y:y, w:roadGenWidth};
  
  // apply taper from last section and lerp values
  p = Clamp(roadGenLength / roadGenTaper, 0, 1);
  road[i].x = Lerp(p, road[i].x, x);
  road[i].y = Lerp(p, road[i].y, y);
  road[i].w = i > roadEnd ? 0 : Lerp(p, road[i].w, roadGenWidth);
    
  // calculate road pitch angle
  road[i].a = road[i-1] ? 
    Math.atan2(road[i-1].y-road[i].y, segmentLength) : 0;
}  

//////////////////////////////////////////////////////////////////
// init game
//////////////////////////////////////////////////////////////////

// reset everything
velocity = new Vec3
  ( pitchSpring =  pitchSpringSpeed =  pitchRoad = hueShift = 0 );
  
position = new Vec3(0, height);           // set player start pos
nextCheckPoint = checkPointDistance;      // init next checkpoint
time = maxTime;                           // set the start time
heading = randSeed;                       // random world heading

//////////////////////////////////////////////////////////////////
// update and render frame
//////////////////////////////////////////////////////////////////

Update=()=>
{

// get player road segment
s = position.z / segmentLength | 0; // current road segment
p = position.z / segmentLength % 1; // percent along segment

// get lerped values between last and current road segment
roadX = Lerp(p, road[s].x, road[s+1].x);
roadY = Lerp(p, road[s].y, road[s+1].y) + height;
roadA = Lerp(p, road[s].a, road[s+1].a);

// update player velocity
lastVelocity = velocity.Add(0);
velocity.y += gravity;
velocity.x *= lateralDamp;
velocity.z = Math.max(0, time?forwardDamp*velocity.z:0);

// add velocity to position
position = position.Add(velocity);
  
// limit player x position (how far off road)
position.x = Clamp(position.x, -maxPlayerX, maxPlayerX); 

// check if on ground
if (position.y < roadY)
{
  position.y = roadY; // match y to ground plane
  airFrame = 0;       // reset air frames
  
  // get the dot product of the ground normal and the velocity
  dp = Math.cos(roadA)*velocity.y + Math.sin(roadA)*velocity.z;
  
  // bounce velocity against ground normal
  velocity = new Vec3(0, Math.cos(roadA), Math.sin(roadA))
    .Multiply(-elasticity * dp).Add(velocity);
    
  // apply player brake and accel
  velocity.z += 
    mouseDown? playerBrake :
    Lerp(velocity.z/maxSpeed, mousePressed*playerAccel, 0);
  
  // check if off road
  if (Math.abs(position.x) > road[s].w)
  {
    velocity.z *= offRoadDamp;                    // slow down
    pitchSpring += Math.sin(position.z/99)**4/99; // rumble
  }
}

// update player turning and apply centrifugal force
turn = Lerp(velocity.z/maxSpeed, mouseX * turnControl, 0);
velocity.x +=
  velocity.z * turn -
  velocity.z ** 2 * centrifugal * roadX;
  
// update jump
if (airFrame++<6 && time 
  && mouseDown && mouseUpFrames && mouseUpFrames<9)
{
  velocity.y += jumpAccel; // apply jump velocity
  airFrame = 9;            // prevent jumping again
}
mouseUpFrames = mouseDown? 0 : mouseUpFrames+1;

// pitch down with vertical velocity when in air
airPercent = (position.y-roadY) / 99;
pitchSpringSpeed += Lerp(airPercent, 0, velocity.y/4e4);

// update player pitch spring
pitchSpringSpeed += (velocity.z - lastVelocity.z)/2e3;
pitchSpringSpeed -= pitchSpring * springConstant;
pitchSpringSpeed *= pitchSpringDamp;
pitchSpring += pitchSpringSpeed; 
pitchRoad = Lerp(pitchLerp, pitchRoad, Lerp(airPercent,-roadA,0));
playerPitch = pitchSpring + pitchRoad;

// update heading
heading = ClampAngle(heading + velocity.z*roadX*worldRotateScale);
cameraHeading = turn * cameraTurnScale;

// was checkpoint crossed?
if (position.z > nextCheckPoint)
{
  time += checkPointTime;               // add more time
  nextCheckPoint += checkPointDistance; // set next checkpoint
  hueShift += 36;                       // shift hue
}

//////////////////////////////////////////////////////////////////
// draw background - sky, sun/moon, mountains, and horizon
//////////////////////////////////////////////////////////////////

// clear the screen and set size
c.width = window.innerWidth, c.height = window.innerHeight;

// pre calculate projection scale, flip y
projectScale = (new Vec3(1,-1,1)).Multiply(c.width/2/cameraDepth);

// get horizon, offset, and light amount
horizon = c.height/2 - Math.tan(playerPitch)*projectScale.y;
backgroundOffset = Math.sin(cameraHeading)/2;
light = Math.cos(heading);

// create linear gradient for sky
g = context.createLinearGradient(0,horizon-c.height/2,0,horizon);
g.addColorStop(0,LSHA(39+light*25,49+light*19,230-light*19));
g.addColorStop(1,LSHA(5,79,250-light*9));

// draw sky as full screen poly
DrawPoly(c.width/2,0,c.width/2,c.width/2,c.height,c.width/2,g);

// draw sun and moon (0=sun, 1=moon)
for( i = 2 ; i--; )
{
  // create radial gradient
  g = context.createRadialGradient(
    x = c.width*(.5+Lerp(
      (heading/PI/2+.5+i/2)%1,
      4, -4)-backgroundOffset),
    y = horizon - c.width/5,
    c.width/25,
    x, y, i?c.width/23:c.width);
  g.addColorStop(0, LSHA(i?70:99));
  g.addColorStop(1, LSHA(0,0,0,0));
  
  // draw full screen poly
  DrawPoly(c.width/2,0,c.width/2,c.width/2,c.height,c.width/2,g);
}

// set random seed for mountains
randSeed = startRandSeed;

// draw mountains
for( i = mountainCount; i--; )
{
  angle = ClampAngle(heading+R(19));
  light = Math.cos(angle-heading); 
  DrawPoly(
    x = c.width*(.5+Lerp(angle/PI/2+.5,4,-4)-backgroundOffset),
    y = horizon,
    w = R(.2,.8)**2*c.width/2,
    x + w*R(-.5,.5),
    y - R(.5,.8)*w, 0,
    LSHA(R(15,25)+i/3-light*9, i/2+R(19), R(220,230)));
}

// draw horizon
DrawPoly(
  c.width/2, horizon, c.width/2, c.width/2, c.height, c.width/2,
  LSHA(25, 30, 95));

//////////////////////////////////////////////////////////////////
// draw road and objects
//////////////////////////////////////////////////////////////////

// calculate road x offsets and projections
for( x = w = i = 0; i < drawDistance+1; )
{
  p = new Vec3(x+=w+=road[s+i].x,     // sum local road offsets
    road[s+i].y, (s+i)*segmentLength) // road y and z pos
      .Add(position.Multiply(-1));    // get local camera space

  // apply camera heading
  p.x = p.x*Math.cos(cameraHeading) - p.z*Math.sin(cameraHeading);
  
  // tilt camera pitch and invert z
  z = 1/(p.z*Math.cos(playerPitch) - p.y*Math.sin(playerPitch));
  p.y = p.y*Math.cos(playerPitch) - p.z*Math.sin(playerPitch);
  p.z = z;
  
  // project road segment to canvas space
  road[s+i++].p =                         // projected road point
    p.Multiply(new Vec3(z, z, 1))         // projection
    .Multiply(projectScale)               // scale
    .Add(new Vec3(c.width/2,c.height/2)); // center on canvas
}

// draw the road segments
let segment2 = road[s+drawDistance]; // store the last segment
for( i = drawDistance; i--; )        // iterate in reverse
{
  // get projected road points
  segment1 = road[s+i];
  p1 = segment1.p;
  p2 = segment2.p;
  
  // random seed and lighting
  randSeed = startRandSeed + s + i;
  light = Math.sin(segment1.a) * Math.cos(heading) * 99;
  
  // check near and far clip
  if (p1.z < 1e5 && p1.z > 0)
  {
    // fade in road resolution over distance
    if (i % (Lerp(i/drawDistance,1,9)|0) == 0)
    {
      // ground
      DrawPoly(c.width/2, p1.y, c.width/2,
        c.width/2, p2.y, c.width/2,
        LSHA(25+light, 30, 95));

      // curb if wide enough
      if (segment1.w > 400)
        DrawPoly(p1.x, p1.y, p1.z*(segment1.w+curbWidth),
          p2.x, p2.y, p2.z*(segment2.w+curbWidth),
          LSHA(((s+i)%19<9? 50: 20)+light));
      
      // road and checkpoint marker
      DrawPoly(p1.x, p1.y, p1.z*segment1.w,
        p2.x, p2.y, p2.z*segment2.w,
        LSHA(((s+i)*segmentLength%checkPointDistance<300 ? 70 : 7)+light));
        
      // dashed lines if wide and close enough
      if ((segment1.w > 300) && (s+i)%9==0 && i < drawDistance/3)
          DrawPoly(p1.x, p1.y, p1.z*dashLineWidth,
          p2.x, p2.y, p2.z*dashLineWidth,
          LSHA(70+light));

      // save this segment
      segment2 = segment1;
    }

    // random object (tree or rock)
    if (R()<.2 && s+i>29)
    {
      // player object collision check
      x = 2*roadWidth * R(10,-10) * R(9);  // choose object pos
      const objectHeight = (R(2)|0) * 400; // choose tree or rock
      if (!segment1.h                      // dont hit same object
        && Math.abs(position.x-x)<200                      // X
        && Math.abs(position.z-(s+i)*segmentLength)<200    // Z
        && position.y-height<segment1.y+objectHeight+200)  // Y
      {
        // slow player and mark object as hit
        velocity = velocity.Multiply(segment1.h = collisionSlow);
      }

      // draw road object
      const alpha = Lerp(i/drawDistance, 4, 0);  // fade in object
      if (objectHeight) 
      {
        // tree trunk
        DrawPoly(x = p1.x+p1.z * x, p1.y, p1.z*29,
          x, p1.y-99*p1.z, p1.z*29,
          LSHA(5+R(9), 50+R(9), 29+R(9), alpha));
          
        // tree leaves
        DrawPoly(x, p1.y-R(50,99)*p1.z, p1.z*R(199,250),
          x, p1.y-R(600,800)*p1.z, 0,
          LSHA(25+R(9), 80+R(9), 9+R(29), alpha));
      }
      else
      {
        // rock
        DrawPoly(x = p1.x+p1.z*x, p1.y, p1.z*R(200,250),
          x+p1.z*(R(99,-99)), p1.y-R(200,250)*p1.z, p1.z*R(99),
          LSHA(50+R(19), 25+R(19), 209+R(9), alpha));
      }
    }
  }
}

//////////////////////////////////////////////////////////////////
// draw and update time
//////////////////////////////////////////////////////////////////

if (mousePressed)
{
  time = Clamp(time - timeDelta, 0, maxTime); // update time
  DrawText(Math.ceil(time), 9);               // show time
  context.textAlign = 'right';                // right alignment
  DrawText(0|position.z/1e3, c.width-9);      // show distance
}
else
{
  context.textAlign = 'center';      // center alignment
  DrawText('HUE JUMPER', c.width/2); // draw title text
}

requestAnimationFrame(Update); // kick off next frame

}

Update(); // kick off update loop
