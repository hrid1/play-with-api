
const loadAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => displayAdvice(data))
}

const parentContainer = document.getElementById('main-div');

const displayAdvice = data => {
    const adviceId = data.slip.id;
    const adviceText = data.slip.advice;
    
    const newAdvice = document.createElement('div');
    newAdvice.classList.add('advice-div');
    newAdvice.innerHTML = `

    <p>Advice: #${adviceId}</p>
    <h1>
        &quot;
        ${adviceText} 
        &quot;

    </h1>
    <hr style="width: 75%;">
    <hr style="width: 50%;">

    `
    parentContainer.appendChild(newAdvice);

}

loadAdvice()