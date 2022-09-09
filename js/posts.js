import { renderPosts } from "./ui/renderPosts.js";
/*import { searchPosts } from "./ui/searchPosts.js";*/
import { displayMessage } from "./ui/displayMessage.js";

const url =
  "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?_embed";

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
