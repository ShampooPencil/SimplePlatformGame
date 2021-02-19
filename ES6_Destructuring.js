// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// ES6 has added a shorthand syntax for destructuring an array.
// The following example demonstrates how to unpack the elements of an array into distinct variables:
// let arr = ['1', '2', '3'];
// let [one, two, three] = arr;
// console.log(one)  //1
// console.log(two) // 2
// console.log(three) //3
// We can use also destructure an array returned by a function.
// For example:
// let a = () => {
//     return [1, 3, 2];
// }
// let [one, , two] = a()
// console.log(one)
// The destructuring syntax also simplifies assignment and swapping values:
// let a, b, c = 4, d = 8;
// [a, b = 6] = [2]; // a = 2, b = 6
// [c, d] = [d, c]; // c = 8, d = 4 
// // What is the output of the following code?
// let names = ['John', 'Fred', 'Ann'];
// let [Ann, Fred, John] = names;
// console.log(John);// 'Ann'



// Similar to Array destructuring, Object destructuring unpacks properties into distinct variables.
// For example:
// let obj = { h: 100, s: true };
// let { h, s } = obj;
// console.log(h); // 100
// console.log(s); // true


//  We can assign without declaration,
//  but there are some syntax requirements for that:
// let a, b;
// ({ a, b } = { a: 'Hello ', b: 'Jack' });
// console.log(a + b); // Hello Jack
// console.log(a)
// The () with a semicolon (;) at the end are mandatory when destructuring without a declaration.
// However, you can also do it as follows where the () are not required:
let { a, b } = { a: 'Hello ', b: 'Jack' };
console.log(a + b); // Hello Jack


// You can also assign the object to new variable names.
// For example:
var o = { h: 42, s: true };
var { h: foo, s: bar } = o;
//console.log(h); //Error because (i think) h is the new value but foo is the not really value, just a var
console.log(foo) // 42 because its the value of foo. the value of h is foo.


// Finally you can assign default values to variables,
// in case the value unpacked from the object is undefined.
// For example:
var obj = { id: 42, name: "Jack" };
let { id = 10, age = 20 } = obj;
console.log(id); // 42
console.log(obj.name); // Jack



