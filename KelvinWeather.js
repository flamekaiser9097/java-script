//temperature in kelvin
const kelvin=293;
//converting temperatue from kelvin to celsius
let celsius= kelvin-273;
//converting temperatue from celsius to fahrenheit
let fahrenheit= celsius * (9/5) + 32;
// Round down
fahrenheit= Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
//converting temperatue from celsius to newton
let newton=celsius*(33/100);
// Round down
newton=Math.floor(newton);
console.log(`The temperature is ${newton}Newton.`);