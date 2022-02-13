function initPage() {
    const cityEl = document.getElementById("enter-city");
    const searchEl = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentTempEl = document.getElementById("temperature");
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    const fivedayEl = document.getElementById("fiveday-header");
    const todayweatherEl = document.getElementById("today-weather");

    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];


    const apiKey = "2d092163794fc6f4624b18ac257ab93a"
}











// var apiKey = "2d092163794fc6f4624b18ac257ab93a"
// var cityName = document.querySelector

// fetch ('http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&appid=2d092163794fc6f4624b18ac257ab93a')
//     .then(response => response.json())
//     .then(data => {
//         lat = data[0].lat
//         lon = data[0].lon
//         console.log(data);
//     });
