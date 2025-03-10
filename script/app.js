const person = {
    name: 'hena',
    age: 10,
    friends: ['hero alom', 'jayed khan'],
    status: true,
}

// JSON
// converted to json
const newPerson = JSON.stringify(person)
// console.log(newPerson)

// conveted to object
const newPerson2 = JSON.parse(newPerson);
// console.log(newPerson2)