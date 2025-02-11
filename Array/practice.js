// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.
let students=[85, 97, 44, 37, 76, 60];
let total=0;
for(let marks of students){
    total += marks;
}
let avg=total/students.length;
console.log(`The average marks of the entire class is: ${avg}`);

//Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let items=[250, 645, 300, 900, 50];
let i=0;
for(let val of items){
    let offer=val/10;
    items[i]=val-offer;
    i++;
}
console.log(items);