// Map
// Creates a new array with the results of some operation. The value its callback returns are used to form new array
// arr.map(callbackFnx(value, index, array))
let num=[2,4,6,8,10];
let newArr=num.map((val)=>{
    return val**2;
})
console.log(newArr);

// Filter
// Creates a new array of elements that give true for a condition/filter. Eg: all even elements

let arr=[1,2,3,4,5,6,7,8,9];
let evenArr=arr.filter((val)=>{
    return val%2===0;
})
console.log(evenArr);



// Reduce
// Performs some operations & reduces the array to a single value. It returns that single value.
let arr1=[1,2,3,4];
let output=arr1.reduce((res,curr)=>{
    return res+curr;
})
console.log(output);

//print largest number in the array
let arr2=[67,56,89,99,75,87];
let greater=arr2.reduce((prev,curr)=>{
    return prev>curr?prev:curr;
})
console.log(greater);

//print largest number in the array
let arr3=[34,56,89,99,75,87];
let smallest=arr3.reduce((prev,curr)=>{
    return prev<curr?prev:curr;
})
console.log(smallest);