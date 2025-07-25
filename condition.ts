let age1: number = Number(prompt("Enter The Age:"));

if (age1 >= 18) {
  console.log("You're eligible for voting");
} else {
  console.log("You're not eligible for voting");
}

// some other 
let input = prompt("Enter the number:");
let num: number = input ? Number(input) : 0;

if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}