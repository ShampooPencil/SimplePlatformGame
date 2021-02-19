var param = 'size'
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase()
        + param.slice(1)]: 4//param.slice(1) just means the rest of the array item will show. This case it is the second character of the item and every character after.
    //example, param.slice(1) (the item in the array is 'size')just adds 'ize' because slice just shows the number in the character and show the character and all the characters after that in that item(size)ok.....i get it lol.
}
console.log(config.mobileSize)

// Object.assign() in ES6
// ES6 adds a new Object method assign() that allows us to combine multiple sources into one target to create a single new object.
// Object.assign() is also useful for creating a duplicate of an existing object.

// Let's look at the following example to see how to combine objects:
// let person = {
//     name: 'Jack',
//     age: 18,
//     sex: 'male'
// }
// let student = {
//     name: 'Bob',
//     age: 20,
//     xp: '2'
// }
// let newStudent = Object.assign({}, person, student)
// console.log(newStudent)
// Here/\/\/\/\ we used Object.assign() where the first parameter is the target object you want to apply new properties to.
// Every parameter after the first will be used as sources for the target. There are no limitations on the number of source parameters. However, order is important because properties in the second parameter will be overridden by properties of the same name in third parameter, and so on.

// In the example above, we used a new object {} as the target and used two objects as sources.
// Try changing the order of second and third parameters to see what happens to the result.
// To avoid this (mutations), use Object.assign() to create a new object.
// For example:
// let person = {
//     name: 'Jack',
//     age: 18
// }
// let newPerson = Object.assign({}, person)
// newPerson.name = 'Bob'
// console.log(person.name) // Jack
// console.log(newPerson.name) //Bob

// Finally, you can assign a value to an object property in the Object.assign() statement.
// For example:
let person = {
    name: 'Jack',
    age: 18
}
let newPerson = Object.assign({}, person, { name: 'Bob' })

