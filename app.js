

// Click handler
document.querySelector('.getFact').onclick = () => {
    // API request
    fetch('https://catfact.ninja/fact')
        .then((response) => {
            return response.json();
        })
        .then(data => {
            let fact = document.createElement('div')
            fact.className = 'catFact'
            fact.innerHTML = data.fact;
            let el = document.getElementsByClassName('factContainer')[0];
            el.appendChild(fact);

        })
}
