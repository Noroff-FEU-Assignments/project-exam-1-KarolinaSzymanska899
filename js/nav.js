export function createNav() {
  const nav = document.querySelector("#nav");

  nav.innerHTML = `<input type="checkbox" id="toggle" />
                  <label for="toggle"><img src="../images/cheeseburger.png" /></label>
                  <ul id="navbar-nav" class="navbar-nav">
                    <li class="nav-item"><a href="index.html">HOME</a></li>
                    <li class="nav-item"><a href="posts.html">RECIPES</a></li>
                    <li class="nav-item"><a href="#">BLOG</a></li>
                    <li class="nav-item"><a href="about.html">ABOUT</a></li>
                    <li class="nav-item"><a href="contact.html">COLLABORATION</a></li>
                  </ul>`;
}
