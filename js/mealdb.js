const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  if (searchField.value == 0) {
    alert("Please select");
  } else {
    //   console.log(searchField.value);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => displaySearchResult(data.meals));
    searchField.value = "";
  }
};

const displaySearchResult = (meals) => {
  console.log(meals);
  const searchResult = document.getElementById("search-result");
  console.log(searchResult);
  searchResult.innerHTML = "";
  const noFound = document.getElementById("not-found");

  if (meals == null) {
    noFound.style.display = "block";
  } else {
    meals.forEach((meal) => {
      // console.log(meal);
      const div = document.createElement("div");
      div.classList.add("collapsed");
      div.innerHTML = `
        <div onclick="loadMealDetil(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">
             ${meal.strInstructions.slice(0, 200)}
          </p>
        </div>
      </div>
        `;
      searchResult.appendChild(div);
    });
  }

  //   console.log(meals);
};
const loadMealDetil = (mealId) => {
  //   console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMealDetails(data.meals[0]));
};
const displayMealDetails = (meal) => {
  console.log(meal);
  const mealDetils = document.getElementById("meal-detils");
  mealDetils.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
   
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="">${meal.strMeal}</h5>
    ${meal.strInstructions.slice(0, 200)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  
</div>
  `;
  mealDetils.appendChild(div);
};
