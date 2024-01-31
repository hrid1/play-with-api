const loadWord=  (word)=>{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => displayWord(data))
}

const displayWord = (data) => {

    // console.log(data[0])

    // console.log(data[0].meanings[0].partOfSpeech)
    // console.log(data[0].meanings[1].definitions[1].definition)

    // console.log(data[0].meanings[1].partOfSpeech)
    // console.log(data[0].meanings[1].definitions[1])

    const wordText = document.getElementById('word-meaning-id');
    wordText.innerHTML = `
            
            <div class="word-audio">
                <h1>${data[0].word}</h1>
                <h2>Audio</h2>
            </div>
            
            <p>${data[0].phonetic}</p>

            <div class="meaning-box">
                <h4>${data[0].meanings[0].partOfSpeech}</h4>
                <h3>Meaning:</h3>
                <p>${data[0].meanings[0].definitions[0].definition}</p>
            </div>

            <div class="meaning-box">
                <h4>${data[0].meanings[1].partOfSpeech}</h4>
                <h3>Meaning:</h3>
                <p>${data[0].meanings[1].definitions[0].definition}</p>
            </div>
    `

}






function getWord(){
    const searchWord = document.getElementById('search-word');
    // console.log(searchWord.value);
    loadWord(searchWord.value)

}























