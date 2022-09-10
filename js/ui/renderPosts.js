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

/*
<figure class="post-card">
  <img class="post-img" src="${post._embedded["wp:featuredmedia"].source_url}" alt="${post.title.rendered}" />
   <figcaption>${post.title.rendered}</figcaption>
</figure>
*/
