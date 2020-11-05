let url = ``; //sets fetch url to blank on page load
let counter = 0; //sets page number for pagination

//QUERY SELECTORS//

const resultsItemContainer = document.querySelector("#searchresultscontainer");
const eventsButton = document.querySelector("#eventsbutton");
const activitiesButton = document.querySelector("#activitiesbutton");
const placesButton = document.querySelector("#placesbutton");
const searchButton = document.querySelector("#searchbutton");
const belowResults = document.querySelectorAll(".resultsitembelow");
const extraInformation = document.querySelectorAll(".extrainformation");
const scrollButton = document.querySelector("#scrolltotop");
const scrollButtonContainer = document.querySelector("#scrollbuttoncontainer");
const paginationContainer = document.querySelector(
  "#paginationbuttonscontainer"
);
const previousButton = document.querySelector("#previousbutton");
const nextButton = document.querySelector("#nextbutton");
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
    url = `http://open-api.myhelsinki.fi/v1/places/?limit=100`;
  } else {
    url = `http://open-api.myhelsinki.fi/v1/${type}/?tags_search=` + myQuery;
  }
  fetchData();
}

////////////////** *********** **///////////////////////

////////////////** EVENT LISTENERS **/////////////////////

eventsButton.addEventListener("click", () => {
  url = `http://open-api.myhelsinki.fi/v1/events/?limit=100`;
});
activitiesButton.addEventListener("click", () => {
  url = `http://open-api.myhelsinki.fi/v1/activities/?limit=50`;
});
placesButton.addEventListener("click", () => {
  url = `http://open-api.myhelsinki.fi/v1/places/?limit=50`;
  console.log(url);
});
searchButton.addEventListener("click", function () {
  fetchData();
  counter = 0;
  setTimeout(() => {
    paginationContainer.classList.remove("closed");
    paginationContainer.classList.add("open");
  }, 5000);
});

////////////////////////////////////////////////////////
//////FUNCTION TO CHECK USER POSITION ON THE PAGE//////

window.addEventListener("scroll", function () {
  scrollPosition = window.pageYOffset;
  if (scrollPosition > 2000) {
    scrollButtonContainer.classList.remove("closed");
    scrollButtonContainer.classList.add("open");
  } else {
    scrollButtonContainer.classList.remove("open");
    scrollButtonContainer.classList.add("closed");
  }
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
}
///////////**********************************///////////

///////**FUNCTION TO INSERT THE FETCHED DATA TO DOM **/////

function insertresult() {
  resultsItemContainer.innerHTML = "";

  filteredPlaces5.forEach((item) => {
    //create container "box"
    const SingleresultItemContainer = document.createElement("article");
    //add class name to it
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
    const newTab = document.createAttribute("target");
    newTab.value = "_blank";
    website.setAttributeNode(newTab);
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

///////***** Function to open and close content cards ****/////////

function readMoreFunction(event) {
  const selectedButton = event.currentTarget;
  const openMe = selectedButton.parentNode;
  const targetedDiv = openMe.childNodes[2];
  console.log("targeted div", targetedDiv);
  if (openMe.classList.contains("closed")) {
    targetedDiv.classList.remove("closed");
    targetedDiv.classList.add("open");
    selectedButton.innerHTML = "Close";
    openMe.classList.remove("closed");
    openMe.classList.add("open");
  } else {
    targetedDiv.classList.remove("open");
    targetedDiv.classList.add("closed");
    selectedButton.innerHTML = "Read more";
    openMe.classList.remove("open");
    openMe.classList.add("closed");
  }
}
///////////**********************************///////////
////////// Pagination functions ////////////////////

nextButton.addEventListener("click", () => {
  window.scrollTo(0, 860);
  counter++;
  resultsDisplayed = `&start=${counter * 50 + 1}`;
  console.log(resultsDisplayed);
  url += resultsDisplayed;
  fetchData();
  if (url.includes("places")) {
    placesButton.click();
  }
  if (url.includes("activities")) {
    activitiesButton.click();
  }
  if (url.includes("events")) {
    eventsButton.click();
  }
});

previousButton.addEventListener("click", () => {
  window.scrollTo(0, 860);
  counter--;
  resultsDisplayed = `&start=${counter * 50 + 1}`;
  console.log(resultsDisplayed);
  url += resultsDisplayed;
  fetchData();
  if (url.includes("places")) {
    placesButton.click();
  }
  if (url.includes("activities")) {
    activitiesButton.click();
  }
  if (url.includes("events")) {
    eventsButton.click();
  }
});
