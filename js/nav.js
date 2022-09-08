export function createNav() {
  const nav = document.querySelector("#nav");

  nav.innerHTML = `<img id="toggle-btn" class="toggle-btn icon" src="../images/cheeseburger.png" />
                  <ul>
                    <li class="nav-item"><a href="index.html">HOME</a></li>
                    <li class="nav-item"><a href="posts.html">RECIPES</a></li>
                    <li class="nav-item"><a href="#">BLOG</a></li>
                    <li class="nav-item"><a href="about.html">ABOUT</a></li>
                    <li class="nav-item"><a href="contact.html">CONTACT</a></li>
                  </ul>`;
}

window.addEventListener("load", () => {
  const toggleBtn = document.querySelector("#toggle-btn");

  toggleBtn.addEventListener("click", (e) => {
    const nav = document.querySelector("#nav");
    nav.classList.toggle("show-nav");
  });
});

export function toggleNav() {
  const nav = document.querySelector("#nav");
  const toggleBtn = document.querySelector("#toggle-btn");

  nav.classList.toggle("show-nav");

  toggleBtn.addEventListener("onclick", toggleNav);
}
