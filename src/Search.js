const proxyurl = "https://cors-anywhere.herokuapp.com/";
const basicsearchURL = "http://open-api.myhelsinki.fi/v1/places/?limit=30";
const resultsItemContainer = document.querySelector("#searchresultscontainer");
let places = dataExample.data;



var filteredPlaces1 = places.filter((item) => item.description.images !== null);
var filteredPlaces2 = filteredPlaces1.filter((item) => item.tags !== null);
var filteredPlaces3 = filteredPlaces2.filter((item) => item.tags.length !== 0);
var filteredPlaces4 = filteredPlaces3.filter(
  (item) => item.description.images.length !== 0
);

insertresult();

function insertresult() {
  filteredPlaces4.forEach((item) => {
    var result = `   
    <article class ="resultsitemcontainer">
         
<div class ="resultsitem" style="background-image:url(${
      item.description.images[0].url
    }) ">
<h3>${item.name.en}</h3>
</div>
<div>
<p>Tags:</p>
<p>${item.tags[0].name}</p>
<p>Description</p>

<p>${item.description.body.slice(0, 200)}
</p>
<a href=${item.info_url}>Visit website</a>
</div>
</article>
`;
    resultsItemContainer.innerHTML += result;
  });
}


// fetchBasicData();

// function fetchBasicData() {
//   fetch(proxyurl + basicsearchURL)
//     .then((response) => response.json())
//     .then((data) => {
//       places = data;
//     })
//     .then(filterResults())
//     .then(insertresult());
// }
