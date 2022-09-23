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
