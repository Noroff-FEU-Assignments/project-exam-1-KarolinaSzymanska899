import { renderPosts } from "./ui/renderPosts.js";
/*import { searchPosts } from "./ui/searchPosts.js";*/
import { displayMessage } from "./ui/displayMessage.js";

const url =
  "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=10";

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
  }
}

getPosts();

// shows more posts

const button = document.querySelector("#show-more-posts");

button.onclick = async function () {
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
};
