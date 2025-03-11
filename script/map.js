
// Old model
const numbers = [1, 2, 3, 4, 5, 6];

let temp = []
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    const sum = element + 1;
    temp.push(sum)
}
// console.log(temp)




// New model ==== I mean ES6

const newArray = numbers.map(value => value + 1)
// console.log(newArray)
const square = numbers.map(value => value * value)
// console.log(square)

const arrayOfHero = ['hiro alom', 'shakib khan', 'jayed khan', 'bapparaj'];
const heros = arrayOfHero.map(e => e)
// console.log(heros)