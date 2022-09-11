export function displayMorePosts() {
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
  if (counter > 2) {
    button.innerHTML = "No more posts to show";
    button.disabled = true;
  }

  console;
}
