const elCard = document.querySelector(".card");
const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elBtn = document.querySelector(".btn");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = elInput.value.trim();

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputName}&units=metric&appid=c67e3943b1537eb384b2ac2193719538`;

  getWeather(api);

  elForm.reset();
});

const getWeather = (url) => {
  const request = new XMLHttpRequest();
  console.log(request);

  request.addEventListener("readystatechange", () => {
    if (request.status === 200 && request.readyState === 4) {
      const data = JSON.parse(request.responseText);
      showWeather(data);
    }
  });
  request.open("GET", url);
  request.send();
};

function showWeather(weather) {
  console.log(weather);
  const { name } = weather;
  const degree = weather.main.temp;
  const wind = weather.wind.speed;

  elCard.innerHTML = `
    <h1 class="city">City: ${name}</h1>
    <h2 class="temp">Temperature: ${degree}C</h4>
    <h3 class="speed">Speed: ${wind}m/s</h3>
    `;
}
