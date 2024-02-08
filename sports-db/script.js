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

    const playerDiv = document.getElementById('player-div');
    playerDiv.innerHTML = '';

    data.forEach(player => {
        // console.log(player.strPlayer)
        // console.log(player)
        const { strThumb, strPlayer, strNationality} = player;
        console.log(strPlayer, strThumb, strNationality);

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

        <button type="button" class="btn btn-info mx-4 my-3">Info</button>
        <button type="button" class="btn btn-dark mx-4 my-2">Delete</button>

        </div>

        `
        playerDiv.appendChild(newPlayer);
    });

    


}

