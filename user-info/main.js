const loadInfo = () => {
    fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(res => res.json())
    .then(data => displayInfo(data))
}

const displayInfo = data => {

        const divCard = document.getElementById('card-container');
        divCard.innerHTML = '';
        data.forEach(info => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML = `
        <div class="card h-100">
        <img src="${info.thumbnailUrl}" alt="...">
        <div class="card-body">
          <h3 class="card-title">Id: ${info.id}</h3>
          <p class="card-text">${info.title}</p>      
        </div>

        
        <div class="text-center p-1"> 
        <button class="bg-primary text-white w-75 rounded"  data-bs-toggle="modal" data-bs-target="#pictureModal" onclick="cardDetails(${info.id})">
            Details
         </button>
        </div>

         </div>
        `
        divCard.appendChild(newDiv);
        
    });
}

loadInfo();


console.log('cardDetails')
const cardDetails = cardId => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${cardId}`)
    .then(res => res.json())
    .then(data => displayCardDetails(data))
    // console.log(cardId);
}


const displayCardDetails = data =>{
    console.log(data);
    document.getElementById('model-div').innerHTML = 
    `
    <div>
        <img src="${data.url}" alt="" class="img-fluid">
        <h2>ID: ${data.id}</h2>
        <h4>Titile: ${data.title}</h4>
    </div>
    `

}
// cardDetails(10)