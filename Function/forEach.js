//forEach loop in array
// arr.forEach(callBackFunction)

// CallbackFunction: Here, it is a function to execute for each element in the array
// *A callback is a function passed as an argument to another function.
//arr.forEach((value, index, array))
let arr=[1,2,3,4,5];
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
})