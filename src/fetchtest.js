let weatherdata;
const weatherAnswer = document.querySelector("#weather");
const northernLights = document.querySelector("#northernlights");

fetch(
  `https://api.auroras.live/v1/?type=all&lat=60.1699&long=24.9384&forecast=false&threeday=false&images=true`
)
  .then((Response) => Response.json())
  .then((data) => {
    weatherdata = data;
    placetext();
  });

function placetext() {
  weatherAnswer.innerHTML = ` The current temperature is <strong>${weatherdata.weather.temperature}</strong> degrees centigrade`;
  northernLights.innerHTML = `To see the northern lights you first need a clear sky. To see the northen lights in Lapland, an Aurora activity of between 0-2KP is needed. To see the Northen
  lights in Helsinki an Aurora activity of between 3-4KP is needed.\n 
   The current cloud coverage is <strong>${weatherdata.weather.cloud}%</strong>. 
   The current aurora activity is <strong>${weatherdata.ace.kp}KP</strong>.
  `;
}
