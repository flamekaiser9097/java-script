//Block of code that performs a specific task, can be invoked needed

// Function Definition
// function functionName() {
//     //do some work
// }
// function functionName(param1, param2 ...) {
// //do some work
// }

// Function Call
// functionName();

function myFunction(){
    console.log('welcome to JS!');
    console.log('we are learning JS:');
}

myFunction();

function myFunction1(msg){//parameter -> input
    //function parameters acts as local variable of function and it is block scope
    console.log(msg);
}
myFunction1('welcome to the world of js!')//argument

//function -> 2 numbers, sum
function sum(a,b){
    console.log(a+b);
}
sum(10,2);

//return in function
function mul(a,b){
    m=a*b;
    return m;
}
let val=mul(3,40);
console.log(val);