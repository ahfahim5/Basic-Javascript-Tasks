let x = [];
let y = parseInt(prompt("Enter the length of array:"));
let sum = 0;
for(let i = 0 ; i < y; i++){
    x[i] = parseInt(prompt("Enter the values of array:"));
    sum+=x[i];
}
console.log("Sum of the array is:" , sum);