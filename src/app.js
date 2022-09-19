// first
function formatTime(date) {
  let weekdays = [
    "Sunday",
    "Monay",
    "Tuesday",
    "Wednesday",
    "Thurdsday",
    "Friday",
    "Saturday",
  ];

  let today = weekdays[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (hour < 10) {
    hour = `0+${hours}`;
  }

  if (minutes < 10) {
    minutes = `0+${minutes}`;
  }

  return `${today} ${hour}:${minutes}`;
}
let currentTime = new Date();
let today = document.querySelector("#date");
today.innerHTML = formatTime(currentTime);

function displayWeather(response) {
  console.log(response);


document.querySelector("#city").innerHTML = response.data.name;
document.querySelector("#temperature-element").innerHTML = Math.round(response.data.main.temp);
document.querySelector("#weather-element").innerHTML = response.data.weather[0].main;
document.querySelector("#min-temperature-element").innerHTML = `Min ${Math.round(response.data.main.temp_min)}`;
document.querySelector("#max-temperature-element").innerHTML = `Min ${Math.round(response.data.main.temp_max)}`;

document.querySelector("#humidity-element").innerHTML = `Humidity: ${response.data.main.humidity}%`;
document.querySelector("#wind-element").innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
document.querySelector("#feels-like-element").innerHTML = `Feels like: ${Math.round(response.data.main.feels_like)}˚C`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  // cityInput.value = cityInput.value.trim();
  // cityInput.value = cityInput.value.charAt(0).toUpperCase() + cityInput.value.slice(1);
  // cityElement.innerHTML = cityInput.value;
  let apiKey = "e476e15a6d31a2a85d1f7fb7bf1aa090";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayWeather);
  console.log(apiUrl);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

// Current Button

function getPosition(position) {
  console.log(position);
  console.log(position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "e476e15a6d31a2a85d1f7fb7bf1aa090";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  // let apiUrlLocation = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true`;

  axios.get(apiUrl).then(displayWeather);
  // axios.get(apiUrlLocation);
  // console.log(apiUrlLocation);
}

function displayCurrentCityWeather(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}
let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", displayCurrentCityWeather);
