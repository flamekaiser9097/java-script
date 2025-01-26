// for in loop
// can be used for objects and arrays
// retun keys of the value

let student={
    name:'sanjay kumar',
    age:24,
    cgpa:6.59,
    grade:'pass',
};

for(let key in student){
    console.log('key=',key,'value=',student[key]);
}