var mappimg;
var clat=0;
var clon=0;
var lat= 0;

var lon=0;

var zoom=1;
var earthq;
// longitude are horizontal lines (y axis)(E,-W)
// latitude lines are vertical(x axis) lines(N,-S)
// if w ,S are given as direction we use negative sign in front of the given Value .
function preload(){
    
    mappimg=loadImage("https://api.mapbox.com/styles/v1/mapbox/light-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoiaWFtYWJoaWkxIiwiYSI6ImNrbW5kZWFtNTA1bW4yb2xrdnNwZHF0YWwifQ.mkfj9kPgcA6xpsEXwGSbNw");
    earthq=loadStrings("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv");

}
//this is the Web Mercator projection formula
//that i have used here
//in this i have used P5 framework ,usgs government API and mapbox API for showing the data on map.

function merX(lon) {
    lon = radians(lon);
    var a = (256 / PI) * pow(2, zoom);
    var b = lon + PI;
    return a * b;
  }
  
  function merY(lat) {
    lat = radians(lat);
    var a = (256 / PI) * pow(2, zoom);
    var b = tan(PI / 4 + lat / 2);
    var c = PI - log(b);
    return a * c;
  }
  
// this is to create a canvas and for showing the data on map feed
  
  function setup(){
    createCanvas(1024,512);
    
    translate(width/2,height/2);
    imageMode(CENTER);
    image(mappimg ,0,0);
    var cx=merX(clon);
    var cy=merY(clat);
    for(var i=0;i<earthq.length;i++)
    {
        var Data=earthq[i].split(/,/);
        var lat=Data[1];
        var lon=Data[2];
        var magnitude=Data[4];
        var x=merX(lon)-cx;
        var y=merY(lat)-cy;
       
        magnitude=pow(10,magnitude);
        magnitude=sqrt(magnitude);
        var magmx=sqrt(pow(10,10));

        var diameter=map(magnitude,0,magmx,0,180);
        stroke(255,0,0);
        fill(255,0,100,200);
        ellipse(x,y,diameter,diameter);
    }
    



}
// submitted by abhimanyu




//28.7041 lan;
//77.1025 log;
