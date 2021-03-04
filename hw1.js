//Define a variable with the let keyword
let a = 2;

//reassign value to something new
a = 3;

//define a constant variable with a number, string, or boolean value
const b = 5;

//define a variable using the "var" keyword inside of an if statement. Just pass true into the conditional statement so our if block always executes.
let c = 1;
if (c==1){
    var d = 2;
}

// console log your "var" variable defined in your if stmt
console.log(var);

//define a variable using the "let" keyword inside of an if statement. Just pass true into the conditional statement so our if block always executes

// console log your "let" variable defined in your if stmt. This should cause an error, you can just comment it out
console.log(let);

//try to reassign the value of your constant value, should result in an error. Comment it out afterwards
b = 6;

//define a constant variable with the value being an empty array
const cities = [""];

//push three values onto your array, notice there is no error. If you want log the object to see if it is populated
cities.push("Atlanta", "Augusta", "Athens");

//define a constant variable with the value being an empty object
const obj1 ={};

//define a property of name with your name as the value, define a property of age with your age as the value, console.log it if you want to check
Object.defineProperty(obj1 {
    value: LaKeisha
})

//using a template literal write the name you just stored in our constant object to write 'hello I am (your name here)'

//define a function named greet, that takes in de-structured object parameters of name & age. The function should write 'Hello I am (your name here) and I am (your age here) years old.' You should write this as a template literal. call your function.
function greet(){

}

//Using object destructuring create two variables name & age from your constant object we've been working with. console.log both

//define an arrow function that accepts no parameters and console logs hello world store it in the variable arrow1, call your function

//define an arrow function that accepts 1 parameter of str and console logs that parameter store it in a variable named arrow2, call your function pass in any parameter you like

//write an arrow function that takes two numbers as parameters, and returns the result, *you are NOT allowed to use the return keyword* store your arrow function in a variable named arrow3, call your function. HINT: you'll have to console.log the function call to see the result since we are returning it.

//add validation to the previous function under the variable arrow4, if something else is passed return an error string like "Error, must pass in a valid number" you'll have to use the return keyword to do this that is fine.

//using setTimeout, pass in an arrow function as a callback, the function can do whatever you like preferably something I can see in the console or on the DOM. Don't make me wait longer than 3 seconds please.

//Using a for of loop console log each element of our constant array we defined above

//Using a for in loop console log each value of our constant object we defined above
