let x = [];
let y = parseInt(prompt("Enter the lenght of array:"));
let evenNum = [];
for(let i = 0; i < y; i++){
    x[i] = parseInt(prompt("Enter the values of array:" +i));
    if(x[i] % 2 === 0){
        evenNum.push(x[i]);
    }
}
console.log("Even number of array is:",evenNum);