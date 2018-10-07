window.addEventListener('load', event => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=12')
    .then(response => response.json())
    .then(json => {createResults(json)})
});

function createResults(data) {
    let resultsContainer = document.querySelector('.results');
    resultsContainer.innerHTML = data.map(createResult).join('\n');
}

function createResult(result) {
    return `<div class="result">
            <img src="${result.thumbnailUrl}">
            <p class="content">${result.title}</p>
            </div>`
}