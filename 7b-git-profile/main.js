const loadUser = () => {
    fetch('https://api.github.com/users/programminghero1')
    .then(res => res.json())
    .then(dt => displayUser(dt))
} 



// formate date
function formatDate(inputDateString) {
    const createdAtDate = new Date(inputDateString);
    const formattedDate = createdAtDate.toISOString().split('T')[0];
    return formattedDate;
  }

const displayUser = data => {

    document.getElementById('pic-id').src = data.avatar_url;

    document.getElementById('name-id').innerText = data.name;
    document.getElementById('joined-date').innerText = formatDate(data.created_at);
    document.getElementById('bio-id').innerText = data.bio == null ? "There is no bio!": data.bio;
    document.getElementById('total-repo').innerText = data.public_repos;
    document.getElementById('folllowers').innerText = data.followers;
    document.getElementById('following').innerText = data.following;
    document.getElementById('loaction').innerText =  data.location == null ? 'Dhaka, BD': data.location;
    document.getElementById('twitter').innerText = data.twitter_username == null ? 'Not Availble': data.twitter_username;
    document.getElementById('blog').innerHTML = data.blog;


    

}

loadUser()