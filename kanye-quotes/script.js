const loadQuote = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data =>displayQuote(data))
}

const displayQuote = data => {
    console.log(data.quote)

    const quoteBody = document.getElementById('quote-id');
    quoteBody.innerHTML = data.quote;
}


// loadQuote();