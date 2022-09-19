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


// 2nd

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name
  document.querySelector("#temperature-element").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#weather-element").innerHTML = response.data.weather[0].main;
  document.querySelector("#weather-element").innerHTML = response.data.weather[0].main;
  document.querySelector("#humidity-element").innerHTML = Math.round(
    response.data.main.temp
  );
}


function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value
  let units = "metric"
  let apiKey = "e476e15a6d31a2a85d1f7fb7bf1aa090";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);

  axios.get(apiUrl).then(displayWeatherCondition);

}

let search = document.querySelector("#search-form");
search.addEventListener("submit", searchCity);