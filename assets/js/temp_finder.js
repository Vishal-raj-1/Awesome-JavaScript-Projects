const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var cityName = (req.body.place);
  var url1 = "https://api.openweathermap.org/data/2.5/weather?q=city&appid=7c83671587d6ea6a6ed512e76b63e6e7&units=metric";
  var url = url1.replace("city", cityName);
  https.get(url, function(response) {
      response.on('data', function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      var imageUrl1 = "http://openweathermap.org/img/wn/icon@2x.png";
      var imageUrl = imageUrl1.replace("icon", icon);
      const weatherDiscription = weatherData.weather[0].description;
      res.render("result", {temp:temp, city: cityName, imageUrl:imageUrl});

     });
  });
});

app.listen(3000, function() {
  console.log("server is running on port 3000");
});
