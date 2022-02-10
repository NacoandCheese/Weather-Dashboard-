//Api key
var apiKey = "2d092163794fc6f4624b18ac257ab93a"
var cityName = 'Wrightstown'

fetch ('http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&appid=2d092163794fc6f4624b18ac257ab93a')
    .then(response => response.json())
    .then(data => {
        lat = data[0].lat
        lon = data[0].lon
        console.log(data);
    });
