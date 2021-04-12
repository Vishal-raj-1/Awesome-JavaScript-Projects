// all the variables

const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
let darkMode = localStorage.getItem('darkMode');
const checkbox = document.getElementById('checkbox');

// all the event listeners

checkbox.addEventListener('change',()=>{
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
})

searchBtn.addEventListener('click',getMealList);
mealList.addEventListener('click',getMealRecipe);
recipeCloseBtn.addEventListener('click',()=>{
    mealDetailsContent.parentElement.classList.remove('showRecipe');
})

//all the functions

// toggle between light and dark theme

const enableDarkMode =()=>{
    //add the darkmode class to the body
    document.body.classList.add('dark-mode');
    console.log('darkmode added');
    //update the darkmode in localstorage
    localStorage.setItem('darkMode','enabled');
}

const disableDarkMode =()=>{
    //remove darkmode class from the body
    document.body.classList.remove('dark-mode');
    console.log('darkmode removed');
    //update the darkmode in localstorage
    localStorage.setItem('darkMode',null);
}

// if the dark mode is enabled

if(darkMode == "enabled"){
    enableDarkMode();
    checkbox.checked = true;
}

//get meal list that matches with the ingredients

function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim(); // to get the value of search input value
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data =>{
        let html = '';
        if(data.meals){
console.log(data);
console.log(data.meals);
            data.meals.forEach(meal =>{
                html +=`
                    <div class="meal-item" data-id ="${meal.idMeal}">
                        <div class="meal-img">
                                <img src="${meal.strMealThumb}" alt="food">
                        </div>
                        <div class="meal-name">
                                <h3>${meal.strMeal}</h3>
                                <a href="#" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                
                `;
            });
            mealList.classList.remove('not-found');
        }else{
            html = "Unable to find any meal";
            mealList.classList.add('not-found');
        }       
        mealList.innerHTML = html;
    });
}

//get recipe of the meal

function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data=> getMealRecipeModal(data.meals));
    } 
}

// create a model

function getMealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let ingredients =[]; // to get the meal ingredients

    for( let i =1; i <=20 ;i++){
        if(meal['strIngredient'+i]){
            ingredients.push(`${meal['strIngredient'+i]}
            -${meal['strMeasure'+i]}`)         
        } else{
            break;
        }
    }
    let html = `
    <h2 class="recipe-title">${meal.strMeal}</h2>
    <p class="recipe-category">${meal.strCategory}</p>
    <div class="recipe-instruct">
        <h3>Instructions:</h3>
        <p>${meal.strInstructions}</p>
    </div>
    <div class = 'recipe-ingredients'>
    <h3> Ingredients: </h3>
        <ul>
        ${ingredients.map((i)=>`<li> ${i}</li>`).join("")}
        </ul>
    </div>
    <div class="recipe-meal-img">
        <img src="${meal.strMealThumb}" alt="">
    </div>
    <div class="recipe-link">
        <a href="${meal.strYoutube}" target="blank"> Watch Video</a>
     </div>   
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}