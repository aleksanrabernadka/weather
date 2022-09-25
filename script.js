let currentData = new Date();
let newData = document.querySelector(".Today-date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let minutes = currentData.getMinutes();
let day = days[currentData.getDay()];
let time = currentData.getHours();
let sentence = `${day} ${time}:${minutes} `;

newData.innerHTML = `${sentence}`;

/*function enterCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input-search-text");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = searchInput.value;
  } else {
    h1.innerHTML = null;
    alert("Please, enter a city");
  }
}
let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", enterCity);

//challenge number 3
let fakeTemperature = Math.floor(Math.random() * 40);
function changeToC(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");

  temperatureElement.innerHTML = fakeTemperature;
}
let linkC = document.querySelector("#celcius-temperature");
linkC.addEventListener("click", changeToC);

function changeToF(event) {
  event.preventDefault();
  let fahrenheitTemperature = Math.round((fakeTemperature * 9) / 5 + 32);
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = fahrenheitTemperature;
}
let linkF = document.querySelector("#fahrenheit-temperature");
linkF.addEventListener("click", changeToF);

/*function changeTemperature(event) {
  
  let Temperature = document.querySelector(".temperature");
  
  fakeTemperature.innerHTML = Temperature;
}

*/

//challenge number 3

/*function changeTemperature(){
let celsiusTemp = document.querySelector("#celcius - temperature");
celsiusTemperature = Math.round(celsiusTemperature);


}
let celTemp = document.querySelector("#celcius - temperature");
addEventListener("click",changeTemperature )

let temperature = document.querySelector(".temperature");


let fahrenheitTemperature = document.querySelector("#fahrenheit - temperature");
fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);*/

let apiKey = "b619624224e00d2c73b3e2bc387020b2";
function enterCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input-search-text");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    let city = searchInput.value;
    h1.innerHTML = city;
    let apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl2).then(showTemperature);
  } else {
    h1.innerHTML = null;
  }
}
let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", enterCity);

function showTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = temperature;
  let cityElement = document.querySelector("h1");
  let city = response.data.name;
  cityElement.innerHTML = city;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

//Add a Current Location button. When clicking on it, it uses the Geolocation API to get your GPS
//coordinates and display and the city and current temperature using the OpenWeather API.
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", getCurrentPosition);
