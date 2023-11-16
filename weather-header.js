const URL =
'https://api.openweathermap.org/data/2.5/weather?q=tooele&appid=efbc4cb56ced286de81100edeba5de29';

fetch(URL)
.then((response) => response.json())
  .then((jsObject) => {
    const kelTemp = jsObject.main.temp;
    const farTemp = ((kelTemp - 273.15) * 9) / 5 + 32;
    const windSpeed = jsObject.wind.speed;
    const windChill = 35.74 + 0.6215 * farTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * farTemp * Math.pow(windSpeed, 0.16);

    document.getElementById("five-city").textContent = jsObject.name;
    document.getElementById("current-desc").textContent = jsObject.weather[0].description.toUpperCase();
    document.getElementById("current-temp").textContent = Math.round(farTemp);
    document.getElementById("current-windChill").textContent = Math.round(windChill);
    document.getElementById("current-humid").textContent = jsObject.main.humidity;
    document.getElementById("current-windSpeed").textContent = windSpeed;
  });