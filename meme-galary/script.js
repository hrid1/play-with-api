console.log("This is connected")

const getMeme = () => {
    fetch('https://meme-api.com/gimme/wholesomememes/20')
    .then(res => res.json())
    .then(data => displayMeme(data.memes))
}

const displayMeme = (data) => {
    // console.log(data);

    const memeContainer = document.getElementById('meme-div');
    data.forEach(meme => {

        console.log(meme.url)
        const newMeme = document.createElement('div');
        newMeme.innerHTML = `
        <img src="${meme.url}"  alt="Album" class="rounded"/>
        </div>
        `
        

        memeContainer.appendChild(newMeme);
        
    });
}




getMeme();