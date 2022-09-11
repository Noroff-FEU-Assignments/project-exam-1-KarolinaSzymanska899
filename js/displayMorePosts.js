export function displayMorePosts() {
  console.log("function active when clicking the button");
  allPostsUrl =
    "https://karolinaszymanska.tech/heidicooks/wp-json/wp/v2/posts?per_page=30";
  button.innerHTML = "No more posts to show";
  button.disabled = true;
}
