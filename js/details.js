const postContainer = document.querySelector("#details-container");

// retrieving parameters from the query string
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url =
  "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts/" +
  id +
  "?_embed";
console.log(url);
