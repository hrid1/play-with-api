


const getCategory = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data))
}

const displayCategory = (data) => {

    const allCategory = data.data.news_category;
   
    const allCategoryDiv = document.getElementById('category-items');
   
    
    allCategory.forEach(eachCategory => {
        allCategoryDiv.innerHTML += `<li onclick="loadNewsById('${eachCategory.category_id}')">${eachCategory.category_name}</li>`
        
    });

}


// load news for each category start
const loadNewsById = category_id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayNewsByCategory(data.data))
}

loadNewsById('02')

const displayNewsByCategory = (data) => {
    // console.log(data);
    document.getElementById('total_news').innerText = data.length;
    const all_news_conatainer = document.getElementById('all-news-div');
    all_news_conatainer.innerHTML = '';
    data.forEach(news => {
        console.log(news)

        const new_news = document.createElement('div');
        new_news.innerHTML = `
        <div class="card lg:card-side bg-base-300 shadow-xl h-72 p-5">
        <figure class="w-1/3"><img src="${news.image_url}" alt="Album"/></figure>
        <div class="card-body">
          <h2 class="card-title">${news.title}</h2>
          <p>Click the button to listen on Spotiwhy app. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, corporis ratione eaque voluptatum accusantium culpa ut nemo sequi inventore quisquam!</p>
          <p>Clcorporis ratione eaque voluptatum accusantium culpa Lorem ipsum dolor sit. ut nemo sequi inventore quisquam!</p>
          <div class="card-actions justify-between  items-center">
            <div class="flex gap-4 items-center">
                <!-- pic -->
                <div class="bg-yellow-500 h-12 w-12 rounded-full">

                    <img class="w-full h-full object-cover rounded-full" src="https://images.pexels.com/photos/879474/pexels-photo-879474.jpeg?cs=srgb&dl=pexels-dax-aslaliya-879474.jpg&fm=jpg" alt="">
                </div>
                <!-- name and dot -->
                <div>
                    <h1>Jane Coper</h1>
                    <h1>Jan 10, 2022</h1>
                </div>
            </div>

            <h1 class="font-semibold">1.5M</h1>

            <div>

                <span class="material-symbols-outlined text-yellow-500">   star_rate </span>
                <span class="material-symbols-outlined text-yellow-500">   star_rate </span>
                <span class="material-symbols-outlined text-yellow-500">   star_rate </span>
                <span class="material-symbols-outlined text-yellow-500">   star_rate </span>
                <span class="material-symbols-outlined text-yellow-500">  star_rate_half </span>
               
            </div>
            <button class="btn btn-primary">More</button>
          </div>
        </div>
      </div>
        `
        all_news_conatainer.appendChild(new_news);
    });
    
}
// end news load each category