import { searchPosts } from "./ui/searchPosts.js";

export function createSidebar() {
  const sidebar = document.querySelector("#sidebar");

  sidebar.innerHTML = `<a class="logo" href="../index.html">
                          <img class="logo-img" src="../images/heidicropped.avif" alt="Heidi the blogger smiling"/>
                          <h2 class="logo-text">HEIDI COOKS</h2>
                      </a>

                      <div class="search">
                        <input type="search" id="search-input"/>
                        <button class="search-button" id="search-button">Search</button>
                      </div>
  
                      <div class="categories">
                        <div class="categories-self">
                          <h3 class="heading-categories">Categories</h3>
                          <a href="../posts.html">Cakes</a>
                          <a href="../posts.html">Chicken</a>
                          <a href="../posts.html">Cupcakes</a>
                          <a href="../posts.html">Strawberries</a>
                        </div>
                      </div>`;
}

// search do poprawienia

window.addEventListener("load", () => {
  const searchButton = document.querySelector("#search-button");

  searchButton.addEventListener("click", (searchPosts) => {
    const searchInput = document.querySelector("#search-input").value;
    const newUrl =
      "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=30" +
      `?search=${searchInput}`;
  });
});
