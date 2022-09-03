export function createSidebar() {
  const sidebar = document.querySelector("#sidebar");

  sidebar.innerHTML = `<h3 class="hide-me">Categories</h3>
                      <a href="../posts.html">Cakes</a>
                      <a href="../posts.html">Chicken</a>
                      <a href="../posts.html">Cupcakes</a>
                      <a href="../posts.html">Strawberries</a>`;
}
