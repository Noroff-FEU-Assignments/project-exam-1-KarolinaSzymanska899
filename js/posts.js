import { renderPosts } from "./ui/renderPosts.js";
/*import { displayMorePosts } from "./ui/displayMorePosts.js";*/
/*import { searchPosts } from "./ui/searchPosts.js";*/
import { displayMessage } from "./ui/displayMessage.js";

let url =
  "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=10";
const button = document.querySelector("#show-more-posts");

async function getPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    renderPosts(results);

    button.addEventListener("click", displayMorePosts);
  } catch (error) {
    console.log(error);
    displayMessage(
      "error",
      "Ops something went wrong. We will solve the issue ASAP 👩🏼‍🍳 🍵",
      "#posts-container"
    );
  }
}

getPosts();

async function displayMorePosts() {
  let url =
    "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=10";
  let counter = 0;
  counter++;
  console.log("it's working");

  if (counter === 1) {
    url =
      "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=20";
  }
  if (counter === 2) {
    url =
      "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=30";
  }
  if (counter >= 3) {
    button.innerHTML = "No more posts to show";
    button.disabled = true;
  }

  console.log(url);
}
