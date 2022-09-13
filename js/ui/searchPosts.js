import { renderPosts } from "./renderPosts";

export function searchPosts(posts) {
  const searchButton = document.querySelector("#search-button");
  const searchInput = document.querySelector("#search-input");

  searchButton.onclick = function () {
    console.log("it works");
    const searchValue = searchInput.value.trim().toLowerCase();

    const newUrl = baseUrl + `?search=${searchValue}`;

    postsContainer.innerHTML = "";
    renderPosts(newUrl);
  };
}
/*
    const filteredTeams = teams.filter(function (team) {
      if (team.full_name.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    renderPosts(filteredTeams);



    // to dodalam:
    const searchButton = document.querySelector("#search-button");

    searchButton.onclick = function() {
      const searchInput = document.querySelector("#search-input").value;
      const newUrl = baseUrl + `?search=${searchInput}`;

      postsContainer.innerHTML = "";
      renderPosts(newUrl);
    }
    */
