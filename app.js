

// Click handler
document.getElementById('get-fact').onclick = () => {
    // API request
    fetch('https://catfact.ninja/fact')
        .then((response) => {
            return response.json();
        })
        .then(data => {
            document.getElementById('cat-fact').innerHTML = data.fact
        })
}
