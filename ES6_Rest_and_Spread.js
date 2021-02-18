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
const foo = [1, 2, 3, 4, 5]
const [bar, baz, ...rest] = foo
console.log(bar) //1 
console.log(baz) //2 
console.log(rest) //3, 4, 5 
console.log(foo) //1,2,3,4,5