const API_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=f1099e35a6194bceb628758a90cd792b';

const actualWeather = document.getElementById('actualWeather')
const actualTemperature = document.getElementById('actualTemperature')
const todaysAdvice = document.getElementById('todaysAdvice')
const todaysWeather = document.getElementById('todaysWeather')


fetch(API_WEATHER)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)

        const sunset = new Date(json.sys.sunset * 1000)
        const sunrise = new Date(json.sys.sunrise * 1000)
       
        actualWeather.innerHTML = `${json.weather[0].description}`
        actualTemperature.innerHTML = `${Math.round(json.main.temp * 10) / 10}` 
        todaysWeather.innerHTML += `
            <h3 class="sunrise" id="sunrise">Sunrise ${sunrise.getHours() < 10
                ? "0" + sunrise.getHours() : sunrise.getHours()}.${sunrise.getMinutes()}</h3>
            <h3 class="sunset" id="sunset">Sunset ${sunset.getHours() < 10
                ? "0" + sunset.getHours() : sunset.getHours()}.${sunset.getMinutes()}</h3>
        `   
        todaysAdvice.innerHTML += ` 
            <img src="#" class="" id="weatherIcon"> 
            <h1 class="advice" id="advice">
                <span class="city" id="city">Its wet in ${json.name} bring an umbrella</span>
            </h1>
        `;
        
        
    })


    //var rounded = Math.round(number * 10) / 10
