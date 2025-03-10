document.getElementById('index-js').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => {
            // console.log(...data);
            showUser(data)
        })
})

const showUser = (users) => {
    let containerUsers = document.getElementById('users');
    for (let user of users) {
        const li = document.createElement('li');
        li.innerText = user.id + ' '+ user.name;
        containerUsers.appendChild(li)
    }
    // console.log(...users)
}