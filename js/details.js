import { displayMessage } from "./ui/displayMessage.js";

const detailsContainer = document.querySelector("#details-container");

// retrieving parameters from the query string
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url =
  "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts/" + id;

// fetches details of a post
async function getPost() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
    displayMessage(
      "error",
      "Ops something went wrong. We will solve the issue ASAP 👩🏼‍🍳 🍵",
      "#details-container"
    );
  }
}

getPost();

function createHtml(details) {
  detailsContainer.innerHTML = `<h1 class="title">-- ${details.title.rendered} --</h1>
                              ${details.content.rendered}`;
}

/*
dzialalo:
detailsContainer.innerHTML = details.content.rendered;

`<div >${details.content.rendered}</div>`;
*/
