export function renderPosts(postsToRender) {
  const postsContainer = document.querySelector("#posts-container");
  postsContainer.innerHTML = "";

  postsToRender.forEach(function (post) {
    postsContainer.innerHTML += `<a href="details.html?id=${post.id}">
                                  <figure class="post-card">
                                    <img class="post-img" src="${post._embedded}" alt="${post.title.rendered}" />
                                    <figcaption>${post.title.rendered}</figcaption>
                                  </figure>
                                </a>`;
  });
}
