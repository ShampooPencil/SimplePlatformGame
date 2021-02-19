// CLASSES IN ES6


// In this lesson we'll explain how to create a class that can be used 
// to create multiple objects of the same structure.
// A class uses the keyword class and contains a constructor method
// for initializing.
// For example:
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
// A declared class can then be used to create multiple 
// objects using the keyword new.
// For example:
const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3);
// Class Declarations are not hoisted while Function Declarations are. 
// If you try to access your class before declaring it, 
// ReferenceError will be returned.

// You can also define a class with a class expression,
// where the class can be named or unnamed.
// A NAMED class looks like:
var Square = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
// In the UNNAMED class expression,
// a variable is simply assigned the class definition:
var Square = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
// The constructor is a special method which is used for
// creating and initializing an object created with a class.
// There can be only one constructor in each class.

