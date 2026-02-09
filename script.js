const apiKey = "87ccd64ad7bc5a6cec27f1852b49a1b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wheatherIcon = document.querySelector(".weather-icon");
const weatherColor = document.querySelector(".card");
async function checkWeather(city) {
    const reponse = await fetch(apiUrl + city+ `&appid=${apiKey}`);
    if (reponse.status== 404 ){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else {
        

    
    var data = await reponse.json();



    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+  "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    if (data.weather[0].main=="Clouds"){
        wheatherIcon.src = "images/clouds.png";
         document.querySelector(".card").style.background="linear-gradient(135deg, #781acf ,#5b548a )";
    


    }else if (data.weather[0].main=="Clear"){
        wheatherIcon.src = "images/clear.png";
         document.querySelector(".card").style.background="linear-gradient(135deg, #ffbe0b ,#5b548a )";
    
    
    }else if (data.weather[0].main=="Rain"){
        wheatherIcon.src = "images/rain.png";
         document.querySelector(".card").style.background="linear-gradient(135deg, #0c40ec ,#5b548a )";
    

   }else if (data.weather[0].main=="Drizzle"){
        wheatherIcon.src = "images/drizzle.png";
         document.querySelector(".card").style.background="linear-gradient(135deg, #f50f95 ,#5b548a )";
    

   }else if (data.weather[0].main=="Mist"){
        wheatherIcon.src = "images/mist.png";
         document.querySelector(".card").style.background="linear-gradient(135deg, #0cc066 ,#5b548a )";
    
   }
    
  document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display="none";

}

}

searchBtn.addEventListener("click", ()=>{
    checkWeather( searchBox.value);
  
})
    
