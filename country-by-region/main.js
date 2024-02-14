const loadCountry = region => {

    // https://restcountries.com/v3.1/region/europe
    // 'https://restcountries.com/v3.1/all'


//    console.log(region)
   if (region == 'none'){
        url = 'https://restcountries.com/v3.1/all'
   }
   else {
        url=`https://restcountries.com/v3.1/region/${region}`;
   }

    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const parentContainer = document.getElementById('country-div');
//  parentContainer.innerHTML = " ";


const displayCountry = data =>{
    parentContainer.innerHTML = " ";
    data.forEach(country => {
       
        const countryPic = country.flags.png;
        const countryName = country.name.common;
        const countryRegion = country.region ;

        const newCountry = document.createElement('div');
        newCountry.innerHTML = `
        <div class="each-country-div">
            <img src=${countryPic} alt="">
            <h2>Country : ${countryName}</h2>
            <h3>Region : ${countryRegion}</h3>
        </div>
        `
        parentContainer.appendChild(newCountry)
    });
}

//---------------------button call-----------------------

const getRegion = () => {
    const region = document.getElementById('select-region');
    regionText = region.value;
    console.log(regionText);
    loadCountry(regionText);
}

