const apiKey = "87ccd64ad7bc5a6cec27f1852b49a1b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city) {
    const reponse = await fetch(apiUrl + city+ `&appid=${apiKey}`);
    var data = await reponse.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+  "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";


    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather( searchBox.value);

})
    
