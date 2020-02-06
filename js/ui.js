class UI{
    constructor(){
        this.locationW = document.querySelector('#w-location')
        this.condition = document.querySelector('#condition')
        this.icon = document.querySelector('#w-icon')
        this.temp = document.querySelector('#w-temp')
        this.humidity = document.querySelector('#w-huminty')
        this.visibility = document.querySelector('#w-visibility')
        this.feelslikes = document.querySelector('#w-feelslikes')
        this.wind = document.querySelector('#w-wind')
        this.changelocationBTN= document.querySelector('#w-change-location')
        this.textCity= document.querySelector('#city')
        this.saveLocationBtn= document.querySelector('#save-change')
    }
    setWeatherInfo(weatherData) {
        this.locationW.textContent =`${weatherData.location.name},${weatherData.location.country}`
        this.condition.textContent = `conditon: ${weatherData.current.weather_descriptions}`
        this.icon.setAttribute('src',`${weatherData.current.weather_icons}`) 
        this.temp.textContent = `temp: ${weatherData.current.temperature} C`
        this.humidity.textContent = `Humidity: ${weatherData.current.humidity}`
        this.visibility.textContent = `Visibility : ${weatherData.current.visibility}KM` 
        this.feelslikes.textContent = `Feelslike : ${weatherData.current.feelslike} C `
        this.wind.textContent = `Wind : ${weatherData.current.wind_speed}Km ,   ${weatherData.current.wind_degree} `
       
    }
}