let weatherdata;

fetch(
  `https://api.auroras.live/v1/?type=all&lat=60.1699&long=24.9384&forecast=false&threeday=false&images=true`
)
  .then((Response) => Response.json())
  .then((data) => {
    weatherdata = data;
    placetext();
  });

setTimeout(() => console.log(weatherdata), 5000);

function placetext() {
  const weatherAnswer = document.querySelector("#weather");
  const northernLights = document.querySelector("#northernlights");
  weatherAnswer.textContent = ` The current temperature is ${weatherdata.weather.temperature} degrees centigrade`;
  northernLights.textContent = `To see the northern lights you first need a clear sky. To see the northen lights in Lapland, an Aurora activity of between 0-2KP is needed. To see the Northen
  lights in Helsinki an Aurora activity of between 3-4KP is needed.\n 
   The current cloud coverage is ${weatherdata.weather.cloud}%. 
   The current aurora activity is ${weatherdata.ace.kp}KP
  `;
}
