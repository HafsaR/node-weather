let request = require("request");
const argv = require("yargs").argv;

let apiKey = "333a02d73b027d5179910fea9dbc69f0";
let city = argv.c || 'regina';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, function(err, response, body) {
  if (err) {
    console.log("error:", error);
  } else {
    //console.log("body:", body);
    let weather = JSON.parse(body);
    //console.log(weather);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
