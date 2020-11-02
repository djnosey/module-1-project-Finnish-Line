const resultsItemContainer = document.querySelector("#searchresultscontainer");
const eventsButton = document.querySelector("#eventsbutton");
const activitiesButton = document.querySelector("#activitiesbutton");
const placesButton = document.querySelector("#placesbutton");
const searchButton = document.querySelector("#searchbutton");

let url = ``; //sets fetch url to blank on page load

/*function to retrieve url query */

function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
const myQuery = GetURLParameter("query");
const type = GetURLParameter("type");
console.log(myQuery);

if (myQuery) {
  if (myQuery === "all") {
    url = `http://open-api.myhelsinki.fi/v1/places/?limit=1000`;
  } else {
    url = `http://open-api.myhelsinki.fi/v1/${type}/?tags_search=` + myQuery;
  }
  fetchData();
}

/** function ends */

eventsButton.addEventListener("click", () => {
  url = `http://open-api.myhelsinki.fi/v1/events/?limit=1000`;
});
activitiesButton.addEventListener("click", () => {
  url = `http://open-api.myhelsinki.fi/v1/activities/?limit=100`;
});
placesButton.addEventListener("click", () => {
  url = `http://open-api.myhelsinki.fi/v1/places/?limit=100`;
});
searchButton.addEventListener("click", fetchData);

function fetchData() {
  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      results = data.contents;
      parsedResults = JSON.parse(results).data;
      console.log(parsedResults);
      places = parsedResults;
    });
  setTimeout(filterResults, 3000);
  setTimeout(insertresult, 5000);
}

///////////**********************************///////////

/* TO USE THE REAL FETCH FUNCTION, UNCOMMENT THE "FETCH"*/

// fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
//   .then((response) => {
//     if (response.ok) return response.json();
//     throw new Error("Network response was not ok.");
//   })
//   .then((data) => {
//     results = data.contents;
//     parsedResults = JSON.parse(results).data;
//     console.log(parsedResults);
//     places = parsedResults;
//   });

/* AND COMMENT THE LINE BELOW */

//places = dataExample.data;

///////////**********************************///////////

/* FUNCTION THAT FILTERS OUT RESULTS WITHOUT PICTURE OR TAGS*/

function filterResults() {
  filteredPlaces1 = places.filter((item) => item.description.images !== null);
  filteredPlaces2 = filteredPlaces1.filter((item) => item.tags !== null);
  filteredPlaces3 = filteredPlaces2.filter((item) => item.tags.length !== 0);
  filteredPlaces4 = filteredPlaces3.filter(
    (item) => item.description.images.length !== 0
  );
  filteredPlaces5 = filteredPlaces4.filter((item) => item.name.en !== null);
  console.log("filteredPlaces4", filteredPlaces4);
  filteredPlaces6 = filteredPlaces5.filter();
}

///////////**********************************///////////

// setTimeout(filterResults, 10000);
// setTimeout(insertresult, 15000);

function insertresult() {
  resultsItemContainer.innerHTML = "";

  filteredPlaces5.forEach((item) => {
    result = `
    <article class ="resultsitemcontainer">

<div class ="resultsitem" style="background-image:url(${
      item.description.images[0].url
    }) ">
<h3>${item.name.en}</h3>
</div>
<div>
<span>Tags:<span>
<span>${item.tags[0].name}<span>
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
