// Declare variables
// var cityName = document.querySelector("#city-name")
var cityName = "Oakland"
//var apiKey = "d6023dc0b7605243dca140129a0bd39b"

// current weather api url
var requestWeatherUrl= 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=d6023dc0b7605243dca140129a0bd39b' ;
//var requestWeatherUrl= 'https://api.openweathermap.org/data/2.5/weather?q=Long Beach&units=imperial&appid=d6023dc0b7605243dca140129a0bd39b'
//5 day forecast api url
var requestForecastUrl= 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=d6023dc0b7605243dca140129a0bd39b' ;

// event listener
document.getElementById('getCity').addEventListener('submit', getCity);

// // city name submit function
// function cityName(e){
//     e.preventDefault();

//     let title = document.getElementById('title').value;
//     let body = document.getElementById('body').value;

//     fetch(currentURL)
// }
getApi(requestWeatherUrl);

// Fetch Current Weather
function getApi(requestWeatherUrl) {
    fetch(requestWeatherUrl)
    .then(function (response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        //City + Date + Icon

        var code = data.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/wn/" + code + "@2x.png";
        
        var iconImg = document.createElement('img');
        iconImg.setAttribute("src", iconUrl);
        var IconEl = document.querySelector("#weather-div");
        IconEl.append(iconImg);
        //weather[0].id

        //Temp
        var temp = data.main.temp;
        tempP = document.createElement('p');
        var tempEl = document.querySelector("#weather-div")
        tempEl.append(tempP);
        tempP.textContent = ("Current Temperature: " + temp + "\u00B0F");
        //Humidity
        var humid = data.main.humidity;
        humidP = document.createElement('p');
        var humidEl = document.querySelector("#weather-div")
        humidEl.append(humidP);
        humidP.textContent = ("Humidity: " + humid);
        //Wind Speed
        var wind = data.wind.speed;
        windP = document.createElement('p');
        var windEl = document.querySelector("#weather-div")
        windEl.append(windP);
        windP.textContent = ("Wind Speed: " + wind + " MPH");
        // UV Index

    })
// function getApi(requestForecastUrl) {
//     fetch(requestForecastUrl)
//     .then(function (response) {
//         console.log(response.status);
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);

// });

}