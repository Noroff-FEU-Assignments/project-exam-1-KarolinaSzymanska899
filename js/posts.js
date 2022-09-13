import { renderPosts } from "./ui/renderPosts.js";
import { searchPosts } from "./ui/searchPosts.js";
import { displayMessage } from "./ui/displayMessage.js";

const url =
  "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=10";

async function getPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    document.querySelector(".loader").style.display = "none";
    renderPosts(results);
    searchPosts(newUrl);
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

const button = document.querySelector("#show-more-posts");

button.addEventListener("click", async function () {
  console.log("function active when clicking the button");
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

// search do poprawienia

import { renderPosts } from "./renderPosts.js";

export function searchPosts() {
  location.href = "../posts.html";

  postsContainer.innerHTML = "";
  renderPosts(newUrl);
}
