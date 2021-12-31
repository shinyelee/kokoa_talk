const weather = document.querySelector(".weather__column__weather");
const city = document.querySelector(".weather__column__city");
const icon = document.querySelector(".weather__column__icon");
const API_KEY = "8cd894e12de3fa5eaa1066e961a9fd37";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}˚C`;
      //
      const icon = data.weather[0].icon;
      imgIcon = `http://openweathermap.org/img/w/${icon}.png`;
      const image = new Image();
      image.src = imgIcon;
      weather.appendChild(image);
      //
    });
}
function onGeoError() {
  alert("위치를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
