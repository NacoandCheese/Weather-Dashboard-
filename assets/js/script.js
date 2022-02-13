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



    const apiKey = "2d092163794fc6f4624b18ac257ab93a";

    function getWeather(cityName) {

        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "appid=" + apiKey;
        axios.get(queryURL)
        .then(function (response) {

            todayweatherEl.classList.remove("d-none");

            const currentDate = new Date(response.data.dt * 1000);
            const day = currentDate.getDate();
            const month = getMonth(); + 1;
            const year = currentDate.getFullYear();
            nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";


            //Get UV index
            let lat = response.data.coord.lat;
            let lon = response.data.coord.lonl;
            let UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon" + lon + "&appid=" + apiKey +"&cnt=1";
            axios.get(UVQueryURL)
            .then(function (response) {
                let UVindex = document.createElement("span");
                
            })
        })
    }












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
