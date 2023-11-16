fetch('https://api.openweathermap.org/data/2.5/weather?q=tooele&appid=efbc4cb56ced286de81100edeba5de29')
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

fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0b4d9705196d4a7c9252e53141d0f945')
.then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject)
    //Main Article
    if (jsObject.articles[0].urlToImage != null) {
        document.getElementById('main-img').src = jsObject.articles[0].urlToImage;
    } else {
        console.log('No Image')
    };
    document.getElementById('main-title').textContent = jsObject.articles[0].title;
    document.getElementById('main-desc').textContent = jsObject.articles[0].description;
    document.getElementById('main-link').href = jsObject.articles[0].url;
    
    //Article 1
    if (jsObject.articles[1].urlToImage != null) {
        document.getElementById('article-img-1').src = jsObject.articles[1].urlToImage;
    } else {
        console.log('No Image')
    };
    document.getElementById('article-title-1').textContent = jsObject.articles[1].title;
    document.getElementById('article-desc-1').textContent = jsObject.articles[1].description;
    document.getElementById('article-link-1').href = jsObject.articles[1].url;
    
    //Article 2
    if (jsObject.articles[2].urlToImage != null) {
        document.getElementById('article-img-2').src = jsObject.articles[2].urlToImage;
    } else {
        console.log('No Image')
    };
    document.getElementById('article-title-2').textContent = jsObject.articles[2].title;
    document.getElementById('article-desc-2').textContent = jsObject.articles[2].description;
    document.getElementById('article-link-2').href = jsObject.articles[2].url;
    
    //Article 3
    if (jsObject.articles[3].urlToImage != null) {
        document.getElementById('article-img-3').src = jsObject.articles[3].urlToImage;
    } else {
        console.log('No Image')
    };
    document.getElementById('article-title-3').textContent = jsObject.articles[3].title;
    document.getElementById('article-desc-3').textContent = jsObject.articles[3].description;
    document.getElementById('article-link-3').href = jsObject.articles[3].url;
    
    //Article 4
    if (jsObject.articles[4].urlToImage != null) {
        document.getElementById('article-img-4').src = jsObject.articles[4].urlToImage;
    } else {
        console.log('No Image')
    };
    document.getElementById('article-title-4').textContent = jsObject.articles[4].title;
    document.getElementById('article-desc-4').textContent = jsObject.articles[4].description;
    document.getElementById('article-link-4').href = jsObject.articles[4].url;
  });