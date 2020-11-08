// Declare variables
// var cityName = document.querySelector("#city-name")
var cityName = "Long Beach"
var apiKey = "d6023dc0b7605243dca140129a0bd39b"

// current weather api url
// var requestWeatherUrl= 'api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey ;
var requestWeatherUrl= 'https://api.openweathermap.org/data/2.5/weather?q=Long Beach&units=imperial&appid=d6023dc0b7605243dca140129a0bd39b'
//5 day forecast api url
var requestForecastUrl= 'api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=' + apiKey ;

// // event listener
// document.getElementById('getCity').addEventListener('submit', getCity);

// // city name submit function
// function cityName(e){
//     e.preventDefault();

//     let title = document.getElementById('title').nodeValue;
//     let body = document.getElementById('body').nodeValue;

//     fetch(currentURL)
// }


// Fetch Current Weather
function getApi(requestWeatherUrl) {
    fetch(requestWeatherUrl)
    .then(function (response) {
        console.log(response.status);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
        //City + Date + Icon

        //Temp
        var temp = data.list[0].main.temp;
        tempP = document.createElement('p');
        var tempEl = document.querySelector("#weather-div")
        tempEl.append(tempP);
        tempP.textContent = ("Current Temperature: " + temp + "\u00B0F");
        //Humidity

        //WInd Speed

        // UV Index
};
getApi(requestWeatherUrl);