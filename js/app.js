let storage = new Storage()
let city = storage.getCityFromLS();
let weatherData = new weather(city);
let ui = new UI();
document.addEventListener('DOMContentLoaded',e=>{
    getWeather()
})
document.querySelector("#save-change").addEventListener("click", changeCity);
function getWeather() {
  weatherData.getWeather().then(data => {
      ui.setWeatherInfo(data);
        console.log(data);
    })
    .catch(err => console.log(err));
}

function changeCity() {
  let city = document.querySelector("#city").value;
  weatherData.ChangeCity(city);
  getWeather();
  $('#ShowModal').modal('hide');
  storage.setCityTols(city)
}
