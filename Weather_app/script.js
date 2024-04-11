const apiKey = "4e37ed91c7c75d206200d9f265897e65";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".serach input");
const searchBtn = document.querySelector(".serach button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    // console.log("chtathana"+city);
    const response = await fetch(apiUrl+city + `&appid=${apiKey}`);
    const data = await response.json();
    // console.log(res);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";


}

let btn = document.getElementById("Btn")

btn.addEventListener("click", () => {
    
        const Value = document.getElementById("searchBtn").value
        checkWeather(Value);
        // console.log("Executed");

    
})
