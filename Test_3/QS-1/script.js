//With Let:

let x = 10;
let y = 20;
//Change the value of x
let x = 30;
console.log(x + y);

//With Const:

// const a = 10;
const b = 20;
//Change the value of a
const a = 30; //It will throw an error because we can't reassign the value of a constant variable.
console.log(a + b);