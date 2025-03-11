const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'http://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/users'
]

Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json()).then(data => data)
}))
    .then(res => res)
    // .then(data => console.log(data))
    .catch(err => console.log(err))