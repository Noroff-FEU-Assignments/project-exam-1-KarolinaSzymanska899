export function renderPosts(postsToRender) {
  const postsContainer = document.querySelector("#posts-container");
  postsContainer.innerHTML = "";

  postsToRender.forEach(function (post) {
    postsContainer.innerHTML += `<a class="post-card" href="details.html?id=${post.id}">
                                  ${post.content.rendered}
                                  <div class="title">${post.title.rendered}</div>
                                </a>`;
  });
}
