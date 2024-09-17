const apikey = "1f8dd9903d2260a9b567b986fa2a02ba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "https://cdn.iconscout.com/icon/free/png-512/free-clouds-1438852-1214537.png?f=webp&w=256";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "https://cdn.iconscout.com/icon/free/png-512/free-sun-1439866-1214360.png?f=webp&w=256";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "https://cdn.iconscout.com/icon/free/png-512/free-rain-1438879-1214541.png?f=webp&w=256";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "https://cdn.iconscout.com/icon/premium/png-512-thumb/drizzle-127287.png?f=webp&w=256";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "https://cdn.iconscout.com/icon/premium/png-512-thumb/mist-19-456240.png?f=webp&w=256";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => { checkWeather(searchBox.value); })



