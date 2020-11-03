//create container "box"
const SingleresultItemContainer = document.createElement("article");
//add clas name to it
SingleresultItemContainer.classList.add("resultsitemcontainer");

//create the "tophalf" image/title div
const tophalf = document.createElement("div");
tophalf.classList.add("resultsitem");
tophalf.style.backgroundImage = `${item.description.images[0].url}`;
const title = document.createElement("h3");
title.textContent = item.name.en;
tophalf.appendChild(title);

//create the bottom half
const bottomhalf = document.createElement("div");
bottomhalf.classList.add("resultsitembelow");
//create the <a>
const website = document.createElement("a");
website.innerHTML = "Visit website";
website.href = item.info_url;
//create the button
const readmore = document.createElement("button");
readmore.classList.add("eventbutton");
//append <a> and button to bottomhalf
bottomhalf.appendChild(website);
bottomhalf.appendChild(readmore);

//create the extra information
const extrainfo = document.createElement("div");
extrainfo.classList.add("extrainformation");
const tags = document.createElement("span");
tags.innerHTML = item.tags[0].name;
const description = document.createElement("p");
description.innerHTML = item.description.body.slice(0, 200);
extrainfo.appendChild(tags);
extrainfo.appendChild(description);

//append three divs to parent
//append tophalf to the container "box"
SingleresultItemContainer.appendChild(tophalf);
//append bottomhalf to the container "box"
SingleresultItemContainer.appendChild(bottomhalf);
//append extra information to container "box"
SingleresultItemContainer.appendChild(extrainfo);


    //     result = `
    //         <article class ="resultsitemcontainer">

    //     <div class ="resultsitem"  style="background-image:url(${
    //       item.description.images[0].url
    //     }) ">
    //     <h3>${item.name.en}</h3>

    //     </div>
    //     <div class = "resultsitembelow closed">
    //     <a href=${item.info_url}>Visit website</a>
    //     <button class ="eventbutton" class="readmore">read more</button>
    //     </div>

    //     <div class = "extrainformation closed">
    //     <span>Tags:<span>
    //     <span>${item.tags[0].name}<span>
    //     <p>Description</p>
    //     <p>${item.description.body.slice(0, 150)}
    //     </p>
    //     </div>

    //     </article>
    //     `;
    //     resultsItemContainer.innerHTML += result;
    //   });
    // }
