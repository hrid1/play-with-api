const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json()
    .then(data => displayCountry(data.slice(0, 12))))
}

const displayCountry = data => {
    
    const parentDiv = document.getElementById('country-div');
    parentDiv.innerHTML = '';

        data.forEach(country => {
        console.log(country.cca2);
        const newCountry = document.createElement("div");
        newCountry.innerHTML = `
        <div class="card w-auto bg-gray-900 shadow-xl h-full">
        <figure class="px-4 pt-4">
          <img src="${country.flags.png}" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${country.name.common}</h2>
          <p class="text-lg">Population: ${country.population}</p>
          <div class="card-actions">
            <button class="btn btn-primary" onclick="my_modal_5.showModal(); loadCountryDetails('${country.cca2}')"> Details</button>

            
          </div>
        </div>
      </div>
        `
        parentDiv.appendChild(newCountry);
    })  
}


loadCountry();


const loadCountryDetails = (code) => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
}

const displayCountryDetails = data => {
    // console.log(data);
    const country = data[0];
    console.log(country);
    document.getElementById('modal-info').innerHTML = 
       `
          <img src="${country.flags.png}" />
          <h3 class="font-bold text-lg mt-2">${country.name.common}</h3>
          <p class="py-4">Population: ${country.population}</p>
    
          `
    

}

// show all button 

const showAllCountry = () => {

  // load all the data
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))


    // btn hidden
  const showBtn =document.getElementById('show-all-btn');
  showBtn.classList.add('hidden');

}

