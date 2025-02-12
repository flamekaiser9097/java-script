// Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+.
let students=[67,99,45,67,98,45,90,34];
let above90=students.filter((val)=>{
    return val>90;
})
console.log(above90);


// Qs. Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.
let n= prompt('enter a number')
let arr=[];
for( let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
let sum =arr.reduce((prev,curr)=>{
    return prev+curr;
})
console.log('sum:'+sum);

let factorial=arr.reduce((prev,curr)=>{
    return prev*curr;
})
console.log('factorial:'+factorial);