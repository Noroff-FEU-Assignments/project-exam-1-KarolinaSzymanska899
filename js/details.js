import { displayMessage } from "./ui/displayMessage.js";

// variables
const detailsContainer = document.querySelector("#details-container");
const modalContainer = document.querySelector("#myModal");
const modalContent = document.querySelector("#modal-img");
const modalImg = document.querySelector("div#myModal div#modal-img figure img");
const span = document.querySelector("#close");

// retrieving parameters from the query string
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

// fetches details of a post
const url =
  "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts/" + id;

async function getPost() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);

    createHtml(details);
    fetchModalContent(details);
  } catch (error) {
    console.log(error);
    displayMessage(
      "error",
      "Ops something went wrong. We will solve the issue ASAP 👩🏼‍🍳 🍵",
      "#details-container"
    );
  } finally {
    const img = document.querySelector("div#details-container figure img");

    img.addEventListener("click", (e) => {
      modalContainer.style.display = "block";
    });
  }
}

getPost();

// creates details of a post
function createHtml(details) {
  detailsContainer.innerHTML = `<h1 class="title">-- ${details.title.rendered} --</h1>
                              ${details.content.rendered}`;
}

// fetches modal's content
function fetchModalContent(details) {
  modalContent.innerHTML = `${details.content.rendered}`;
}

// the two that close modal
span.onclick = function () {
  modalContainer.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = "none";
  }
};
