const loadFood = (name) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(res => res.json())
    .then(data => displayFood(data))
}
const allFood = document.getElementById("all-food");



const displayFood = data => {    
    console.log(data)
    allFood.innerHTML = ' ';
    for (item of data.meals){
        const newFood = document.createElement('div')
        newFood.classList.add("col")
        newFood.innerHTML = `
            <div class="card">
                <img src="${item.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.strMeal}</h5>
                    <p class="card-text">This is a longer card with  content. This content is a little bit longer.</p>
                </div>
            </div>


                <div class="text-center">
                    <button onclick="mealDetails(${item.idMeal})" type="button" class="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#foodModal">
                    Details View
                    </button>
                </div>
        `
        allFood.appendChild(newFood);
    }
}


const getName = () => {
    searchFood = document.getElementById("searchText").value;
    // console.log(searchFood); 
    loadFood(searchFood); 
}


// ------------------model detail showing --------------------
 const mealDetails = mealId => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(data => displayMealDetails(data));
 }


 const displayMealDetails = data => {
    console.log(data.meals[0]);
    document.getElementById('mealPic').src = data.meals[0].strMealThumb;
    document.getElementById('mealName').innerText = data.meals[0].strMeal;
    document.getElementById('country-id').innerText = data.meals[0].strArea;
    
 }


