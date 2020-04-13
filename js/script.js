const api = new Api();

  // function infoConsole(city) {
  //   api.getDataCityFromApi(city)
  //   .then(res => res.json())
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }
  // infoConsole('Санкт-Петербург');

  window.onload = function() {
    var startPos;
    var geoSuccess = function(position) {
      startPos = position;
      function infoConsole(lat, lon) {
        api.getDataCoorFromApi(lat, lon)
        .then(res => res.json())
        .then((result) => {
          const headerTemp = document.querySelector('.header__temp');
          headerTemp.textContent = `${Math.round(result.main.temp - 273)}°`;
          
          const userCity = document.querySelector('.user-cities__info-one');
          userCity.textContent = `${result.name}: ${Math.round(result.main.temp - 273)}°, ощущается как ${Math.round(result.main.feels_like - 273)}°, ${result.weather[0].description}`
          const userCityAddit = document.querySelector('.user-cities__info-two');
          userCityAddit.textContent = `Ветер: ${result.wind.speed} м/с, Влажность: ${result.main.humidity}%, Давление: ${result.main.pressure} мм рт. ст.`
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        })
      }
      infoConsole(startPos.coords.latitude, startPos.coords.longitude);
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };





const city = document.querySelector('.form__input-city');
function showWeather(event) {
    event.preventDefault();
    api.getDataCityFromApi(city.value)
    .then(res => res.json())
    .then((result) => {

      const selectedCity = document.querySelector('.selected-city__info');
      selectedCity.textContent =  `${result.name}: ${Math.round(result.main.temp - 273)}°, ощущается как ${Math.round(result.main.feels_like - 273)}°, ${result.weather[0].description}`;
      const selectedCityAddit = document.querySelector('.selected-city__info-two');
      selectedCityAddit.textContent = `Ветер: ${result.wind.speed} м/с, Влажность: ${result.main.humidity}%, Давление: ${result.main.pressure} мм рт. ст.`;

      console.log(result);
      //console.log(result.weather[0].main);
      formCity.reset();
    })
    .catch((err) => {
      console.log(err);
    })
}
const formCity = document.querySelector('.form');
formCity.addEventListener('submit', showWeather);