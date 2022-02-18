var cityName = document.getElementById("enter-city")
console.log("city", cityName)
var searchButton = document.getElementById("search-button")
searchButton.addEventListener("click", function() {
    //get text of our input field
    // console.log(cityName.value);

    // add data to the even listener by fetching with api
    //gets LAT and LON for city input
    fetch ('http://api.openweathermap.org/geo/1.0/direct?q=' + cityName.value + '&appid=2d092163794fc6f4624b18ac257ab93a')
        .then(response => response.json())
        .then(data => {
            var lat = data[0].lat
            var lon = data[0].lon

            //now that we have lat and lon for our city, make another api call for the weather forecast for that city
            fetch (`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=imperial`)
                .then(response => response.json())
                .then(data => {
                    console.log("TODAY'S WEATHER DATAd", data);

                    // use data returned from API call and put data into HTML

                    //start with city as an example
                    var city = document.querySelector('#city')
                    city.innerHTML = cityName.value
                    var temp = docoment.querySelector('#temp')
                    city.innerHTML = data.current.temp
                   
                    
                    // temperature will be: data.current.temp
                });
        });

})
console.log("button clicked", searchButton)

var apiKey = "2d092163794fc6f4624b18ac257ab93a"
