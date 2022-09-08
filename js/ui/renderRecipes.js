export function renderRecipes(recipesToRender) {
  const recipesContainer = document.querySelector("#posts-container");
  recipesContainer.innerHTML = "";

  recipesToRender.forEach(function (recipe) {
    recipesContainer.innerHTML += `<>`;
  });
}
