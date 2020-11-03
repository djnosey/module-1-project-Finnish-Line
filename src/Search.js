let url = ``; //sets fetch url to blank on page load

//QUERY SELECTORS//

const resultsItemContainer = document.querySelector("#searchresultscontainer");
const eventsButton = document.querySelector("#eventsbutton");
const activitiesButton = document.querySelector("#activitiesbutton");
const placesButton = document.querySelector("#placesbutton");
const searchButton = document.querySelector("#searchbutton");
const belowResults = document.querySelectorAll(".resultsitembelow");
const extraInformation = document.querySelectorAll(".extrainformation");

//////////////////////////////////////////////////////////////////

/*function to retrieve query from url bar */

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

/* AND RUN A FETCH IF A QUERY EXISTS */

if (myQuery) {
  if (myQuery === "all") {
    url = `http://open-api.myhelsinki.fi/v1/places/?limit=1000`;
  } else {
    url = `http://open-api.myhelsinki.fi/v1/${type}/?tags_search=` + myQuery;
  }
  fetchData();
}

////////////////** *********** **///////////////////////

////////////////** EVENT LISTENERS **/////////////////////

eventsButton.addEventListener("click", () => {
  url = `http://open-api.myhelsinki.fi/v1/events/?limit=1000`;
});
activitiesButton.addEventListener("click", () => {
  url = `http://open-api.myhelsinki.fi/v1/activities/?limit=100`;
});
placesButton.addEventListener("click", () => {
  url = `http://open-api.myhelsinki.fi/v1/places/?limit=100`;
});
searchButton.addEventListener("click", function () {
  fetchData();
});

////////////////////////////////////////////////////////
////////*****FUNCTION TO FETCH THE DATA ******/////////

function fetchData() {
  loadingText();
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
  setTimeout(function () {
    searchButton.innerHTML = "Here's your results!";
  }, 4500);
  setTimeout(insertresult, 5000);
  setTimeout(() => {
    const readmorebutton = document.querySelectorAll(".readmorebutton");
    readmorebutton.forEach((item) =>
      item.addEventListener("click", readMoreFunction)
    );
    console.log(readmorebutton);
  }, 7000);
  setTimeout(function () {
    searchButton.innerHTML = "Search again";
  }, 10000);
}

//////////////****************/////////////////////////////////

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

///////**FUNCTION TO INSERT THE FETCHED DATA TO DOM **/////

function insertresult() {
  resultsItemContainer.innerHTML = "";

  filteredPlaces5.forEach((item) => {
    //create container "box"
    const SingleresultItemContainer = document.createElement("article");
    //add clas name to it
    SingleresultItemContainer.classList.add("resultsitemcontainer");

    //create the "tophalf" image/title div
    const tophalf = document.createElement("div");
    tophalf.classList.add("resultsitem");
    tophalf.style.backgroundImage = `url(${item.description.images[0].url})`;
    const title = document.createElement("h3");
    title.textContent = item.name.en;
    tophalf.appendChild(title);

    //create the bottom half
    const bottomhalf = document.createElement("div");
    bottomhalf.classList.add("resultsitembelow");
    bottomhalf.classList.add("closed");
    //create the <a>
    const website = document.createElement("a");
    website.innerHTML = "Visit website";
    website.href = item.info_url;
    //create the button
    const readmore = document.createElement("button");
    readmore.classList.add("eventbutton");
    readmore.classList.add("readmorebutton");
    readmore.innerHTML = "Read More";
    //append <a> and button to bottomhalf
    bottomhalf.appendChild(website);
    bottomhalf.appendChild(readmore);

    //create the extra information
    const extrainfo = document.createElement("div");
    extrainfo.classList.add("extrainformation");
    extrainfo.classList.add("closed");

    const tags = document.createElement("span");
    tags.innerHTML = item.tags[0].name;
    const description = document.createElement("p");
    description.innerHTML = item.description.body.slice(0, 200);
    extrainfo.appendChild(tags);
    extrainfo.appendChild(description);
    bottomhalf.appendChild(extrainfo);

    //append three divs to parent
    //append tophalf to the container "box"
    SingleresultItemContainer.appendChild(tophalf);
    //append bottomhalf to the container "box"
    SingleresultItemContainer.appendChild(bottomhalf);
    resultsItemContainer.appendChild(SingleresultItemContainer);
  });
}

///function to display "loading text"////////////

function loadingText() {
  searchButton.innerHTML = "Loading your results, just a sec...";
}

function readMoreFunction(event) {
  const selectedButton = event.currentTarget;
  const openMe = selectedButton.parentNode;
  if (openMe.classList.contains("closed")) {
    selectedButton.innerHTML = "Close";
    openMe.classList.remove("closed");
    openMe.classList.add("open");
  } else {
    selectedButton.innerHTML = "Read more";
    openMe.classList.remove("open");
    openMe.classList.add("closed");
    console.log(openMe);
  }
}
///////////**********************************///////////
