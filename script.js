const apiKey = "87ccd64ad7bc5a6cec27f1852b49a1b0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
    const reponse = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await reponse.json();

    console.log(data);


    
}
   checkWeather( );