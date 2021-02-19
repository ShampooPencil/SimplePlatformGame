// ES6 Rest Parameters


// Prior to ES6, if we wanted to pass a variable number of arguments to a function, we could use the arguments
// object, an array-like object, to access the parameters passed to the function.
// For example, let's write a function that checks if an array contains all the arguments passed:
function containsAll(arr) {
    for (let k = 1; k < arguments.length; k++) {
        let num = arguments[k];
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}
let x = [2, 4, 6, 7];
console.log(containsAll(x, 2, 4, 7));
console.log(containsAll(x, 6, 4, 9));
//We can pass any number of arguments to the function and 
//access it using the arguments object.
//While this does the job, ES6 provides a more readable
//syntax to achieve variable number of parameters by using a rest parameter:
function containsAll(arr, ...nums) {
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}
// /\/\/\/\/\The ...nums parameter is called a rest parameter.
//  It takes all the "extra" arguments passed to the function. 
// The three dots (...) are called the Spread operator.
// Only the last parameter of a function may be marked as a rest parameter.
// If there are no extra arguments, the rest parameter will simply be an empty
// array; the rest parameter will never be undefined.
//BETTER EXAMPLE:
//Example: 
// const foo = [1, 2, 3, 4, 5]
// const [bar, baz, ...rest] = foo
// console.log(bar) //1 
// console.log(baz) //2 
// console.log(rest) //3, 4, 5 
// console.log(foo) //1,2,3,4,5

///**********in the future use CTRL + SHIFT + P to open command palette then 
//just type uppercase and it will transform the highlighted text to uppercase *****/
// THE SPREAD OPERATOR*******
// This operator is similar to the Rest Parameter, 
// but it has another purpose when used 
// in objects or arrays or function calls (arguments).
// SPREAD IN FUNCTION CALLS
// It is common to pass the elements of an array as arguments to a function.
// Before ES6, we used the following method:
// function myFunction(w, x, y, z) {
//     console.log(w + x + y + z);
// }
// var args = [1, 2, 3];
// myFunction.apply(null, args.concat(4)); //10

//ES6 provides an easy way to do the example above with spread operators:
const myFunction = (w, x, y, z) => {
    console.log(w + x + y + z);
}
let args = [1, 2, 3];
myFunction(...args, 4);

// Example:
var dateFields = [1970, 0, 1]; // 1 Jan 1970
var date = new Date(...dateFields);
console.log(date);

// SPREAD IN ARRAY LITERALS
// Before ES6, we used the following syntax to add an 
// item at middle of an array:
// var arr = ["One", "Two", "Five"];
// arr.splice(2, 0, "Three");
// arr.splice(3, 0, "Four");
// console.log(arr);
// You can use methods such as push, splice, and concat, for example,
// to achieve this in different positions of the array. However,
// in ES6 the spread operator lets us do this more easily:
let newArr = ['Three', 'Four'];
let arr = ['One', 'Two', ...newArr, 'Five']; //basically does a splice, push, and concat without tying the syntax of those syntaxes 
console.log(arr); // ["One", "Two", "Three", "Four", "Five"]


// SPREAD IN OBJECT LITERALS
// In objects it copies the own enumerable properties 
// from the provided object onto a new object.
// const obj1 = { foo: 'bar', x: 42 };
// const obj2 = { foo: 'baz', y: 5 };

// const cloneObj = { ...obj1 }; // { foo: "bar", x: 42}
// const mergedObj = { ...obj1, ...obj2 }; // { foo: "baz", x: 42, y: 5 } (i think 2nd foo overrides the first foo value in this case. )
// However, if you try to merge them you will not 
// get the result you expected:
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 5 };
const merge = (...objects) => ({ ...objects });
// {0 : {foo: 'bar', x: 42, }, 1: { foo: 'baz', y: 5}}
let mergedObj2 = merge({}, obj1, obj2);
console.log(mergedObj2);
// {0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 5}}
// Shallow cloning or merging objects is possible 
// with another operator called Object.assign().

//GOOD EXAMPLE OF REST:
// WHAT IS THE OUTPUT OF THE FOLLOWING CODE?
let nums = [3, 4, 5];
let all = [1, 2, ...nums, 6];
console.log(all[3]); // 4 because all becomes [1,2,3,4,5,6]. 4 is the 3 in the 0 index
