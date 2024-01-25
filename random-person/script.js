
const loadUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = data =>{
    console.log(data.results[0])
    const info = data.results[0];
    const name = info.name.first + ' ' + info.name.last;
    const email = info.email
    const phone = info.cell
    const location = info.location.city + ' , ' + info.location.country
    const picUrl = info.picture.medium

    
    document.getElementById('img-id').src = picUrl
    document.getElementById('name-id').innerHTML = name
    document.getElementById('email-id').innerHTML = email
    document.getElementById('phone-id').innerHTML = phone
    document.getElementById('address-id').innerHTML = location


    
   
}

loadUser()

