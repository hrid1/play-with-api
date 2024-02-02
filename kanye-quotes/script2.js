const loadQuote = async () => {
    const res = await fetch('');    // here put the link
    const data = await res.json();
    displayQuote(data);
}

const displayQuote = data => {
    console.log(data)
}

const loadQuote2 = async() => {
    const res = await fetch('url');
    const data = res.json();
    console.log(data)
}