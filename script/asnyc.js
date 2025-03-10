// const handleUser = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => console.log('error dhorchi', error))

// }

// handleUser()


const handleUser2 = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }
    catch {
        console.log('hi error.')
    }
}
handleUser2()