// Syncronas data

const loadData = () => {
    console.log('ami prothom')
    console.log('ami second')
    console.log('ami third')
    const result = 10 + 10
    console.log(result)
    console.log('ami fourth')
}

// loadData()

const loadData1 = () => {
    console.log('ami prothom')
    console.log('ami second')
    setTimeout(() => {
        console.log('ami set time out')
    }, 1000)
    console.log('ami third')
    const result = 10 + 10
    console.log(result)
    console.log('ami fourth')
}
// loadData1()


const loadData2 = async () => {
    try {
        console.log('ami prothom')
        console.log('ami second')

        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(res => res.json())
        //     .then(data => console.log(data))

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        console.log(data)

        console.log('ami third')
        const result = 10 + 10
        console.log(result)
        console.log('ami fourth')
    } catch (err) {
        console.log('error', err)
    }
}
// loadData2()
