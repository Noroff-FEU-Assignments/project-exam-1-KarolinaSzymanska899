import { renderPosts } from "./renderPosts.js";

export function searchPosts() {
  const searchButton = document.querySelector("#search-button");
  const searchInput = document.querySelector("#search-input");

  searchButton.onclick = function () {
    console.log("it works");
    const searchValue = searchInput.value.trim().toLowerCase();

    const newUrl =
      "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=30" +
      `?search=${searchValue}`;

    postsContainer.innerHTML = "";
    renderPosts(newUrl);
  };
}

/* jesli jestem np na about.html, to chce przekierowac na posts.html: 
window.location.href = "../posts.html";
*/
