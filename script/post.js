document.getElementById('handlePost').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts#')
        .then(Response => Response.json())
        .then(data => {
            displayPost(data)
        })
})

function displayPost(posts) {
    const postContainer = document.getElementById('postContainer');
    for (let post of posts) {
        let div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML = `
        <h1> ${post.title} </h1>
        <p>${post.body}</p>
        <button>details </button>
        `
        postContainer.appendChild(div)
    }
}