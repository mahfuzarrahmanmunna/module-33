// console.log(1)
// console.log(2)
// console.log(3)

let count = 0;
const clockID = setInterval(() => {
    count++
    // console.log(count)
    // clearInterval(clockID)

    if (count >= 5) {
        clearInterval(clockID)
    }
}, 200);
// console.log(clockID)

// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)



// setTimeout(() => {
//     console.log('Hello')
// }, 2000)
