//Tempelate literals
//A way to have embedded expressions in strings

let str1=`This is a templete literals ${1+2+3}`
console.log(str1);
console.log(typeof str1);

let obj={
    item:'pen',
    price:20,
}
let output=`the cost of ${obj.item} is ${obj.price} rupees`
console.log(output);
