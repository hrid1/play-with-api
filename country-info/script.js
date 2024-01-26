const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}

const CountryparentDiv = document.getElementById('country-div');

const displayCountry = data => {
    data.forEach(country => {
        const flagImg = country.flags.png;
        const name = country.name.common;
        const area = country.area;
        const capital = country.capital[0];
        const code = country.cca2;

        console.log(code)
        
        
        const newCountry = document.createElement('div');
        newCountry.classList.add("each-country")
        newCountry.innerHTML = `

        <div>
            <img src="${flagImg}" alt="country-img">
            <h2>Name: ${name}</h2>
            <button onclick="detailCountry('${code}')" class="btn-detail">For Details</button>
        </div>
        
        `

        CountryparentDiv.appendChild(newCountry)

    });
}

loadCountry();
//  <h3>Capital: ${capital}</h3>
{/* <h3>Area: ${area}</h3> */}

// ------------------------------- btn ------------------------

const detailCountry = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json())
    .then(data => displayDetailCountry(data))

    // console.log(code)
}

const displayDetailCountry = (data) => {
    const country = data[0];
    
    const flagImg = country.flags.png;
    const name = country.name.common;
    const capital = country.capital[0];
    const area = country.area;
    const region = country.region;

    console.log(name, capital, area, region, flagImg)

    const detailParent = document.getElementById('target-country');
    detailParent.innerHTML = `
                    
               <div>
                    <img src="${flagImg}" alt="pic">
                </div>

                <div>
                    <h1>Name: ${name}</h1>
                    <h2>Capital: ${capital}</h2>
                    <h2>Area: ${area}</h2>
                    <h2>Region: ${region}</h2>
                </div>
    `
    

}

// detailCountry()