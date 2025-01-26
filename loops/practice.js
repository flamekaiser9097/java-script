// print all even numbers 0 to 50
let n=50;
for(let i=0;i<=n;i++){
    if(i%2==0){
        console.log('even',i);
    }
}

// print all odd numbers 0 to 50
let num=50;
for(let i=0;i<=num;i++){
    if(i%2!==0){
        console.log('odd',i);
    }
}

// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

let gameNum=25;
let userNum=prompt('Guess the game number:')
while(gameNum!=userNum){
   userNum= prompt("You enterd wrong number. Guess again: ")
}
console.log('congratulation you enterd the right number');