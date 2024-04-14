const apiKey="009d86af231c8d9433422f109c37c649";
const form=document.querySelector("form");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let cityName=document.querySelector(".city-name").value;
    getWeatherData(cityName);
})


async function getWeatherData(cityName){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;
    // console.log(url);
    const response=await fetch(url);
    const data=await response.json();
    showWeatherInfo(data);
}

function showWeatherInfo(data){
    console.log(data);
    let imgIcon="http://openweathermap.org/img/w/"+data.weather[0].icon+'.png';
    let weatherInfo=document.getElementById("weather-info");
    let sunrise= new Date(data.sys.sunrise*1000);
    
    console.log(sunrise);
    weatherInfo.innerHTML=`
        <h3 >Country Code : ${data.sys.country}</h3>
        <h3 >City Name : ${data.name}</h3>
        <p>Temperature : ${data.main.temp}F | ${Math.round(data.main.temp-273.15)}&degC</p>
        <p>Humidity : ${data.main.humidity}%</p>
        <p>Air Pressure : ${data.main.pressure}hPa</p>
        <p>Weather : ${data.weather[0].description} <img src=${imgIcon} height=35 width=25> </p>
        <p>Wind Speed : ${data.wind.speed}m/s</p>
    `;
    
}