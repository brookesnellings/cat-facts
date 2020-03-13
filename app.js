

// Click handler
document.querySelector('.get-fact').onclick = () => {
    // API request
    fetch('https://catfact.ninja/fact')
        .then((response) => {
            return response.json();
        })
        .then(data => {
            document.querySelector('.cat-fact').innerHTML = data.fact
        })
}
