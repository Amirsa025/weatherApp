class weather{
    constructor(city){
        this.accessKey = '3eea4bc8b8f8765618e5916ea193d4c3'
        this.city = city
    }
  async getWeather(){
         let ResponseWeather = await fetch(`http://api.weatherstack.com/current?access_key=${this.accessKey}&query=${this.city}`)

         let weatherData = await ResponseWeather.json()

         return weatherData
    }
     ChangeCity(city){
        this.city =city
    }
    
}