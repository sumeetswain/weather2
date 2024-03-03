let temperature = 0;
let windSpeed = 0;
let city = "";
let humidity = 0;
const loadData = async () => {
  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    )
    .then((res) => {
      city = res.data.name;
      temperature = Math.floor(res.data.main.temp);
      windSpeed = Math.floor(res.data.wind.speed * 3.6);
      humidity = Math.floor(res.data.main.humidity);
      console.log(res.data);
      document.querySelector("#city").innerHTML = `City: ${city}`;
      document.querySelector(
        "#temp"
      ).innerHTML = `Temperature: ${temperature} °C`;
      document.querySelector(
        "#wind"
      ).innerHTML = `Wind Speed : ${windSpeed} Km/h`;
      document.querySelector(
        "#nikku"
      ).innerHTML = `Humidity : ${humidity} g/Kg`;
      document.querySelector(".message").style.display = "none";
      document.querySelector(".weather").style.display = "block";
    })
    .catch((e) => {
      message = e.response.data.message;
      document.querySelector("#msg").innerHTML = `${message}`;
      document.querySelector(".message").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    });
};
const text = document.querySelector("#formText");
const form = document.querySelector("#submitForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  city = text.value;
  loadData();
  text.value = "";
});
