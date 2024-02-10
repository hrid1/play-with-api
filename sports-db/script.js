console.log("conneted")

const loadPlayer = () => {
    const input = document.getElementById('input-text');
    const inputText = input.value;
    input.value = " ";
    // console.log(inputText);

    const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputText}`

    fetch(URL)
    .then(res => res.json())
    .then(data => displayPlayer(data.player))
}


const displayPlayer = data => {

    // if(data.length === 0 ) {
    //     document.getElementById('player-found').classList.remove('d-none');
      
    // }
    // else {
    //     document.getElementById('player-found').classList.add('d-none');
    // }

    const playerDiv = document.getElementById('player-div');
    playerDiv.innerHTML = '';

    data.forEach(player => {
        
        const { strThumb, strPlayer, strNationality, idPlayer} = player;
        // console.log(strPlayer, strThumb, strNationality, idPlayer);

        const newPlayer = document.createElement('div');
        newPlayer.classList.add('col');
        newPlayer.innerHTML = `

        <div class="card">
        <img ${strThumb} ? src="${strThumb}" : src="https://xsgames.co/randomusers/avatar.php?g=male" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${strPlayer}</h5>
          <p class="card-text">Nationality: ${strNationality}</p>
        </div>

        <div class="text-center">

        <button type="button" onclick="loadSinglePlayer('${idPlayer}')" class="btn btn-info mx-4 my-3">Details</button>
        <button type="button" class="btn btn-dark mx-4 my-2">Delete</button>

        </div>

        `
        playerDiv.appendChild(newPlayer);

        const info = document.getElementById('single-player-info');
        info.classList.add('d-none')
    });
}


const loadSinglePlayer = (idPlayer) =>{
    const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${idPlayer}`
    fetch(URL)
    .then(res => res.json())
    .then(data => displayPlayerDetails(data));
    
}


const displayPlayerDetails = data => {

    const info = document.getElementById('single-player-info');
    info.classList.remove('d-none')
   
    const playerDetails = data.players[0];
    const {strThumb, strPlayer, strNationality, strGender
    } = playerDetails;
    // console.log(strThumb, strPlayer, strNationality);
    console.log(playerDetails);

   document.getElementById('single-img').src = strThumb;
   document.getElementById('single-name').innerText = strPlayer;
   document.getElementById('single-country').innerText = strNationality;

   const teamImg =  document.getElementById('team-img');

   if(strGender == 'Male') {
        teamImg.src = 'https://pbs.twimg.com/media/FE0I7-bWUAcn5Rc.jpg:large'
   }
   else {
        teamImg.src = 'https://top-mmo.fr/wp-content/uploads/2022/04/FIFA-Best-Women-s-Player-2021-nominees.jpeg';
   }

}



