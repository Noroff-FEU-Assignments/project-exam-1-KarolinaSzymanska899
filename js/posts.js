import { renderPosts } from "./ui/renderPosts.js";
import { displayMessage } from "./ui/displayMessage.js";

// variables
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input").value;
const button = document.querySelector("#show-more-posts");
const url =
  "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=10";

// gets posts
async function getPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    document.querySelector(".loader").style.display = "none";
    renderPosts(results);
  } catch (error) {
    console.log(error);
    displayMessage(
      "error",
      "Ops something went wrong. We will solve the issue ASAP 👩🏼‍🍳 🍵",
      "#posts-container"
    );
  } finally {
    const img = document.querySelector("div#details-container figure img");

    img.addEventListener("click", (e) => {
      modalContainer.style.display = "block";
    });
  }
}

getPosts();

// shows more posts
button.addEventListener("click", async function () {
  button.innerHTML = "No more posts to show";
  button.style.backgroundColor = "#2f3133";
  button.style.cursor = "default";

  let allPostsUrl =
    "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=30";

  try {
    const resp = await fetch(allPostsUrl);
    const res = await resp.json();

    renderPosts(res);
  } catch (error) {
    console.log(error);
    displayMessage(
      "error",
      "Ops something went wrong. We will solve the issue ASAP 👩🏼‍🍳 🍵",
      "#posts-container"
    );
  }
});

// displays posts with a searched phrase

searchButton.addEventListener("click", function () {
  console.log("element selected correctly");
  /* jesli jestem np na about.html, to chce przekierowac na posts.html: */
  window.location.href = "../posts.html";

  const newUrl =
    "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=30" +
    `?search=${searchInput}`;
  try {
    const resp = fetch(newUrl);
    const searchedPosts = resp.json();

    renderPosts(searchedPosts);
  } catch (error) {
    console.log(error);
    displayMessage(
      "error",
      "Ops something went wrong. We will solve the issue ASAP 👩🏼‍🍳 🍵",
      "#posts-container"
    );
  }
});
