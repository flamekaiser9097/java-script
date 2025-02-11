// Push(): add to end
let student=['sanjay','arun','ashish','jayant']
student.push('Ritik')
console.log(student);
// Pop(): delete from end & return
let deletedStudent=student.pop();
console.log(student);
console.log(`deleted student name is ${deletedStudent}`);
// toString(): converts array to string
console.log(student.toString());

let newStudent=['Ashirwad','rupin','Ritik2']
// Concat(): joins multiple arrays & returns result
let students=student.concat(newStudent)
console.log(students);
// unshift(): add to start
student.unshift('ronit')
console.log(student);

// shift(): delete from start & return
student.shift()
console.log(student);

// Slice(): returns a piece of the array||slice(startIdx, endidx)
console.log(student.slice(0,1));//endidx is not included
// Splice(): change original array (add, remove, replace)|| splice(startldx, delCount, newEl1...)
student.splice(1,2,'rachin','kohli')
console.log(student);