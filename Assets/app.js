// Declare variables
var cityName = document.querySelector("#city-name")
var apiKey = "d6023dc0b7605243dca140129a0bd39b"

// current weather api url
var currentURL= 'api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey ;

//5 day forecast api url
var fiveDayURL= 'api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey ;

// event listener
document.getElementById('getCity').addEventListener('submit', getCity);

// city name submit function
function cityName(e){
    e.preventDefault();

    let title = document.getElementById('title').nodeValue;
    let body = document.getElementById('body').nodeValue;

    fetch(currentURL)
}