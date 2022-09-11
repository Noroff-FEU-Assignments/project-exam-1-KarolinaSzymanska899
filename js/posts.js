import { renderPosts } from "./ui/renderPosts.js";
/*import { searchPosts } from "./ui/searchPosts.js";*/
import { displayMorePosts } from "./displayMorePosts.js";
import { displayMessage } from "./ui/displayMessage.js";

let url =
  "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=10";
const button = document.querySelector("#show-more-posts");

async function getPosts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

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

button.addEventListener =
  ("click",
  async (displayMorePosts) => {
    let allPostsUrl =
      "https://www.karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts";

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
