const loadPhone = phone => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`)
    .then(res => res.json())
    .then(info => displayPhone(info.data))
}

const phoneContainer = document.getElementById('phone-div');

const displayPhone = info => {
    phoneContainer.innerHTML = '';
    // display 10 phones only
    info = info.slice(0, 10)

    // display no phone found
    const noPhone = document.getElementById("no-found-msg");
    if (info.length === 0){
        noPhone.classList.remove('d-none');
    }
    else {
        noPhone.classList.add('d-none');
    }
    // loop start here
    for(let item of info){
       
        const newPhone = document.createElement('div');
        newPhone.classList.add('col');
        newPhone.innerHTML = `

        <div class="card">
            <img src="${item.image}" class="card-img-top img-fluid p-1" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below a longer.</p>
            </div>
        </div>
        `
        phoneContainer.appendChild(newPhone);
    };
    // stop loader
    loadingAdd(false);
}

// loading adding section
const loadingAdd = isOn => {
    const load = document.getElementById('loader');
    if(isOn) {
        load.classList.remove('d-none');
    }
    else {
        load.classList.add('d-none');
    }
}

// get the search data 
const searchPhone = () => {
    loadingAdd(true)
    const phoneName = document.getElementById("search-box").value;
    loadPhone(phoneName);
}






